import { AccountStatistics, StatisticCards } from 'components/section';
import { Sidebar } from 'components/shell';
import { Typography } from 'components/ui';
import { useFetchData } from 'hooks';

export const Dashboard = () => {
  const { accounts, total, totalBalance } = useFetchData();

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <Sidebar />
      <div className="bg-[#f2f4f5] space-y-12 rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl py-8 px-4 sm:py-12 sm:px-8 md:basis-3/4">
        <Typography
          variant="h2"
          className="text-2xl md:text-4xl font-bold text-gray-800 mb-8"
        >
          Accounts Analytics
        </Typography>
        <StatisticCards totalAccounts={total} totalBalance={totalBalance} />
        <AccountStatistics accounts={accounts} />
      </div>
    </div>
  );
};
