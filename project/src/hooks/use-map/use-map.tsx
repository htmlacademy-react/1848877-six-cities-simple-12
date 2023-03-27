import leaflet, { Map, Marker } from 'leaflet';
import { City } from '../../types/offers';
import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { ATTRIBUTION, TITLE } from './constants';

export const useMapMarkers = (map: Map | null) => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  const addMarker = (newMarker: Marker) => {
    setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
  };

  const clearMarkers = () => {
    if (map) {
      markers.forEach((marker) => {
        map.removeLayer(marker);
      });
      setMarkers([]);
    }
  };

  return {markers, addMarker, clearMarkers};
};

const useMap = (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
): Map | null => {
  const [map, setMap] = useState<Map | null>(null);

  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new leaflet.TileLayer(TITLE, {
        attribution: ATTRIBUTION,
      });
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, map, city]);

  return map;
};

export default useMap;
