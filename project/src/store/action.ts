import { createAction } from '@reduxjs/toolkit';
import { SortingTypes } from '../constants/constants';
import { Offers } from '../types/offers';
import { Comment } from '../types/comments';
import { Review } from '../types/review';

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

export const loadOffers = createAction('offers/loadOffers', (offers: Offers[]) => ({
  payload: offers
}));

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));

export const setIsOffersDataLoading = createAction('data/setIsOffersDataLoading', (isOffersDataLoading: boolean) => ({
  payload: isOffersDataLoading
}));

export const setLoadComments = createAction('comments/loadComments', (loadComments: Comment[]) => ({
  payload: loadComments
}));

export const setNearOffers = createAction('comments/nearOffers', (nearOffers: Offers[]) => ({
  payload: nearOffers
}));

export const setNextReview = createAction('reviews/setNextReview', (nextReview: Review) => ({
  payload: nextReview
}));

export const loadOfferById = createAction('data/loadOfferById', (offer: Offers) => ({
  payload: offer
}));
