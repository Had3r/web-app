import { checkIfAccountExists } from './checkIfAccountExists';

global.fetch = jest.fn();

describe('checkIfAccountExists', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return true if account exists', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      status: 200,
    });

    const result = await checkIfAccountExists('existingOwnerId');
    expect(result).toBe(true);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  it('should return false if account does not exist', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const result = await checkIfAccountExists('nonExistingOwnerId');
    expect(result).toBe(false);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
