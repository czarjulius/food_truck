import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MapComponent from './components/MapComponent';
import SearchForm from './components/SearchForm';
import { useCallback, useEffect, useState } from 'react';
import { fetchCordinates, MobileFoodType } from './services/fetchCordinates';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const App = () => {
  const [cordinates, setCordinates] = useState<MobileFoodType[]>([]);
  const [category, setCategory] = useState<string>('');
  const [searchValue, setSeearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);

  const fetchAndSetCordinates = useCallback(
    async (page: number) => {
      setIsLoading(true);
      const { data, currentPage, hasPrevious, hasNext, totalPages } = await fetchCordinates(
        page,
        category,
        searchValue
      );
      setCordinates(data);
      setIsLoading(false);

      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      setHasPrevious(hasPrevious);
      setHasNext(hasNext);

      setIsLoading(false);
    },
    [searchValue, category]
  );

  useEffect(() => {
    fetchAndSetCordinates(currentPage);
  }, [fetchAndSetCordinates, currentPage]);

  const handleSearch = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    fetchAndSetCordinates(currentPage);
  };

  const handleNext = () => {
    fetchAndSetCordinates(currentPage + 1);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    fetchAndSetCordinates(currentPage - 1);
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className=" bg-slate-800 p-8 w-full">
      <h1 className="text-white text-center mb-8 lg:text-4xl sm:text-2xl text-xl text uppercase">
        Find the nearest food Trucks in San Francisco
      </h1>
      <div className="flex flex-col pb-5">
        <div className="flex flex-col items-end w-full lg:w-[60%] pb-5">
          <SearchForm
            setSeearchValue={setSeearchValue}
            searchValue={searchValue}
            category={category}
            setCategory={setCategory}
            onSubmit={handleSearch}
          />
        </div>

        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li>
              <button
                onClick={handlePrev}
                disabled={!hasPrevious}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-700 bg-white border border-e-0 border-gray-700 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                &lt;&lt; Previous
              </button>
            </li>
            <li>
              <button
                disabled={!hasNext}
                onClick={handleNext}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-700 bg-white border border-gray-700 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next &gt;&gt;
              </button>
            </li>
          </ul>
        </nav>
        <div className="text-white mt-4">
          Page {currentPage} of {totalPages}
        </div>
      </div>
      {isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div style={{ width: '100%' }}>
          <MapComponent locations={cordinates} />
        </div>
      )}
    </div>
  );
};

export default App;
