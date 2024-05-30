import React from 'react';
import { MobileFoodType } from '../services/fetchCordinates';
import LocationInfo from './LocationInfo';

interface MarkerPopupProps {
  location: MobileFoodType;
}

const MarkerPopup: React.FC<MarkerPopupProps> = ({ location }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-4">
        <h2 className="text-white text-xl font-bold uppercase">{location?.name}</h2>
        <p className="text-gray-400">Facility Type - {location?.facilityType}</p>
      </div>
      <div className="p-4">
        <LocationInfo name="Location Description" value={location?.locationDescription} />
        <LocationInfo name="Address" value={location?.address} />
        <LocationInfo name="Status" value={location?.status} />
        <LocationInfo name="Days/Hours" value={location?.dayshours} />
        <LocationInfo name="Food Items" value={location?.foodItems} />
        <LocationInfo name="Zip Codes" value={location?.zipCodes} />
        <LocationInfo name="Latitude" value={location?.lat} />
        <LocationInfo name="Longitude" value={location?.lng} />
        <LocationInfo name="Approved" value={location?.approved} />
        <LocationInfo name="Expiration Date" value={location?.expirationDate} />
        <div className="mt-4">
          <a href={location?.schedule} className="text-blue-500 hover:underline">
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarkerPopup;
