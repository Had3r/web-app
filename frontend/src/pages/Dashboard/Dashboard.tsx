import { AccountStatistics, StatisticCards } from '@components/section';
import { Sidebar } from '@components/shell';
import { useFetchData } from 'hooks';

export const Dashboard = () => {
  const { accounts, total, totalBalance } = useFetchData();

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Sidebar />
      <div className="bg-[#f2f4f5] space-y-12 rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl py-12 px-8 md:basis-3/4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Accounts Analytics
        </h1>
        <StatisticCards totalAccounts={total} totalBalance={totalBalance} />
        <AccountStatistics accounts={accounts} />
      </div>
    </div>
  );
};
