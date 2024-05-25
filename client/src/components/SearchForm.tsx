interface IFormProps {
  setSeearchValue: (e: string) => void;
  searchValue: string;
  setCategory: (e: string) => void;
  onSubmit: (e: React.FormEvent<EventTarget>) => void;
  category: string;
}

type CategoryType = {
  value: string;
  label: string;
};
const categoryOptions: CategoryType[] = [
  { value: 'vendor', label: 'Vendor' },
  { value: 'address', label: 'Address' },
  { value: 'fooditems', label: 'Food Items' },
  { value: 'zipcodes', label: 'Zip Codes' },
  { value: 'facilitytype', label: 'Facility Type' },
];

const SearchForm = ({ onSubmit, setSeearchValue, searchValue, category, setCategory }: IFormProps) => {
  return (
    <form style={{ width: '100%' }} className="mx-auto" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 gap-3">
        <select
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          id="search-dropdown"
          className="w-full h-[50px] md:w-auto flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none"
        >
          <option value="" disabled>
            Select categroy
          </option>

          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="relative w-full">
          <input
            type="search"
            id="search-input"
            className="block h-[52px] p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter search keyword"
            required
            onChange={(e) => setSeearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
