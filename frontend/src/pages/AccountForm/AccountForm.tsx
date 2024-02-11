import React, { useState, useEffect } from 'react';

import { FormInput, Button } from '@components/ui';
import {
  checkIfAccountExists,
  createAccount,
  updateAccountByOwnerId,
} from '@services/';
import { useParams } from 'react-router-dom';

export const AccountForm = () => {
  const { id } = useParams<{ id: string }>();

  const [formData, setFormData] = useState({
    ownerId: -1,
    currency: '',
    balance: 0,
  });
  const [ownerExists, setOwnerExists] = useState(false);
  // Add state for errors
  const [formErrors, setFormErrors] = useState({
    ownerId: '',
    currency: '',
    balance: '',
  });

  useEffect(() => {
    const checkOwner = async () => {
      if (id) {
        const exists = await checkIfAccountExists(id);
        setOwnerExists(exists);
        if (exists) {
          // Add logic to fill the form with data from the existing account
        }
      }
    };

    checkOwner();
  }, [id]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { id, value } = target;

    const isNumberField = target.type === 'number';
    const convertedValue = isNumberField ? Number(value) : value;

    setFormData((prevState) => ({ ...prevState, [id]: convertedValue }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { ownerId, currency, balance } = formData;

    // Reset errors before validation
    setFormErrors({ ownerId: '', currency: '', balance: '' });

    // Validation for all fields
    const newErrors = {
      ownerId:
        ownerId > 0 ? '' : 'Owner ID is required and must be greater than 0.',
      currency: currency ? '' : 'Currency is required.',
      balance: balance !== null && balance !== 0 ? '' : 'Balance is required.',
    };

    setFormErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    if (hasErrors) {
      return;
    }

    try {
      // Separate logic for creation and update
      if (ownerExists) {
        // Update existing account
        await updateAccountByOwnerId(
          { id: id ?? null, ownerId, currency, balance },
          ownerId
        );
        alert('Account updated successfully!');
      } else {
        // Create new account
        await createAccount({ ownerId, currency, balance });
        alert('Account created successfully!');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <form
      className="mx-auto max-w-[600px] flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className={`text-${ownerExists ? 'green' : 'blue'}-500`}>
        {ownerExists ? 'Edit account data.' : 'Create new account.'}
      </div>
      <FormInput
        label="Owner ID:"
        value={formData.ownerId > 0 ? formData.ownerId : ''}
        id="ownerId"
        placeholder="Enter owner ID"
        type="number"
        onChange={handleChange}
        error={formErrors.ownerId}
      />
      <FormInput
        label="Currency:"
        value={formData.currency}
        id="currency"
        placeholder="Enter currency"
        onChange={handleChange}
        error={formErrors.currency}
      />
      <FormInput
        label="Balance:"
        value={formData.balance}
        id="balance"
        placeholder="Enter balance"
        type="number"
        onChange={handleChange}
        error={formErrors.balance}
      />

      <Button className="mt-12" type="submit">
        Save
      </Button>
    </form>
  );
};
