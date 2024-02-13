import type { ModalProps } from './Modal.type';
import { Typography } from '../Typography';

export const Modal = ({ isOpen, onClose, onConfirm, ownerId }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <Typography>
          Are you sure you want to delete the account with ID {ownerId}?
        </Typography>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
