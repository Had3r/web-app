import { updateAccountByOwnerId } from './updateAccountByOwnerId';

describe('updateAccountByOwnerId', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should call fetch with the correct URL and data when id is present', async () => {
    const accountData = {
      id: '123',
      ownerId: 1,
      currency: 'USD',
      balance: 1000,
      type: 'checking',
    };
    const ownerId = 1;
    const expectedUrl = `http://localhost:3001/accounts/123`;

    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });

    await updateAccountByOwnerId(accountData, ownerId);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(accountData),
    });
  });
});
