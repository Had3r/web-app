import { fetchAccounts } from './fetchAccounts';
import { API_URL } from '../config';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
      headers: {
        get: () => '10',
      },
    })
  ) as jest.Mock;
});

describe('fetchAccounts', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call fetch with the correct URL and default parameters', async () => {
    await fetchAccounts();
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/accounts?_page=1&_limit=30`);
  });

  it('should return data and total count from the response', async () => {
    const response = await fetchAccounts();
    expect(response).toEqual({ data: [], total: 10 });
  });

  it('should correctly handle custom parameters', async () => {
    await fetchAccounts({ page: 2, limit: 5, search: 'test' });
    expect(fetch).toHaveBeenCalledWith(
      `${API_URL}/accounts?search=test&_page=2&_limit=5`
    );
  });
});
