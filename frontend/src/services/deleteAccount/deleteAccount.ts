import { API_URL } from '../config';

export const deleteAccount = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/accounts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete account');
    }
  } catch (error) {
    console.error('Error during account deletion:', error);
    throw error;
  }
};
