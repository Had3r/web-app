export interface SearchParams {
  ownerId: string;
  currency: string;
}

export interface SearchFormProps {
  onSearch: (params: SearchParams) => void;
  className?: string;
}
