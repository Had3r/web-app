export interface Account {
  id: number;
  name: string;
  type: string;
  balance: number;
}

export interface AccountData {
  accounts: Account[];
  total: number;
  totalBalance: number;
}
