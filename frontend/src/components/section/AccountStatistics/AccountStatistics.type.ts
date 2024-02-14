export interface Account {
  type: string;
  balance: number;
}

export interface AccountStatisticsProps {
  accounts: Account[];
}

export interface ChartData {
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
