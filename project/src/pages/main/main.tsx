import { Offers } from '../../types/offers';
import Cities from '../../components/cities';
import MainPageContent from '../../components/main-page-content';

type MainProps = {
  placesCount: number;
  offers: Offers[];
}

const Main = ({ placesCount, offers }: MainProps) => (
  < main className="page__main page__main--index" >
    <h1 className="visually-hidden">Cities</h1>
    <Cities currentCity="Amsterdam" />
    <MainPageContent placesCount={placesCount} offers={offers} />
  </main >
);


export default Main;
