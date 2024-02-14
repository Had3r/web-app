import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock(
  './components/section/AccountStatistics/components/AccountTypesPie/AccountTypesPie',
  () => ({
    AccountTypesPie: () => <div>Mocked Account Types Pie</div>,
  })
);

jest.mock(
  './components/section/AccountStatistics/components/BalanceDistributionBar/BalanceDistributionBar',
  () => ({
    BalanceDistributionBar: () => <div>Mocked Balance Distribution Bar</div>,
  })
);

test('App component loads in the DOM', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-container');
  expect(appElement).toBeInTheDocument();
});
