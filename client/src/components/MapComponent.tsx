import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MobileFoodType } from '../services/fetchCordinates';

interface MapComponentProps {
  locations: MobileFoodType[];
}

const MapComponent = ({ locations }: MapComponentProps) => {
  return (
    <MapContainer center={[37.775, -122.417]} zoom={13} style={{ height: '100vh', width: 'auto', padding: '10px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index: number) => (
        <Marker key={index} position={[location.lat, location.lng]}>
          <Popup>
            <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-800 p-4">
                <h2 className="text-white text-xl font-bold uppercase">{location?.name}</h2>
                <p className="text-gray-400">Facility Type - {location?.facilityType}</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Location Description:</span> {location?.locationDescription}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Address:</span> {location?.address}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Status:</span> {location?.status}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Days/Hours:</span> {location?.dayshours}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Food Items:</span> {location?.foodItems}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Zip Codes:</span> {location?.zipCodes}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Latitude:</span> {location?.lat}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Longitude:</span> {location?.lng}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Approved:</span> {location?.approved}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Expiration Date:</span> {location?.expirationDate}
                </p>
                <div className="mt-4">
                  <a href={location?.schedule} className="text-blue-500 hover:underline">
                    View Schedule
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
