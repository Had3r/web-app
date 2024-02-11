import React, { useState, useEffect } from 'react';

import { FormInput, Button } from '@components/ui';
import {
  checkIfAccountExists,
  createAccount,
  updateAccountByOwnerId,
  getAccountById,
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
  const [formErrors, setFormErrors] = useState({
    ownerId: '',
    currency: '',
    balance: '',
  });

  const resetForm = () => {
    setFormData({
      ownerId: -1,
      currency: '',
      balance: 0,
    });
  };

  useEffect(() => {
    const checkOwner = async () => {
      if (id) {
        const exists = await checkIfAccountExists(id);
        setOwnerExists(exists);
        if (exists) {
          const accountData = await getAccountById(id);
          setFormData({
            ownerId: accountData.ownerId,
            currency: accountData.currency,
            balance: accountData.balance,
          });
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

  const validateFormData = (formData: {
    ownerId: number;
    currency: string;
    balance: number;
  }) => {
    const { ownerId, currency, balance } = formData;
    return {
      ownerId:
        ownerId > 0 ? '' : 'Owner ID is required and must be greater than 0.',
      currency: currency ? '' : 'Currency is required.',
      balance: balance !== null && balance !== 0 ? '' : 'Balance is required.',
    };
  };

  const hasFormErrors = (errors: Record<string, string>) =>
    Object.values(errors).some((error) => error !== '');

  const saveFormData = async (
    formData: { ownerId: number; currency: string; balance: number },
    id: string | undefined,
    ownerExists: boolean
  ) => {
    const { ownerId, currency, balance } = formData;
    if (ownerExists) {
      await updateAccountByOwnerId(
        { id: id ?? null, ownerId, currency, balance },
        ownerId
      );
      alert('Account updated successfully!');
    } else {
      await createAccount({ ownerId, currency, balance });
      alert('Account created successfully!');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset errors before validation
    setFormErrors({ ownerId: '', currency: '', balance: '' });

    // Validation for all fields
    const newErrors = validateFormData(formData);
    setFormErrors(newErrors);

    // Check if there are any errors
    if (hasFormErrors(newErrors)) {
      return;
    }

    try {
      await saveFormData(formData, id, ownerExists);
      resetForm();
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
      <div>{ownerExists ? 'Edit account data.' : 'Create new account.'}</div>
      <FormInput
        label="Owner ID:"
        value={formData.ownerId > 0 ? formData.ownerId : ''}
        id="ownerId"
        placeholder="Enter owner ID"
        type="number"
        min="1"
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
        min="1"
        onChange={handleChange}
        error={formErrors.balance}
      />

      <Button className="mt-12" type="submit">
        Save
      </Button>
    </form>
  );
};
