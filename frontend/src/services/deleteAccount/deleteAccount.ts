import { API_URL } from '../config';

export const deleteAccount = async (id: number) => {
  const response = await fetch(`${API_URL}/accounts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete account');
  }
};
