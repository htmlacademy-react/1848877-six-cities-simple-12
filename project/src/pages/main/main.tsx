import { Offers } from '../../types/offers';
import CardList from '../../components/card-list';
import SortPlaces from '../../components/sort-places';
import Cities from '../../components/cities';
import { CityLocation } from '../../mocks/offers';
import { useState } from 'react';
import Map from '../../components/map';

type MainProps = {
  placesCount: number;
  offers: Offers[];
}

const Main = ({ placesCount, offers }: MainProps) => {
  const [selectedOfferId, setSelectedOfferId] = useState<number | null>(
    null
  );

  return (
    < main className="page__main page__main--index" >
      <h1 className="visually-hidden">Cities</h1>
      <Cities currentCity="Amsterdam" />
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesCount} places to stay in Amsterdam</b>
            < SortPlaces />
            <div className="cities__places-list places__list tabs__content">
              <CardList offers={offers}
                onListItemHover={setSelectedOfferId} />
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
    </main >
  );
};

export default Main;
