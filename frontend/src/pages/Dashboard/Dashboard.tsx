import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
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
    <>
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="mt-4 p-4 rounded-lg shadow-md bg-white">
        <p className="text-lg text-gray-700">
          Total Accounts: <span className="font-semibold">{totalAccounts}</span>
        </p>
        <p className="text-lg text-gray-700">
          Total Balance: <span className="font-semibold">{totalBalance}</span>
        </p>
      </div>
      <nav className="py-8 inline-flex flex-col gap-4">
        <Link
          to="/create-account"
          className="text-blue-500 hover:text-blue-700"
        >
          Create Account
        </Link>
        <Link to="/view-accounts" className="text-blue-500 hover:text-blue-700">
          View Accounts
        </Link>
      </nav>
    </>
  );
};
