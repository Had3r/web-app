import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
  <section className="p-4 bg-white rounded-lg shadow-lg">
    <h3 className="text-xl md:text-2xl font-semibold leading-6 text-gray-900 mb-4 md:mb-8">
      {title}
    </h3>
    <div className="flex items-center">{children}</div>
  </section>
);
