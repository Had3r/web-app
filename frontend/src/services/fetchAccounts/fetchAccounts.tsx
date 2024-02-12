import { API_URL } from '../config';

export const fetchAccounts = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const response = await fetch(`${API_URL}/accounts?${queryString}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
