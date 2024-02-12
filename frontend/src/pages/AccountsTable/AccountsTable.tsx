import { useState, useEffect } from 'react';

import { SearchForm, Button } from '@components/ui';
import { fetchAccounts, deleteAccount } from '@services/';
import { FaRegEdit } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const resultsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsData = await fetchAccounts({
          page: currentPage,
          limit: resultsPerPage,
        });
        setAccounts(accountsData.data);

        setTotalPages(Math.ceil(accountsData.total / resultsPerPage));
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };
    fetchData();
  }, [currentPage]);

  const handleSearch = async (searchParams: any) => {
    try {
      const filteredSearchParams = Object.entries(searchParams).reduce(
        (acc: { [key: string]: any }, [key, value]) => {
          if (value) {
            acc[key] = value;
          }
          return acc;
        },
        {} as { [key: string]: any }
      );

      const accountsData = await fetchAccounts({
        ...filteredSearchParams,
        limit: resultsPerPage,
      });
      setAccounts(accountsData.data);
      setCurrentPage(1);
      setTotalPages(Math.ceil(accountsData.total / resultsPerPage));
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
      setCurrentPage(1);
      console.log('Account deleted:', id);
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div>
      <h1>Accounts</h1>
      <Link to="/">Back to Dashboard</Link>
      <h2 className="mt-12">Search</h2>
      <SearchForm className="mb-4 mt-2" onSearch={handleSearch} />
      <div
        className="overflow-x-auto min-h-[calc()]"
        style={{ minHeight: `calc(${resultsPerPage} * 50px)` }}
      >
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
              accounts?.map((account) => (
                <tr key={account.id} className="hover:bg-gray-50">
                  <td className="p-2 w-1/5">{account.ownerId}</td>
                  <td className="p-2 w-1/5">{account.currency}</td>
                  <td className="p-2 w-2/5">{account.balance}</td>
                  <td className="p-2 w-1/10">
                    <Link
                      aria-label={`Edit account ${account.ownerId}`}
                      to={`/edit-account/${account.id}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaRegEdit />
                    </Link>
                  </td>
                  <td className="p-2 w-1/10">
                    <button
                      aria-label={`Delete account ${account.ownerId}`}
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
      {totalPages > 1 && (
        <div className="inline-flex gap-4 md:gap-6 w-full justify-center items-center mt-4">
          <Button
            className="flex items-center gap-4"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            aria-label="Previous page"
          >
            <FaArrowLeft />
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            className="flex items-center gap-4"
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
            aria-label="Next page"
          >
            <FaArrowRight />
          </Button>
        </div>
      )}
    </div>
  );
};
