import { SearchForm } from '@components/ui';

export const SearchFormWrapper = ({ onSearch }: any) => (
  <SearchForm className="mb-4 mt-12" onSearch={onSearch} />
);
