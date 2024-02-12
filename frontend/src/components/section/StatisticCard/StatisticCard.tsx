import type { StatisticCardProps } from './StatisticCard.type';

export const StatisticCard = ({ icon, title, value }: StatisticCardProps) => (
  <div className="flex items-center justify-start p-4 space-x-4 shadow-md ">
    <div className="p-2 rounded-full bg-blue-100">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-2xl font-medium text-gray-700">{value}</p>
    </div>
  </div>
);
