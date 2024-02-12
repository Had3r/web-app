import { useState, useEffect } from 'react';

import { SearchFormWrapper, AccountsTableComponent } from '@components/section';
import { Modal, Notification, Pagination } from '@components/ui';
import type { NotificationVariant } from '@components/ui/Notification/Notification.type';
import { fetchAccounts, deleteAccount } from '@services/';
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
  const [filters, setFilters] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwnerId, setSelectedOwnerId] = useState<string | null>(null);
  const [notification, setNotification] = useState({
    isVisible: false,
    message: '',
    type: 'success' as NotificationVariant,
  });
  const resultsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accountsData = await fetchAccounts({
          page: currentPage,
          limit: resultsPerPage,
          ...filters,
        });
        setAccounts(accountsData.data);

        setTotalPages(Math.ceil(accountsData.total / resultsPerPage));
      } catch (error) {
        setNotification({
          isVisible: true,
          message: 'Error fetching accounts.',
          type: 'error',
        });
      }
    };
    fetchData();
  }, [currentPage, filters]);

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

      setFilters(filteredSearchParams);

      const accountsData = await fetchAccounts({
        ...filteredSearchParams,
        limit: resultsPerPage,
      });
      setAccounts(accountsData.data);
      setCurrentPage(1);
      setTotalPages(Math.ceil(accountsData.total / resultsPerPage));
    } catch (error) {
      setNotification({
        isVisible: true,
        message: 'Error during search.',
        type: 'error',
      });
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteAccount(id);

      // Re-fetch account data to refresh the view on the current page
      const accountsData = await fetchAccounts({
        page: currentPage,
        limit: resultsPerPage,
        ...filters,
      });
      setAccounts(accountsData.data);
      setTotalPages(Math.ceil(accountsData.total / resultsPerPage));

      // Check if the page became empty after deletion, if so, move to the previous page
      if (accountsData.data.length === 0 && currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }

      setNotification({
        isVisible: true,
        message: 'Account successfully deleted!',
        type: 'success',
      });
    } catch (error) {
      setNotification({
        isVisible: true,
        message: 'Error deleting account.',
        type: 'error',
      });
    }
  };

  const openDeleteModal = (ownerId: string) => {
    setSelectedOwnerId(ownerId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmDelete = () => {
    if (selectedOwnerId) {
      const accountToDelete = accounts.find(
        (account) => account.ownerId === selectedOwnerId
      );
      if (accountToDelete) {
        handleDelete(accountToDelete.id);
        setIsModalOpen(false);
      }
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
      <SearchFormWrapper onSearch={handleSearch} />
      <AccountsTableComponent
        accounts={accounts}
        openDeleteModal={openDeleteModal}
        resultsPerPage={resultsPerPage}
      />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        ownerId={selectedOwnerId}
      />
      <Notification
        message={notification.message}
        isVisible={notification.isVisible}
        type={notification.type}
        onClose={() => setNotification({ ...notification, isVisible: false })}
      />
    </div>
  );
};
