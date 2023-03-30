import ReviewItem from '../review-item';
import { reviews } from '../../mocks/reviews';
import { MAX_REVIEWS } from './constants';
import { humanizeDate } from '../../utils/humanizeDate';
import { Review } from '../../types/review';

const getReviewList = (review: Review[]) => {
  const reviewItems = review.slice(0, review.length > MAX_REVIEWS ? MAX_REVIEWS : review.length);

  const reviewItemList = reviewItems.sort((a, b) => new Date(humanizeDate(b.date, 'YYYY-MM-DD')).getTime() - new Date(humanizeDate(a.date, 'YYYY-MM-DD')).getTime());

  return reviewItemList;
};

const ReviewList = () => (
  <ul className="reviews__list">
    {getReviewList(reviews).map((review: Review) => (
      <ReviewItem key={review.user.name} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />
    ))}
  </ul>
);

export default ReviewList;
