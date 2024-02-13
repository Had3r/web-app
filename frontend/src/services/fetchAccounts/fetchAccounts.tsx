import { API_URL } from '../config';

interface Params {
  page?: number;
  limit?: number;
  [key: string]: any;
}

interface FetchAccountsResponse {
  data: any[];
  total: number;
}

export const fetchAccounts = async (
  params: Params = {}
): Promise<FetchAccountsResponse> => {
  const { page = 1, limit = 30, ...otherParams } = params;
  const queryString = new URLSearchParams({
    ...otherParams,
    _page: page.toString(),
    _limit: limit.toString(),
  }).toString();
  const response = await fetch(`${API_URL}/accounts?${queryString}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  const total = parseInt(response.headers.get('X-Total-Count') || '0', 10);
  return { data, total };
};
