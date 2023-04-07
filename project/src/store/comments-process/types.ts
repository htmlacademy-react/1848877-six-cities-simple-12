import { Comment } from '../../types/comments';
import { Review } from '../../types/review';

export type CommentProcess = {
  loadComments: Comment[];
  nextReview: Review | null;
}
