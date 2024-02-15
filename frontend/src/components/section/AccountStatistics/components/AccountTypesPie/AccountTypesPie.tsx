import { useEffect, useState } from 'react';

import { Pie } from 'react-chartjs-2';

import { backgroundColors, borderColors } from './AccountTypesPie.styles';
import type { ChartData } from '../../AccountStatistics.type';
import type { AccountStatisticsProps } from '../../AccountStatistics.type';

export const AccountTypesPie = ({ accounts }: AccountStatisticsProps) => {
  const [accountTypes, setAccountTypes] = useState<ChartData>({
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
    const typesData = accounts.reduce(
      (acc: { [key: string]: number }, account) => {
        if (account.type) {
          acc[account.type] = (acc[account.type] || 0) + 1;
        }
        return acc;
      },
      {}
    );

    const typesLabels = Object.keys(typesData);
    const typesCounts = Object.values(typesData).map((value) => Number(value));

    setAccountTypes({
      labels: typesLabels,
      datasets: [
        {
          label: 'Number of Accounts by Type',
          data: typesCounts,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    });
  }, [accounts]);

  return (
    <Pie
      data={accountTypes}
      options={{
        plugins: {
          legend: {
            display: true,
          },
        },
      }}
    />
  );
};
