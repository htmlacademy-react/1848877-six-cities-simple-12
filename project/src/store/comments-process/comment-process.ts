import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../constants/constants';
import { CommentProcess, } from './types';
import { Comment } from '../../types/comments';
import { Review } from '../../types/review';

const initialState: CommentProcess = {
  loadComments: [],
  nextReview: null,
};

export const commentProcessSlice = createSlice({
  name: NameSpace.Comment,
  initialState,
  reducers: {
    setLoadComments: (state, action: PayloadAction<Comment[]>) => {
      state.loadComments = action.payload;
    },
    setNextReview: (state, action: PayloadAction<Review | null>) => {
      state.nextReview = action.payload;
    },
  },
});

export const { setLoadComments, setNextReview } = commentProcessSlice.actions;
