import { AccountTypesPie } from './components/AccountTypesPie';
import { BalanceDistributionBar } from './components/BalanceDistributionBar';
import { ChartCard } from './components/ChartCard';

export interface Account {
  type: string;
  balance: number;
}

interface Props {
  accounts: Account[];
}
export const AccountStatistics = ({ accounts }: Props) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full ">
    <ChartCard title="Number of Accounts by Type">
      <AccountTypesPie accounts={accounts} />
    </ChartCard>
    <ChartCard
      title="Total Balance by Account Type"
      className="[&>*]:last:mb-8"
    >
      <BalanceDistributionBar accounts={accounts} />
    </ChartCard>
  </div>
);
