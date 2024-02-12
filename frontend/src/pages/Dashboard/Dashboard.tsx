import { useState, useEffect } from 'react';

import { ImageWithGradient } from '@components/section';
import { AccountStatistics } from '@components/section';
import { Sidebar } from '@components/shell';
import { fetchAccounts } from 'services/fetchAccounts';

interface Account {
  id: number;
  name: string;
  type: string;
  balance: number;
}

export const Dashboard = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchAccounts();
        setAccounts(response.data);
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
      <Sidebar className="md:basis-1/4 w-full" />
      <div className="md:basis-3/4">
        <ImageWithGradient
          img={{ src: 'https://placekitten.com/1600/900', alt: '' }}
          className="hidden md:block rounded-tr-xl [&>*]:rounded-tr-xl"
          text="Welcome to Your Dashboard"
        />
        <AccountStatistics accounts={accounts} />
      </div>
    </div>
  );
};
