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
  <div className="flex flex-col md:flex-row w-full items-center justify-center py-4">
    <div className="md:pl-4 md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <ChartCard title="Number of Accounts by Type">
        <AccountTypesPie accounts={accounts} />
      </ChartCard>
      <ChartCard title="Total Balance by Account Type">
        <BalanceDistributionBar accounts={accounts} />
      </ChartCard>
    </div>
  </div>
);
