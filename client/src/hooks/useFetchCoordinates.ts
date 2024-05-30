import { useState, useCallback, useEffect } from 'react';
import { fetchCordinates, MobileFoodType } from '../services/fetchCordinates';

interface UseFetchCoordinatesProps {
  category: string;
  searchValue: string;
}

interface UseFetchCoordinatesReturn {
  cordinates: MobileFoodType[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  fetchAndSetCordinates: (page: number) => Promise<void>;
  handleSearch: (event: React.FormEvent<EventTarget>) => void;
  handleNext: () => void;
  handlePrev: () => void;
}

const useFetchCoordinates = ({ category, searchValue }: UseFetchCoordinatesProps): UseFetchCoordinatesReturn => {
  const [cordinates, setCordinates] = useState<MobileFoodType[]>([]);
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
      setCurrentPage(currentPage);
      setTotalPages(totalPages);
      setHasPrevious(hasPrevious);
      setHasNext(hasNext);
      setIsLoading(false);
    },
    [category, searchValue]
  );

  useEffect(() => {
    fetchAndSetCordinates(currentPage);
  }, [fetchAndSetCordinates, currentPage]);

  const handleSearch = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault();
    setCurrentPage(1);
    fetchAndSetCordinates(1);
  };

  const handleNext = () => {
    fetchAndSetCordinates(currentPage + 1);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    fetchAndSetCordinates(currentPage - 1);
    setCurrentPage((prev) => prev - 1);
  };

  return {
    cordinates,
    isLoading,
    currentPage,
    totalPages,
    hasNext,
    hasPrevious,
    fetchAndSetCordinates,
    handleSearch,
    handleNext,
    handlePrev,
  };
};

export default useFetchCoordinates;
