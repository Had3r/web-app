import { Button, Typography } from 'components/ui';
import { FaUserPlus, FaListAlt } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

import type { SidebarProps } from './Sidebar.type';

export const Sidebar = ({ className }: SidebarProps) => (
  <aside
    className={twMerge(
      'md:basis-1/4 w-full bg-[#181d19] text-white rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl py-8 px-4 sm:py-12 sm:px-8',
      className
    )}
  >
    <Typography
      variant="h2"
      className="pb-12 text-3xl font-semibold flex gap-2 items-center justify-center"
    >
      Dashboard
    </Typography>
    <nav className="flex flex-col items-stretch gap-4">
      <Button
        className="flex text-left gap-3"
        variant="dark"
        href="/create-account"
      >
        <FaUserPlus size={24} /> Create Account
      </Button>

      <Button
        className="flex text-left gap-3"
        variant="dark"
        href="/view-accounts"
      >
        <FaListAlt size={24} /> View Accounts
      </Button>
    </nav>
  </aside>
);
