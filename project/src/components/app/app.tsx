import Main from '../../pages/main/index';

type AppProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppProps) => (
  <Main placesCount={placesCount} />
);

export default App;
