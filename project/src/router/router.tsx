import Main from '../pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer';
import Login from '../pages/login';
import { AppRoute } from './RoutePath';
import NotFound from '../pages/not-found';

type RouterProps = {
  placesCount: number;
}

const Router = ({ placesCount }: RouterProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main placesCount={placesCount} />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
