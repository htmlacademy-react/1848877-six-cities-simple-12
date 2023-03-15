import Rating from '../rating';
import { REVIEW_STARS } from './const';
import { useState } from 'react';

const ReviewForm = () => {
  const [data, setData] = useState({
    rating: '',
    review: '',
  });

  const changeDataHandle = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_STARS.map((star) => (
          <Rating
            key={star.value}
            value={star.value}
            title={star.title}
            onChangeData={changeDataHandle}
          />))}
      </div>
      <textarea onChange={changeDataHandle} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={data.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set {''} <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
