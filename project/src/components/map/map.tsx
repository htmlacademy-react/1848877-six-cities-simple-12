import 'leaflet/dist/leaflet.css';
import cn from 'classnames';
import { Icon, Marker } from 'leaflet';
import { Offers, City } from '../../types/offers';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../constants/constants';
import useMap from '../use-map';
import { useEffect, useRef } from 'react';

type MapProps = {
  className: string;
  city: City;
  offers: Offers[];
  selectedOfferId?: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const Map = ({ className, city, offers, selectedOfferId }: MapProps) => {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOfferId && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedOfferId]);

  return (
    <section
      className={cn('map', className)}
      style={{ height: '562px' }}
      ref={mapRef}
    >
    </section>
  );
};

export default Map;
