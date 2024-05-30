import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from './components/MapComponent';
import SearchForm from './components/SearchForm';
import useFetchCoordinates from './hooks/useFetchCoordinates';
import useSearch from './hooks/useSearch';
import Pagination from './components/Pagination';
import Loader from './components/Loader';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const App = () => {
  const { searchValue, category, setSearchValue, setCategory } = useSearch();
  const { cordinates, isLoading, currentPage, totalPages, hasNext, hasPrevious, handleSearch, handleNext, handlePrev } =
    useFetchCoordinates({ category, searchValue });

  return (
    <div className="bg-slate-800 p-8 w-full">
      <h1 className="text-white text-center mb-8 lg:text-4xl sm:text-2xl text-xl text uppercase">
        Find the nearest food Trucks in San Francisco
      </h1>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col items-end w-full md:w-[80%] lg:w-[60%] pb-5">
          <SearchForm
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            category={category}
            setCategory={setCategory}
            onSubmit={handleSearch}
          />
        </div>

        <Pagination handlePrev={handlePrev} handleNext={handleNext} hasPrevious={hasPrevious} hasNext={hasNext} />
        <div className="text-white mt-4">
          Page {currentPage} of {totalPages}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ width: '100%' }}>
          <MapComponent locations={cordinates} />
        </div>
      )}
    </div>
  );
};

export default App;
