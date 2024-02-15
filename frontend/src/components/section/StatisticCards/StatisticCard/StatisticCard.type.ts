import { JSX, ReactNode } from 'react';

export interface StatisticCardProps {
  icon: JSX.Element;
  title: string;
  value: number | string;
  variant?: 'default' | 'alternate';
  children?: ReactNode;
  className?: string;
  iconBgClass?: string;
  iconAlt?: string;
}
