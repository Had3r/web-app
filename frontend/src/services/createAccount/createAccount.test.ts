import { createAccount } from '../createAccount/createAccount';

global.fetch = jest.fn();

describe('createAccount tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('createAccount - checks if account creation was successful', async () => {
    const newAccountData = {
      ownerId: 17,
      currency: 'EUR',
      balance: 1000,
      type: 'personal',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    const response = await createAccount(newAccountData);
    const responseData = await response.json();

    expect(responseData.success).toBe(true);
  });
});
