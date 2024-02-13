import React from 'react';

import { Typography } from '@components/ui';
import { twMerge } from 'tailwind-merge';

import type { ChartCardProps } from './ChardCard.type';

export const ChartCard: React.FC<ChartCardProps> = ({
  title,
  children,
  className,
}) => (
  <section
    className={twMerge(
      'flex flex-col justify-between p-4 bg-white rounded-2xl shadow-lg',
      className
    )}
  >
    <Typography
      variant="h3"
      className="text-xl md:text-2xl font-semibold leading-6 text-gray-900 mt-4 mb-8"
    >
      {title}
    </Typography>
    <div className="flex items-center [&>*]:mx-auto">{children}</div>
  </section>
);
