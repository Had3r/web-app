import { API_URL } from '../config';

export const deleteAccount = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/accounts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      return Promise.reject('Failed to delete account');
    }
  } catch (error) {
    console.error('Error during account deletion:', error);
    return Promise.reject(error);
  }
};
