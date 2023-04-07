import { createReducer } from '@reduxjs/toolkit';
import { changeSort, cityChange, offerIdChange, loadOffers, setError, setIsOffersDataLoading, setLoadComments, setNearOffers, setNextReview, loadOfferById } from './action';
import { Offers } from '../types/offers';
import { CITIES } from '../components/cities/constants';
import { SortingTypes } from '../constants/constants';
import { Comment } from '../types/comments';
import { Review } from '../types/review';
import { UserData } from './user-process/types';
import { setUserData } from './user-process/user-process';

type InitialState = {
  city: string;
  offers: Offers[];
  sortName: SortingTypes;
  id: number | null;
  error: string | null;
  isOffersDataLoading: boolean;
  userData: UserData | null;
  loadComments: Comment[];
  nearOffers: Offers[];
  nextReview: Review | null;
  offer: Offers | null;
};

const initialState: InitialState = {
  offers: [],
  city: CITIES[0],
  sortName: SortingTypes.Popular,
  id: null,
  error: null,
  isOffersDataLoading: false,
  userData: null,
  loadComments: [],
  nearOffers: [],
  nextReview: null,
  offer: null,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setIsOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setLoadComments, (state, action) => {
      state.loadComments = action.payload;
    })
    .addCase(setNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setNextReview, (state, action) => {
      state.nextReview = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offer = action.payload;
    });
});

export { reducer };
