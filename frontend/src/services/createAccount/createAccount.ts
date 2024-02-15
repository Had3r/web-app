import type { AccountData } from './createAccount.type';
import { API_URL } from '../config';

export async function createAccount(
  accountData: AccountData
): Promise<Response> {
  try {
    const response = await fetch(`${API_URL}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });

    if (!response.ok) {
      const errorBody = await response.json();
      const errorMessage = errorBody.error
        ? errorBody.error
        : 'Failed to create account';
      return Promise.reject({ message: errorMessage });
    }

    console.log('Account created successfully');
    return response;
  } catch (error) {
    console.error('Error creating account:', error);
    return Promise.reject({ message: 'Error creating account', error });
  }
}
