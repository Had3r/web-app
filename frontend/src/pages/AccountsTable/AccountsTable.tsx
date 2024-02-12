import { useState, useEffect } from 'react';

import { SearchForm } from '@components/ui';
import { fetchAccounts, deleteAccount } from '@services/';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface Account {
  id: number;
  ownerId: string;
  currency: string;
  balance: number;
}

export const AccountsTable = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsData = await fetchAccounts();
        setAccounts(accountsData);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (searchParams: any) => {
    try {
      const accountsData = await fetchAccounts(searchParams);
      setAccounts(accountsData);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAccount(id);
      setAccounts((prevAccounts) =>
        prevAccounts.filter((account) => account.id !== id)
      );
      console.log('Account deleted:', id);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <h1>Accounts</h1>
      <Link to="/">Back to Dashboard</Link>
      <h2 className="mt-12">Search</h2>
      <SearchForm className="mb-4 mt-2" onSearch={handleSearch} />
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left w-1/5">Owner ID</th>
            <th className="p-2 text-left w-1/5">Currency</th>
            <th className="p-2 text-left w-2/5">Balance</th>
            <th className="p-2 text-left w-1/10">Edit</th>
            <th className="p-2 text-left w-1/10">Delete</th>
          </tr>
        </thead>
        <tbody className="border-t border-gray-300">
          {accounts.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-2">
                No accounts found.
              </td>
            </tr>
          ) : (
            accounts.map((account) => (
              <tr key={account.id} className="hover:bg-gray-50">
                <td className="p-2 w-1/5">{account.ownerId}</td>
                <td className="p-2 w-1/5">{account.currency}</td>
                <td className="p-2 w-2/5">{account.balance}</td>
                <td className="p-2 w-1/10">
                  <Link
                    to={`/edit-account/${account.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaRegEdit />
                  </Link>
                </td>
                <td className="p-2 w-1/10">
                  <button
                    onClick={() => handleDelete(account.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
