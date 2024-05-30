import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MobileFoodType } from '../services/fetchCordinates';
import MapMarker from './MapMarker';

interface MapComponentProps {
  locations: MobileFoodType[];
}

const MapComponent: React.FC<MapComponentProps> = ({ locations }) => {
  return (
    <MapContainer center={[37.775, -122.417]} zoom={13} style={{ height: '100vh', width: 'auto', padding: '10px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations?.map((location, index) => (
        <MapMarker key={index} location={location} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
