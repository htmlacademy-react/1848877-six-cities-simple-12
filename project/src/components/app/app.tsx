import Router from './route-path';

type AppProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppProps) => (
  < Router placesCount={placesCount} />
);

export default App;
