import { getAccountById } from './getAccountById';

global.fetch = jest.fn();

describe('getAccountById', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
    console.error.mockRestore();
  });

  it('should return account data for a given id', async () => {
    const mockAccountData = { id: '123', name: 'Test Account' };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockAccountData),
    });

    const result = await getAccountById('123');

    expect(result).toEqual(mockAccountData);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/accounts/123');
  });

  it('should throw an error when the network response is not ok', async () => {
    jest
      .spyOn(global, 'fetch')
      .mockRejectedValueOnce(new Error('Network response was not ok'));

    await expect(getAccountById('404')).rejects.toThrow(
      'Network response was not ok'
    );
  });
});
