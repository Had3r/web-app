import { fetchAccountTypes } from './fetchAccountTypes';
import { API_URL } from '../config';

global.fetch = jest.fn();

describe('fetchAccountTypes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch account types successfully', async () => {
    const mockAccountTypes = ['Savings', 'Checking'];
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockAccountTypes),
    });

    const result = await fetchAccountTypes();

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/accountTypes`);
    expect(result).toEqual(mockAccountTypes);
  });

  it('should handle fetch error', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    await expect(fetchAccountTypes()).rejects.toThrow('Failed to fetch');

    expect(fetch).toHaveBeenCalledWith(`${API_URL}/accountTypes`);
  });
});
