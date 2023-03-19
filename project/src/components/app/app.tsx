import Router from '../../router';
import { Offers, City } from '../../types/offers';

type AppProps = {
  placesCount: number;
  offers: Offers[];
}

const App = ({ placesCount, offers}: AppProps) => (
  < Router
    placesCount={placesCount}
    offers={offers}
  />
);

export default App;
