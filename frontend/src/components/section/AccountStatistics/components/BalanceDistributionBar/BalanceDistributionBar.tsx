import React, { useEffect, useState } from 'react';

import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js'; // Register the elements
import { Bar } from 'react-chartjs-2';

import { Account } from '../../AccountStatistics'; // Import the necessary elements
Chart.register(BarElement, CategoryScale, LinearScale); // Let's assume the Account type was exported from the original component

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

export const BalanceDistributionBar: React.FC<Props> = ({ accounts }) => {
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
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [accounts]);

  return <Bar data={balanceDistribution} />;
};
