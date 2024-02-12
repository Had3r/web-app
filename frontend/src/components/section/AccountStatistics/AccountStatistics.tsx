import { AccountTypesPie } from './components/AccountTypesPie';
import { BalanceDistributionBar } from './components/BalanceDistributionBar';

export interface Account {
  type: string;
  balance: number;
}

interface Props {
  accounts: Account[];
}

export const AccountStatistics = ({ accounts }: Props) => (
  <div className="flex flex-col md:flex-row w-full items-center justify-center">
    <div className=" md:pl-4 md:pt-4 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="p-4 bg-white rounded-lg shadow-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-8">
          Number of Accounts by Type
        </h3>
        <AccountTypesPie accounts={accounts} />
      </div>
      <div className="p-4 bg-white rounded-lg shadow-2xl">
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-8">
          Total Balance by Account Type
        </h3>
        <BalanceDistributionBar accounts={accounts} />
      </div>
    </div>
  </div>
);
