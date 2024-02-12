import { useState, useEffect } from 'react';

import {
  ImageWithGradient,
  AccountStatistics,
  StatisticCard,
} from '@components/section';
import { Sidebar } from '@components/shell';
import { FaUsers, FaWallet } from 'react-icons/fa';
import { fetchAccounts } from 'services/fetchAccounts';

import type { AccountData } from './Dashboard.type';

export const Dashboard = () => {
  const [accountData, setAccountData] = useState<AccountData>({
    accounts: [],
    total: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAccounts();
        console.log({ response });
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

  return (
    <div className="flex flex-col md:flex-row w-full">
      <ImageWithGradient
        img={{ src: 'https://placekitten.com/1600/900', alt: '' }}
        className="md:hidden rounded-t-xl [&>*]:rounded-t-xl"
        text="Welcome to Your Dashboard"
      />
      <Sidebar className="md:basis-1/4 w-full" />
      <div className="md:basis-3/4">
        <div className="flex flex-wrap gap-4">
          <div className="flex p-4 gap-12">
            <StatisticCard
              icon={<FaUsers className="text-blue-500 text-5xl" />}
              title="Total Number of Accounts"
              value={accountData.total}
            />
            <StatisticCard
              icon={<FaWallet className="text-blue-500 text-5xl" />}
              title="Total Balance"
              value={accountData.totalBalance}
            />
          </div>
        </div>
        <AccountStatistics accounts={accountData.accounts} />
      </div>
    </div>
  );
};
