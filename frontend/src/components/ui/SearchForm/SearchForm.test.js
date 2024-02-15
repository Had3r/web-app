import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { SearchForm } from './SearchForm';

describe('SearchForm', () => {
  it('renders correctly', () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} className="test-class" />);

    expect(screen.getByPlaceholderText('Owner ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Currency')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('disables search button when form is empty', () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} className="test-class" />);

    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled();
  });

  it('enables search button when form is filled', () => {
    const mockOnSearch = jest.fn();
    render(<SearchForm onSearch={mockOnSearch} className="test-class" />);

    fireEvent.change(screen.getByPlaceholderText('Owner ID'), {
      target: { value: '123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Currency'), {
      target: { value: 'USD' },
    });

    expect(screen.getByRole('button', { name: 'Search' })).not.toBeDisabled();
  });
});
