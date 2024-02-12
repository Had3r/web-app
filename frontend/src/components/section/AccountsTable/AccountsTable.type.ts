interface Account {
  id: number;
  ownerId: string;
  currency: string;
  balance: number;
}

export interface AccountsTableComponentProps {
  accounts: Account[];
  resultsPerPage: number;
  openDeleteModal: (ownerId: string) => void;
}
