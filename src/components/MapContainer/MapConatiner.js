import { MapContainer, Popup, Marker, TileLayer } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Spinner } from '@geist-ui/react';

const MapWrapper = ({ zoom = 50, scrollWheelZoom = true }) => {
  const [loc, setLoc] = useState([null, null]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('grant');
      fetch('https://www.iplocate.io/api/lookup')
        .then((response) => response.json())
        .then((json) => {
          setLoc([json.latitude, json.longitude]);
        });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoc([position.coords.latitude, position.coords.longitude]);
          console.log(position);
        },
        () => {
          fetch('https://www.iplocate.io/api/lookup')
            .then((response) => response.json())
            .then((json) => {
              setLoc([json.latitude, json.longitude]);
            });
        }
      );
    }
  }, []);

  return loc[0] ? (
    <MapContainer
      style={{
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      center={loc}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={loc}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  ) : (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
      }}
    >
      <Spinner size="large" />
    </div>
  );
};

export default MapWrapper;
