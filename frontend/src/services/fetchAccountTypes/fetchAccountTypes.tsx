import { API_URL } from '../config';

export const fetchAccountTypes = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/accountTypes`);
  const data = await response.json();
  return data;
};
