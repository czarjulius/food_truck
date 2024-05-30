import { useState } from 'react';

interface UseSearchReturn {
  searchValue: string;
  category: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const useSearch = (): UseSearchReturn => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  return {
    searchValue,
    category,
    setSearchValue,
    setCategory,
  };
};

export default useSearch;
