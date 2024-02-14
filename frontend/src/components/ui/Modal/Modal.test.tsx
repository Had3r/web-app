import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Modal } from './Modal';

describe('Modal', () => {
  it('renders correctly when open', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        ownerId="123"
      />
    );

    expect(
      screen.getByText(
        /Are you sure you want to delete the account with ID 123\?/
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('calls onClose when the Cancel button is clicked', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        ownerId="123"
      />
    );

    fireEvent.click(screen.getByText('Cancel'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onConfirm when the Delete button is clicked', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    render(
      <Modal
        isOpen={true}
        onClose={handleClose}
        onConfirm={handleConfirm}
        ownerId="123"
      />
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(handleConfirm).toHaveBeenCalledTimes(1);
  });
});
