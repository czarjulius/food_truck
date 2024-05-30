import React from 'react';

interface LocationInfoProps {
  name: string;
  value: string | number;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ name, value }) => {
  return (
    <div>
      <p className="text-gray-700">
        <span className="font-semibold capitalize">{name}:</span> {value}
      </p>
    </div>
  );
};

export default LocationInfo;
