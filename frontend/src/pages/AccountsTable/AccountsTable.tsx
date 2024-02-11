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
    <div>
      <h1>Accounts</h1>
      <Link to="/">Back to Dashboard</Link>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Owner ID</th>
            <th>Currency</th>
            <th>Balance</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="border">
          {accounts.map((account) => (
            <tr className="[&>*]:p-2" key={account.id}>
              <td>{account.ownerId}</td>
              <td>{account.currency}</td>
              <td>{account.balance}</td>
              <td>
                <Link to={`/edit-account/${account.id}`}>
                  <FaRegEdit />
                </Link>
              </td>
              <td>
                <button onClick={() => deleteAccount(account.id)}>
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
