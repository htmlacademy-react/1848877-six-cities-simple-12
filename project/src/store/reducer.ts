import { createReducer } from '@reduxjs/toolkit';
import { offersMock } from '../mocks/offers';
import { changeSort, cityChange, offerIdChange } from './action';
import { Offers } from '../types/offers';
import { CITIES } from '../components/cities/constants';
import { SortingTypes } from '../constants/constants';

type InitialState = {
  city: string;
  offers: Offers[];
  sortName: SortingTypes;
  id: number | null;
};

const initialState: InitialState = {
  offers: offersMock,
  city: CITIES[0],
  sortName: SortingTypes.Popular,
  id: null,
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
    });
});

export { reducer };
