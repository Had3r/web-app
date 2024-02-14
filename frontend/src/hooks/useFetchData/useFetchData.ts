import { useState, useEffect } from 'react';

import type { AccountData } from 'pages/Dashboard/Dashboard.type';
import { fetchAccounts } from 'services/fetchAccounts';

export const useFetchData = () => {
  const [accountData, setAccountData] = useState<AccountData>({
    accounts: [],
    total: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAccounts();
        const totalBalance = response.data.reduce(
          (acc, account) => acc + account.balance,
          0
        );
        setAccountData({
          accounts: response.data,
          total: response.total,
          totalBalance,
        });
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
      }
    };

    fetchData();
  }, []);

  return accountData;
};
