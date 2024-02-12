import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import type { PaginationProps } from './Pagination.type';
import { Button } from '../Button';

export const Pagination = ({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: PaginationProps) => (
  <div className="inline-flex gap-4 md:gap-6 w-full justify-center items-center mt-4">
    <Button
      className="flex items-center gap-4"
      disabled={currentPage === 1}
      onClick={handlePreviousPage}
      aria-label="Previous page"
    >
      <FaArrowLeft />
    </Button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <Button
      className="flex items-center gap-4"
      disabled={currentPage === totalPages}
      onClick={handleNextPage}
      aria-label="Next page"
    >
      <FaArrowRight />
    </Button>
  </div>
);
