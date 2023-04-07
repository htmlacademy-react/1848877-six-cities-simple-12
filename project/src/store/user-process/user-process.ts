import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AuthorizationStatus, NameSpace } from '../../constants/constants';
import { AxiosInstance } from 'axios';
import { UserData } from './types';
import { APIRoute } from '../../services/constants';
import { toast } from 'react-toastify';
import { AuthData } from '../../types/auth-data';
import { dropToken, saveToken } from '../../services/token';
import { AppRoute } from '../../router/RoutePath';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
  redirectToRoute: AppRoute | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  redirectToRoute: null,
};

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<UserData>(APIRoute.Login);
      dispatch(setUserData(data));
    } catch (e) {
      toast.error('Failed to check authorization');
      throw e;
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      if (data) {
        saveToken(data.token);
      }
      dispatch(setUserData(data));
      dispatch(setRedirectToRoute(AppRoute.Root));
    } catch (e) {
      toast.error('Failed to authorization');
      throw e;
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(setUserData(null));
    } catch (e) {
      toast.error('Failed to logout');
      throw e;
    }
  },
);

export const userProcessSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
    setRedirectToRoute: (state, action: PayloadAction<AppRoute | null>) => {
      state.redirectToRoute = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const { setUserData, setRedirectToRoute } = userProcessSlice.actions;
