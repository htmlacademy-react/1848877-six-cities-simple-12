import { createAsyncThunk } from '@reduxjs/toolkit';
import { Offers } from '../types/offers';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../services/constants';
import { loadOffers, setError, setIsOffersDataLoading, setLoadComments, setNearOffers, setNextReview, loadOfferById } from './action';
import { store } from '.';
import { Comment } from '../types/comments';
import { OfferId, Review, ReviewComment } from '../types/review';
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
    dispatch(setIsOffersDataLoading(true));
    const { data } = await api.get<Offers[]>(APIRoute.Offers);
    dispatch(setIsOffersDataLoading(false));
    dispatch(loadOffers(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(setLoadComments(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(setNearOffers(data));
  },
);

export const sendCommentAction = createAsyncThunk<void, ReviewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({ hotelId, rating, comment }, { dispatch, extra: api }) => {
    try {
      const { data: review } = await api.post<Review>(`${APIRoute.Comments}/${hotelId}`, { rating, comment });
      dispatch(setNextReview(review));
      dispatch(fetchCommentsAction({ id: hotelId }));
    } catch (err) {
      toast.error('Attempt to send a message failed');
      throw err;
    }
  });

export const fetchOfferByIdAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async ({ id }, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}`);
    dispatch(loadOfferById(data));
  },
);
