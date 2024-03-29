import { API_URL } from '../config';

interface AccountData {
  id: string | null;
  ownerId: number;
  currency: string;
  balance: number;
  type: string;
}

export async function updateAccountByOwnerId(
  accountData: AccountData,
  ownerId: number
): Promise<void> {
  try {
    const url = accountData.id
      ? `${API_URL}/accounts/${accountData.id}`
      : `${API_URL}/accounts/${ownerId}`;

    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });

    if (!response.ok) {
      return Promise.reject('Failed to update account');
    }

    console.log('Account updated successfully');
  } catch (error) {
    console.error('Error updating account:', error);
    return Promise.reject(error);
  }
}
