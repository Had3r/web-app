import { useState, useEffect } from 'react';

import { AccountStatistics, StatisticCard } from '@components/section';
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
      <Sidebar className="" />
      <div className="md:basis-3/4">
        <h1>Accounts Analytics</h1>
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          <StatisticCard
            icon={<FaUsers className="text-[#9b89ff] text-5xl p-1" />}
            title="Total Number of Accounts"
            value={accountData.total}
            iconBgClass="bg-[#ebe7ff]"
            className="flex-1"
          >
            <div className="flex items-end gap-1 [&>*]:rounded-sm">
              <div className="bg-[#eff0f3] w-2 h-8"></div>
              <div className="bg-[#eff0f3] w-2 h-10"></div>
              <div className="bg-[#28dc84] w-2 h-16"></div>
              <div className="bg-[#eff0f3] w-2 h-12"></div>
            </div>
          </StatisticCard>
          <StatisticCard
            icon={<FaWallet className="text-[#fea258] text-5xl p-1.5" />}
            title="Total Balance"
            value={accountData.totalBalance}
            iconBgClass="bg-[#ffecdd]"
            className="flex-1"
          >
            <div className="flex items-end gap-1 [&>*]:rounded-sm">
              <div className="bg-[#eff0f3] w-2 h-8"></div>
              <div className="bg-[#eff0f3] w-2 h-10"></div>
              <div className="bg-[#eff0f3] w-2 h-12"></div>
              <div className="bg-[#28dc84] w-2 h-16"></div>
            </div>
          </StatisticCard>
        </div>
        <AccountStatistics accounts={accountData.accounts} />
      </div>
    </div>
  );
};
