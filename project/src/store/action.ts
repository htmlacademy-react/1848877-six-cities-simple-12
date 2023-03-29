import { createAction } from '@reduxjs/toolkit';
import { SortingTypes } from '../constants/constants';

export const cityChange = createAction('offers/cityChange', (city: string) => ({
  payload: city,
}));

export const offerIdChange = createAction('offers/offerIdChange', (id: number | null) => ({
  payload: id,
}));

export const changeSort = createAction('offers/changeSort', (sortName: SortingTypes) => ({
  payload: sortName
})
);
