import {
  MapContainer,
  Popup,
  Marker,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import LocationMarker from './LocationMarker';
import { useEffect, useState } from 'react';
import { Spinner, Button } from '@geist-ui/react';

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
