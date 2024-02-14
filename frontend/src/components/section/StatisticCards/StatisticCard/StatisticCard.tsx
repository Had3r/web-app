import { Typography } from 'components/ui';
import { twMerge } from 'tailwind-merge';

import type { StatisticCardProps } from './StatisticCard.type';

export const StatisticCard = ({
  icon,
  title,
  value,
  children,
  className,
  iconBgClass = 'bg-pale-purple',
}: StatisticCardProps) => (
  <div
    className={twMerge(
      'bg-white flex rounded-2xl gap-4 items-center justify-between p-6 shadow-md',
      className
    )}
  >
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className={`p-2 rounded-full ${iconBgClass}`}>{icon}</div>
        <Typography variant="h3" className="text-base md:text-xl mb-1">
          {title}
        </Typography>
      </div>
      <p className="text-4xl font-medium text-deep-gray">{value}</p>
    </div>
    {children}
  </div>
);
