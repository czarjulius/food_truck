export const BASE_URL = process.env.REACT_APP_BASE_URL;

export type MobileFoodType = {
  lat: number;
  lng: number;
  name: string;
  facilityType: string;
  locationDescription: string;
  address: string;
  status: string;
  schedule: string;
  dayshours: string;
  approved: string;
  expirationDate: string;
  zipCodes: number | string;
  foodItems: string;
};

export const fetchCordinates = async (page: number, category: string, searchValue: string) => {
  const response = await fetch(`${BASE_URL}?page=${page}&${category}=${searchValue}`);
  const { data, currentPage, hasPrevious, hasNext, totalPages } = await response.json();
  return { data, currentPage, hasPrevious, hasNext, totalPages };
};
