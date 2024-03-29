import type { AccountStatisticsProps } from './AccountStatistics.type';
import { AccountTypesPie } from './components/AccountTypesPie';
import { BalanceDistributionBar } from './components/BalanceDistributionBar';
import { ChartCard } from './components/ChartCard';

export const AccountStatistics = ({ accounts }: AccountStatisticsProps) => {
  if (!accounts || accounts.length === 0) {
    return <div className="text-center p-10">No account data available.</div>;
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full ">
      <ChartCard title="Number of Accounts by Type">
        <AccountTypesPie accounts={accounts} />
      </ChartCard>
      <ChartCard
        title="Total Balance by Account Type"
        className="[&>*]:last:mb-8"
      >
        <BalanceDistributionBar accounts={accounts} />
      </ChartCard>
    </section>
  );
};
