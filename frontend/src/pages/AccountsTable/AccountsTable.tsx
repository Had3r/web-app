import { useState, useEffect } from 'react';

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
    const fetchAccounts = async () => {
      try {
        const response = await fetch('http://localhost:3001/accounts');
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  const deleteAccount = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/accounts/${id}`, {
        method: 'DELETE',
      });
      setAccounts(accounts.filter((account) => account.id !== id));
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  if (accounts.length === 0) {
    return (
      <div>
        <h1>Accounts</h1>
        <Link to="/">Back to Dashboard</Link>
        <p>No accounts found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <h1>Accounts</h1>
      <Link to="/">Back to Dashboard</Link>
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
          {accounts.map((account) => (
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
                  onClick={() => deleteAccount(account.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
