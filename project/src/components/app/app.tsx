import MainPage from '../../pages/main_page/main-page';

type AppPlacesCountProps = {
  placesCount: number;
}

function App({ placesCount }: AppPlacesCountProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} />
  );
}

export default App;
