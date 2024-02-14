import { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';

import {
  backgroundColors,
  borderColors,
} from './BalanceDistributionBar.styles';
import type { ChartData } from '../../AccountStatistics.type';
import type { AccountStatisticsProps } from '../../AccountStatistics.type';

export const BalanceDistributionBar = ({
  accounts,
}: AccountStatisticsProps) => {
  const [balanceDistribution, setBalanceDistribution] = useState<ChartData>({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const balanceData = accounts.reduce(
      (acc: { [key: string]: number }, account) => {
        if (account.type && typeof account.balance === 'number') {
          acc[account.type] = (acc[account.type] || 0) + account.balance;
        }
        return acc;
      },
      {}
    );

    const balanceLabels = Object.keys(balanceData);
    const balanceValues = Object.values(balanceData).map((value) =>
      Number(value)
    );

    setBalanceDistribution({
      labels: balanceLabels,
      datasets: [
        {
          label: 'Total Balance by Account Type',
          data: balanceValues,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }, [accounts]);

  return (
    <Bar
      data={balanceDistribution}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};
