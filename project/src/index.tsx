import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/index';
import { offersMock } from './mocks/offers';

const Setting = {
  PlacesCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PlacesCount}
      offers={offersMock}
    />
  </React.StrictMode>,
);
