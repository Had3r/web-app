import React, { useState, useEffect } from 'react';

import {
  FormInput,
  Button,
  Loader,
  Breadcrumbs,
  Typography,
} from '@components/ui';
import {
  checkIfAccountExists,
  createAccount,
  updateAccountByOwnerId,
  getAccountById,
  fetchAccountTypes,
} from '@services/';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const AccountForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    ownerId: -1,
    currency: '',
    balance: 0,
    type: '',
  });
  const [ownerExists, setOwnerExists] = useState(false);
  const [formErrors, setFormErrors] = useState({
    ownerId: '',
    currency: '',
    balance: '',
    type: '',
  });
  const [serverMessage, setServerMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [accountTypes, setAccountTypes] = useState<string[]>([]);

  const resetForm = () => {
    setFormData({
      ownerId: -1,
      currency: '',
      balance: 0,
      type: '',
    });
  };

  useEffect(() => {
    const checkOwner = async () => {
      if (id) {
        setIsLoading(true);
        const exists = await checkIfAccountExists(id);
        setOwnerExists(exists);
        if (exists) {
          const accountData = await getAccountById(id);
          setFormData({
            ownerId: accountData.ownerId,
            currency: accountData.currency,
            balance: accountData.balance,
            type: accountData.type,
          });
        }
        setIsLoading(false);
      }
    };

    checkOwner();
  }, [id]);

  useEffect(() => {
    const initFetchAccountTypes = async () => {
      const data = await fetchAccountTypes();
      setAccountTypes(data);
    };

    initFetchAccountTypes();
  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
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
    type: string;
  }) => {
    const { ownerId, currency, balance, type } = formData;
    return {
      ownerId:
        ownerId > 0
          ? ''
          : 'Owner ID is required, must be greater than 0 and unique.',
      currency: currency ? '' : 'Currency is required.',
      balance: balance !== null && balance !== 0 ? '' : 'Balance is required.',
      type: type ? '' : 'Type is required.',
    };
  };

  const hasFormErrors = (errors: Record<string, string>) =>
    Object.values(errors).some((error) => error !== '');

  const saveFormData = async (
    formData: {
      ownerId: number;
      currency: string;
      balance: number;
      type: string;
    },
    id: string | undefined,
    ownerExists: boolean
  ) => {
    try {
      setIsLoading(true);
      const { ownerId, currency, balance, type } = formData;
      if (ownerExists) {
        await updateAccountByOwnerId(
          { id: id ?? null, ownerId, currency, balance, type },
          ownerId
        );
        navigate('/view-accounts');
      } else {
        await createAccount({ ownerId, currency, balance, type });
        resetForm();
        setServerMessage('');
        navigate('/account-success');
      }
    } catch (error) {
      setServerMessage(
        (error as { message: string }).message ||
          'Failed to submit the form. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset errors before validation
    setFormErrors({ ownerId: '', currency: '', balance: '', type: '' });

    // Validation for all fields
    const newErrors = validateFormData(formData);
    setFormErrors(newErrors);
    // Check if there are any errors
    if (hasFormErrors(newErrors)) {
      return;
    }

    try {
      await saveFormData(formData, id, ownerExists);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const breadcrumbs = id
    ? [
        { label: 'Home', link: '/' },
        { label: 'View Accounts', link: '/view-accounts' },
        { label: 'Edit Account' },
      ]
    : [
        { label: 'Home', link: '/' },
        { label: 'Create Account', link: '/create-account' },
      ];

  return (
    <div className="max-w-xl mx-auto w-full flex flex-col">
      <Breadcrumbs className="mb-8" breadcrumbs={breadcrumbs} />
      <form
        className="w-full h-max max-w-xl p-8 bg-white shadow-md rounded-lg flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <div className="text-center p-4">
          <Typography variant="h2" className="text-2xl font-bold">
            {id ? 'Edit Account' : 'Create New Account'}
          </Typography>
        </div>
        <div className="relative flex flex-col gap-4">
          {isLoading ? (
            <Loader className="absolute inset-0 flex justify-center items-center" />
          ) : (
            <>
              {!id && (
                <FormInput
                  label="Owner ID:"
                  value={formData.ownerId > 0 ? formData.ownerId : ''}
                  id="ownerId"
                  placeholder="Enter owner ID"
                  isRequired
                  type="number"
                  min="1"
                  onChange={handleChange}
                  error={formErrors.ownerId || serverMessage}
                />
              )}
              <FormInput
                label="Currency:"
                value={formData.currency}
                id="currency"
                placeholder="Enter currency"
                isRequired
                onChange={handleChange}
                error={formErrors.currency}
              />
              <FormInput
                label="Balance:"
                value={formData.balance}
                id="balance"
                placeholder="Enter balance"
                isRequired
                type="number"
                min="1"
                onChange={handleChange}
                error={formErrors.balance}
              />
              <FormInput
                label="Type:"
                value={formData.type}
                tag="select"
                options={accountTypes}
                id="type"
                placeholder="Enter account type"
                isRequired
                onChange={handleChange}
                error={formErrors.type}
              />
            </>
          )}
        </div>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};
