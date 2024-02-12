import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import type { AccountsTableComponentProps } from './AccountsTable.type';

export const AccountsTableComponent = ({
  accounts,
  resultsPerPage,
  openDeleteModal,
}: AccountsTableComponentProps) => (
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
                  onClick={() => openDeleteModal(account.ownerId)}
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
