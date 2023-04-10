import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../services/constants';
import { loadOfferById, loadOffers, setError, setIsOffersDataLoading } from './offer-process';
import { Offers } from '../../types/offers';
import { OfferId } from '../../types/review';
import { TIMEOUT_SHOW_ERROR } from '../../services/constants';
import { store } from '..';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setIsOffersDataLoading(true));
      const { data } = await api.get<Offers[]>(APIRoute.Offers);
      dispatch(setIsOffersDataLoading(false));
      dispatch(loadOffers(data));
    } catch (e) {
      toast.error('Cannot get offers');
    }
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async ({ id }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}`);
      dispatch(loadOfferById(data));
    } catch (e) {
      toast.error('Cannot get offer');
    }
  },
);
