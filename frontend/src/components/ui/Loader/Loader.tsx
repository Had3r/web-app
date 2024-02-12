import { twMerge } from 'tailwind-merge';

import type { LoaderProps } from './Loader.type';

export const Loader = ({ className }: LoaderProps) => (
  <div
    className={twMerge('flex justify-center items-center h-full', className)}
  >
    <div className="w-16 h-16 border-4 rounded-full animate-pulse loader-gradient"></div>
  </div>
);
