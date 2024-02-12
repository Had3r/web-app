import { JSX } from 'react';

export interface StatisticCardProps {
  icon: JSX.Element;
  title: string;
  value: number | string;
}
