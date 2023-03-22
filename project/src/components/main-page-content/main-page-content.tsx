import { CityLocation, Offers } from '../../types/offers';
import CardList from '../card-list';
import SortPlaces from '../sort-places';
import Map from '../map';

type MainPageContent = {
  placesCount: number;
  offers: Offers[];
};

const MainPageContent = ({ placesCount, offers }: MainPageContent) => (
  <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in Amsterdam</b>
        < SortPlaces />
        <div className="cities__places-list places__list tabs__content">
          <CardList offers={offers} cardType={'home'} />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          className="cities__map"
          city={CityLocation}
          offers={offers}
        />
      </div>
    </div>
  </div>
);

export default MainPageContent;
