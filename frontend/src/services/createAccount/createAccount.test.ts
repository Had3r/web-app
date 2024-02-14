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

  test('createAccount - checks console output after account creation', async () => {
    const newAccountData = {
      ownerId: 17,
      currency: 'EUR',
      balance: 1000,
      type: 'personal',
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
    });

    await createAccount(newAccountData);

    expect(console.log).toHaveBeenCalledWith('Account created successfully');
  });
});
