import { API_URL } from '../config';

export const fetchAccountTypes = async (): Promise<string[]> => {
  try {
    const response = await fetch(`${API_URL}/accountTypes`);
    if (!response.ok) {
      return Promise.reject('Problem fetching account types');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject('Error fetching data');
  }
};
