import { useState, useEffect } from 'react';

import { ImageWithGradient } from '@components/section';
import { Sidebar } from '@components/shell';
import { FaUsers, FaWallet } from 'react-icons/fa';
import { fetchAccounts } from 'services/fetchAccounts';
export const Dashboard = () => {
  const [totalAccounts, setTotalAccounts] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accounts = await fetchAccounts();
        setTotalAccounts(accounts.total);
        const balanceSum = accounts.data.reduce(
          (acc, account) => acc + account.balance,
          0
        );
        setTotalBalance(balanceSum);
      } catch (error) {
        console.error('Failed to fetch accounts:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-full">
      <ImageWithGradient
        img={{ src: 'https://placekitten.com/1600/900', alt: '' }}
        className="md:hidden rounded-t-xl [&>*]:rounded-t-xl"
        text="Welcome to Your Dashboard"
      />
      <Sidebar className=" md:basis-1/4 w-full" />
      <div className=" md:basis-3/4">
        <ImageWithGradient
          img={{ src: 'https://placekitten.com/1600/900', alt: '' }}
          className="hidden md:block rounded-tr-xl [&>*]:rounded-tr-xl"
          text="Welcome to Your Dashboard"
        />
        <div className="mt-4 md:m-8 [&>*]:md:max-w-[330px] [&>*]:lg:min-w-[330px] grid grid-cols-1 md:grid-cols-2 gap-4 md:justify-items-center">
          <div className="p-4 md:p-6 rounded-xl shadow-lg bg-gradient-to-r from-gray-500 to-gray-300 flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white bg-opacity-20">
              <FaUsers className="text-xl text-white" />
            </div>
            <div>
              <p className="text-md text-white">Total Accounts</p>
              <p className="text-lg font-semibold text-white">
                {totalAccounts}
              </p>
            </div>
          </div>
          <div className="p-4 md:p-6 rounded-xl shadow-lg bg-gradient-to-r from-gray-700 to-gray-500 flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white bg-opacity-20">
              <FaWallet className="text-xl text-white" />
            </div>
            <div>
              <p className="text-md text-white">Total Balance</p>
              <p className="text-lg font-semibold text-white">{totalBalance}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
