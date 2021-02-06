import { MapContainer as Map, Popup, Marker, TileLayer } from 'react-leaflet';

function MapContainer({
  center = [51.505, -0.09],
  zoom = 13,
  scrollZoom,
  position = [51.505, -0.09],
}) {
  return (
    <Map
      style={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollZoom}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
}

export default MapContainer;
