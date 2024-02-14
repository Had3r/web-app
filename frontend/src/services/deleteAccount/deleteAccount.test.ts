import { deleteAccount } from './deleteAccount';

describe('deleteAccount service', () => {
  const mockFetch = jest.fn();
  global.fetch = mockFetch;

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call fetch with the correct URL and method for deleting an account', async () => {
    const id = 123;
    const API_URL = 'http://localhost:3001';
    mockFetch.mockResolvedValueOnce({
      ok: true,
    });

    await deleteAccount(id);

    expect(mockFetch).toHaveBeenCalledWith(`${API_URL}/accounts/${id}`, {
      method: 'DELETE',
    });
  });

  it('should throw an error when the response is not ok', async () => {
    const id = 456;
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    await expect(deleteAccount(id)).rejects.toThrow('Failed to delete account');
  });
});