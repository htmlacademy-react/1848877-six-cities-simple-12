import { createReducer } from '@reduxjs/toolkit';
import { offersMock } from '../mocks/offers';
import { cityChange } from './action';
import { Offers } from '../types/offers';
import { CITIES } from '../components/cities/constants';

type initialState = {
  city: string;
  offers: Offers[];
};

const initialState: initialState = {
  offers: offersMock,
  city: CITIES[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(cityChange, (state, action) => {
    state.city = action.payload;
  });
});

export { reducer };
