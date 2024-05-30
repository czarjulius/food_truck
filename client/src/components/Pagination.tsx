import React from 'react';

interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ handlePrev, handleNext, hasPrevious, hasNext }) => {
  return (
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
  );
};

export default Pagination;
