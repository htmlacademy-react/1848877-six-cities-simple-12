import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, SortingTypes } from '../constants/constants';
import { Offers } from '../types/offers';
import { UserData } from '../types/user-data';
import { AppRoute } from '../router/RoutePath';

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

export const requireAuthorization = createAction('user/requireAuthorization', (authorizationStatus: AuthorizationStatus) => ({
  payload: authorizationStatus
}));

export const setError = createAction('offers/setError', (error: string | null) => ({
  payload: error
}));

export const setIsOffersDataLoading = createAction('data/setIsOffersDataLoading', (isOffersDataLoading: boolean) => ({
  payload: isOffersDataLoading
}));

export const setUserData = createAction('user/setUserData', (userData: UserData | null) => ({
  payload: userData
}));

export const setRedirectToRoute = createAction('app/redirectToRoute', (redirectToRoute: AppRoute) => ({
  payload: redirectToRoute
}));
