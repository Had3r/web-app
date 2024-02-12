import React, { useState } from 'react';

import { twMerge } from 'tailwind-merge';

import type { SearchFormProps, SearchParams } from './SearchForm.type';
import { Button } from '../Button';
import { FormInput } from '../FormInput';

export const SearchForm = ({ onSearch, className }: SearchFormProps) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    ownerId: '',
    currency: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge(
        'flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg shadow',
        className
      )}
    >
      <FormInput
        id="owner-id"
        className="border p-2 rounded"
        type="text"
        placeholder="Owner ID"
        value={searchParams.ownerId}
        onChange={(e) =>
          setSearchParams({ ...searchParams, ownerId: e.target.value })
        }
      />
      <FormInput
        id="currency"
        className="border p-2 rounded"
        type="text"
        placeholder="Currency"
        value={searchParams.currency}
        onChange={(e) =>
          setSearchParams({ ...searchParams, currency: e.target.value })
        }
      />
      <Button type="submit" className="mt-2">
        Search
      </Button>
    </form>
  );
};
