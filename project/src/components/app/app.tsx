import Router from '../../router';

type AppProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppProps) => (
  < Router placesCount={placesCount} />
);

export default App;
