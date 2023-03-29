import ReviewItem from '../review-item';
import { reviews } from '../../mocks/reviews';
import { MAX_REVIEWS } from './constants';
import { humanizeDate } from '../../utils/humanizeDate';

const ReviewList = () => {
  const reviewItems = reviews.slice(0, reviews.length > MAX_REVIEWS ? MAX_REVIEWS : reviews.length);

  reviewItems.sort((a, b) => new Date(humanizeDate(b.date, 'YYYY-MM-DD')).getTime() - new Date(humanizeDate(a.date, 'YYYY-MM-DD')).getTime());

  return (
    <ul className="reviews__list">
      {reviewItems.map((review) => (
        <ReviewItem key={review.id} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />
      ))}
    </ul>
  );
};
export default ReviewList;
