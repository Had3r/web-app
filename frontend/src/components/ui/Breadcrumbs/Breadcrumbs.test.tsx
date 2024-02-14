import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders correctly', () => {
    const breadcrumbs = [
      { label: 'Home', link: '/' },
      { label: 'Page', link: '/page' },
    ];

    render(
      <Router>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Page')).toBeInTheDocument();
  });
});
