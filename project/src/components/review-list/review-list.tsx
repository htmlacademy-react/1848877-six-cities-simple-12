import ReviewItem from '../review-item';
import { reviews } from '../../mocks/reviews';

const ReviewList = () => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />
    ))}
  </ul>
);

export default ReviewList;
