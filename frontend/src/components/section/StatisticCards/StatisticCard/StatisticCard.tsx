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
  iconAlt = '',
}: StatisticCardProps) => (
  <section
    className={twMerge(
      'bg-white flex rounded-2xl gap-4 items-center justify-between p-6 shadow-md',
      className
    )}
  >
    <header className="space-y-6">
      <div className="flex items-center gap-4">
        <div aria-label={iconAlt} className={`p-2 rounded-full ${iconBgClass}`}>
          {icon}
        </div>
        <Typography variant="h3" className="text-base md:text-xl mb-1">
          {title}
        </Typography>
      </div>
      <p className="text-4xl font-medium text-deep-gray">{value}</p>
    </header>
    {children}
  </section>
);
