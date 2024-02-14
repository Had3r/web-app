import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { getTypeColor } from 'util/util';

import type { AccountsTableComponentProps } from './AccountsTable.type';

export const AccountsTableComponent = ({
  accounts,
  resultsPerPage,
  openDeleteModal,
}: AccountsTableComponentProps) => (
  <section
    className="overflow-x-auto min-h-[calc()]"
    style={{ minHeight: `calc(${resultsPerPage} * 50px)` }}
  >
    <table className="table-auto w-full border border-deep-gray">
      <thead className="bg-light-gray">
        <tr>
          <th className="p-2 text-left w-1/6">Owner ID</th>
          <th className="p-2 text-left w-1/6">Currency</th>
          <th className="p-2 text-left w-1/6">Balance</th>
          <th className="p-2 text-left w-1/6">Type</th>
          <th className="p-2 text-left w-1/12">Edit</th>
          <th className="p-2 text-left w-1/12">Delete</th>
        </tr>
      </thead>
      <tbody className="border-t border-deep-gray">
        {accounts.length === 0 ? (
          <tr>
            <td colSpan={6} className="text-center p-2">
              No accounts found.
            </td>
          </tr>
        ) : (
          accounts?.map((account) => (
            <tr key={account.id} className="hover:bg-soft-orange">
              <td className="p-2 w-1/6">{account.ownerId}</td>
              <td className="p-2 w-1/6">{account.currency}</td>
              <td className="p-2 w-1/6">{account.balance}</td>
              <td className={`p-2 w-1/6`}>
                <span
                  className={twMerge(
                    'p-1 rounded-md',
                    getTypeColor(account.type)
                  )}
                >
                  {account.type}
                </span>
              </td>
              <td className="p-2 w-1/12">
                <Link
                  aria-label={`Edit account ${account.ownerId}`}
                  to={`/edit-account/${account.id}`}
                  className="text-vivid-purple hover:text-bright-green"
                >
                  <FaRegEdit />
                </Link>
              </td>
              <td className="p-2 w-1/12">
                <button
                  aria-label={`Delete account ${account.ownerId}`}
                  onClick={() => openDeleteModal(account.ownerId)}
                  className="text-warm-orange hover:text-red-700"
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </section>
);
