import { FaUsers, FaWallet } from 'react-icons/fa';

import { StatisticCard } from './StatisticCard';
import type { StatisticCardsProps } from './StatisticCards.type';

export const StatisticCards = ({
  totalAccounts,
  totalBalance,
}: StatisticCardsProps) => (
  <section className="flex flex-col md:flex-row md:justify-between gap-12">
    <StatisticCard
      icon={
        <FaUsers className="text-vivid-purple text-3xl md:text-5xl md:p-1" />
      }
      title="Total Number of Accounts"
      value={totalAccounts}
      iconBgClass="bg-pale-purple"
      className="flex-1"
    >
      <div className="hidden sm:flex items-end gap-1 [&>*]:rounded-sm">
        <div className="bg-light-gray w-2 h-8"></div>
        <div className="bg-light-gray w-2 h-10"></div>
        <div className="bg-bright-green w-2 h-16"></div>
        <div className="bg-light-gray w-2 h-12"></div>
      </div>
    </StatisticCard>
    <StatisticCard
      icon={
        <FaWallet className="text-warm-orange text-3xl md:text-5xl md:p-1.5" />
      }
      title="Total Balance"
      value={totalBalance.toFixed(2)}
      iconBgClass="bg-soft-orange"
      className="flex-1"
    >
      <div className="hidden sm:flex items-end gap-1 [&>*]:rounded-sm">
        <div className="bg-light-gray w-2 h-8"></div>
        <div className="bg-light-gray w-2 h-10"></div>
        <div className="bg-light-gray w-2 h-12"></div>
        <div className="bg-bright-green w-2 h-16"></div>
      </div>
    </StatisticCard>
  </section>
);
