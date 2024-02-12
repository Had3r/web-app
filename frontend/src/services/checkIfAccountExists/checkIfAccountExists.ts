import { API_URL } from '../config';

export async function checkIfAccountExists(ownerId: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/accounts/${ownerId}`);
    if (response.ok) {
      return true;
    } else if (response.status === 404) {
      return false;
    } else {
      throw new Error('Failed to check account existence');
    }
  } catch (error) {
    console.error('Error checking account existence:', error);
    throw error;
  }
}
