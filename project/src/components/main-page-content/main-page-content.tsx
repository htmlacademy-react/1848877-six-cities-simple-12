import { CityLocation, Offers } from '../../types/offers';
import CardList from '../card-list';
import SortPlaces from '../sort-places';
import Map from '../map';
import { SortingTypes } from '../../constants/constants';
import { useState } from 'react';

type MainPageContent = {
  placesCount: number;
  offers: Offers[];
  currentCity: string;
  currentSortName: SortingTypes;
};

const MainPageContent = ({ placesCount, currentCity, offers, currentSortName }: MainPageContent) => {
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(
    null
  );

  const onMouseLeave = () => {
    setSelectedOfferId(null);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {currentCity}</b>
          <SortPlaces currentSortName={currentSortName} />
          <div className="cities__places-list places__list tabs__content">
            <CardList
              offers={offers}
              cardType={'home'}
              onListItemHover={setSelectedOfferId}
              onMouseLeave={onMouseLeave}
            />
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            className="cities__map"
            city={CityLocation}
            offers={offers}
            selectedOfferId={selectedOfferId}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
