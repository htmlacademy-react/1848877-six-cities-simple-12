import MainPage from '../../pages/main-page/main-page';

type AppPlacesCountProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppPlacesCountProps) => {
  return <MainPage placesCount={placesCount} />

}

export default App; 
