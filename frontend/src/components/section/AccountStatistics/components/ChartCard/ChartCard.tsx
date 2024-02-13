import React from 'react';

import { twMerge } from 'tailwind-merge';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

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
    <h3 className="text-xl md:text-2xl font-semibold leading-6 text-gray-900 mt-4 mb-8">
      {title}
    </h3>
    <div className="flex items-center [&>*]:mx-auto">{children}</div>
  </section>
);
