import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { MobileFoodType } from '../services/fetchCordinates';
import MarkerPopup from './MarkerPopup';

interface MapMarkerProps {
  location: MobileFoodType;
}

const MapMarker: React.FC<MapMarkerProps> = ({ location }) => {
  return (
    <Marker position={[location.lat, location.lng]}>
      <Popup>
        <MarkerPopup location={location} />
      </Popup>
    </Marker>
  );
};

export default MapMarker;
