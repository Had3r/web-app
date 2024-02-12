import React, { useEffect, useState } from 'react';

import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { Account } from '../../AccountStatistics';
Chart.register(ArcElement);

interface Props {
  accounts: Account[];
}

interface ChartData {
  labels: string[];
  datasets: [
    {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    },
  ];
}

export const AccountTypesPie: React.FC<Props> = ({ accounts }) => {
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
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
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
