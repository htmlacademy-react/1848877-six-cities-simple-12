import MainPage from '../../pages/main-page/main-page';

type AppPlacesCountProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppPlacesCountProps) => (
  <MainPage placesCount={placesCount} />
);

export default App;
