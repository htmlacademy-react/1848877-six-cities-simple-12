import Main from '../pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer';
import Login from '../pages/login';
import { AppRoute } from './RoutePath';
import NotFound from '../pages/not-found';
import { Offers } from '../types/offers';

type RouterProps = {
  placesCount: number;
  offers: Offers[];
}

const Router = ({ placesCount, offers }: RouterProps) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main placesCount={placesCount} offers={offers} />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
