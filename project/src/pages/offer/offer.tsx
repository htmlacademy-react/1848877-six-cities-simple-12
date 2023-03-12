import { useParams } from 'react-router-dom';
import Map from '../../components/map';
import NearPlaces from '../../components/near-places';
import PropertyImages from '../../components/property-images';
import ReviewForm from '../../components/review-form';
import PropertyItem from '../property-item';
import { useEffect, useState } from 'react';
import { Offers } from '../../types/offers';
import { offersMock } from '../../mocks/offers';


const Offer = ({ }) => {
  const { id } = useParams();
  const [room, setRoom] = useState<Offers>();
  useEffect(() => { setRoom(offersMock.find((offer) => offer.id === Number(id))); }, []);

  if (!room) {
    return <>Loading...</>;
  }

  return (
    < main className="page__main page__main--property" >
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {room.images.map((img) => (<PropertyImages key={img} img={img} />))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            <div className="property__mark">
              <span>{room.isPremium ? 'Premium' : ''}</span>
            </div>
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {room.title}
              </h1>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{ width: '80%' }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{room.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {room.type.replace(room.type[0], room.type[0].toUpperCase())}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {room.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {room.maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{room.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {room.goods.map((item) => (
                  <PropertyItem key={item} item={item} />
                ))}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={room.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {room.host.name}
                </span>
                <span className="property__user-status">
                  {room.host.isPro}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="property__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                    </div>
                    <span className="reviews__user-name">
                      Max
                    </span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                  </div>
                </li>
              </ul>
              <ReviewForm />
            </section>
          </div>
        </div>
        <Map />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <NearPlaces />
            <NearPlaces />
            <NearPlaces />
          </div>
        </section>
      </div>
    </main >
  );
};

export default Offer;
