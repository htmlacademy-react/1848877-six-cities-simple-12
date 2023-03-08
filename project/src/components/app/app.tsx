import Main from '../../pages/main/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../../pages/offer/index';
import Login from '../../pages/login/index';
import { AppRoute } from './const';
import NotFound from '../../pages/not-found';

type AppProps = {
  placesCount: number;
}

const App = ({ placesCount }: AppProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main placesCount={placesCount} />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
