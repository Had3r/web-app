import { FaUsers, FaWallet } from 'react-icons/fa';

import { StatisticCard } from './StatisticCard';

interface StatisticCardsProps {
  totalAccounts: number;
  totalBalance: number;
}

export const StatisticCards = ({
  totalAccounts,
  totalBalance,
}: StatisticCardsProps) => (
  <div className="flex flex-col md:flex-row md:justify-between gap-12">
    <StatisticCard
      icon={<FaUsers className="text-[#9b89ff] text-5xl p-1" />}
      title="Total Number of Accounts"
      value={totalAccounts}
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
      value={totalBalance}
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
);
