import { createReducer } from '@reduxjs/toolkit';
import { changeSort, cityChange, offerIdChange, loadOffers, requireAuthorization, setError, setIsOffersDataLoading, setUserData } from './action';
import { Offers } from '../types/offers';
import { CITIES } from '../components/cities/constants';
import { AuthorizationStatus, SortingTypes } from '../constants/constants';
import { UserData } from '../types/user-data';

type InitialState = {
  city: string;
  offers: Offers[];
  sortName: SortingTypes;
  id: number | null;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  userData: UserData | null;
};

const initialState: InitialState = {
  offers: [],
  city: CITIES[0],
  sortName: SortingTypes.Popular,
  id: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  userData: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(cityChange, (state, action) => {
    state.city = action.payload;
  })
    .addCase(changeSort, (state, action) => {
      state.sortName = action.payload;
    })
    .addCase(offerIdChange, (state, action) => {
      state.id = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setIsOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export { reducer };
