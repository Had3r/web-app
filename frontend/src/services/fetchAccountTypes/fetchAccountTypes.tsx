import { API_URL } from '../config';

export const fetchAccountTypes = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/accountTypes`);
    if (!response.ok) {
      throw new Error('Problem fetching account types');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};
