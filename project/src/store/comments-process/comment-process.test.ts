import { makeFakeReviews } from "../../utils/mocks";
import { fetchCommentsAction } from "./api-actionts";
import { commentProcessSlice, setLoadComments, setNextReview } from "./comment-process";
import { CommentProcess } from "./types";

describe('reducer: offerPropertyData', () => {
  let state: CommentProcess;
  const fakeReviews = makeFakeReviews();

  beforeEach(() => {
    state = {
      loadComments: [],
      nextReview: null,
    };
  });

  it('Should return initial state', () => {
    expect(commentProcessSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  it('should loaded reviews if action fulfilled', () => {
    const commentReducer = commentProcessSlice.reducer(state, {
      type: setLoadComments,
      payload: fakeReviews
    })
    expect(commentReducer).toEqual({ loadComments: fakeReviews, nextReview: null });
  });

  it('should loaded reviews if action fulfilled', () => {
    const comment = 'testtest'
    const commentReducer = commentProcessSlice.reducer(state, {
      type: setNextReview,
      payload: fakeReviews[0]
    })
    expect(commentReducer).toEqual({ loadComments: [], nextReview: fakeReviews[0] });
  });
});

