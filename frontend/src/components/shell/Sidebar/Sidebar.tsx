import { MdOutlineSettingsApplications } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => (
  <div
    className={twMerge(
      'bg-gray-800 text-white rounded-b-xl md:rounded-tl-xl',
      className
    )}
  >
    <div className="p-5 text-xl font-semibold border-b border-gray-600 flex gap-2 items-center">
      <MdOutlineSettingsApplications />
      Finance Hub
    </div>
    <ul className="flex flex-col p-2 ">
      <li>
        <Link to="/create-account" className="p-2 hover:bg-gray-700 block">
          Create Account
        </Link>
      </li>
      <li>
        <Link to="/view-accounts" className="p-2 hover:bg-gray-700 block">
          View Accounts
        </Link>
      </li>
    </ul>
  </div>
);
