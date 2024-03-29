import { ReactElement } from 'react';

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

const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => render(ui);

describe('App routing', () => {
  test('should render Dashboard on path "/"', () => {
    renderWithRouter(<App />, { route: '/' });
    expect(screen.getByTestId('dashboard')).toBeInTheDocument();
  });
});
