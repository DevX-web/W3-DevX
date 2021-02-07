import {
  MapContainer,
  Popup,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Spinner, Button } from '@geist-ui/react';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const MapWrapper = ({ zoom = 50, scrollWheelZoom = true }) => {
  return (
    <MapContainer
      style={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      center={[19, 72]}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapWrapper;
