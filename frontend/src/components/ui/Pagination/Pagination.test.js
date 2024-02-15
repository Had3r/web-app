import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Pagination } from '../Pagination';

describe('Pagination Component', () => {
  it('renders correctly and shows the correct page number', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={() => {}}
      />
    );
    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
  });

  it('disables the previous page button on the first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={() => {}}
      />
    );
    expect(screen.getByLabelText('Previous page')).toBeDisabled();
  });

  it('disables the next page button on the last page', () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={() => {}}
      />
    );
    expect(screen.getByLabelText('Next page')).toBeDisabled();
  });

  it('enables both buttons on a middle page', () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={() => {}}
      />
    );
    expect(screen.getByLabelText('Previous page')).not.toBeDisabled();
    expect(screen.getByLabelText('Next page')).not.toBeDisabled();
  });

  it('calls handlePreviousPage when the previous page button is clicked', () => {
    const handlePreviousPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={() => {}}
      />
    );
    fireEvent.click(screen.getByLabelText('Previous page'));
    expect(handlePreviousPage).toHaveBeenCalled();
  });

  it('calls handleNextPage when the next page button is clicked', () => {
    const handleNextPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handlePreviousPage={() => {}}
        handleNextPage={handleNextPage}
      />
    );
    fireEvent.click(screen.getByLabelText('Next page'));
    expect(handleNextPage).toHaveBeenCalled();
  });
});
