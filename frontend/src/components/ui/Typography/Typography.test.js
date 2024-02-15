import React from 'react';

import { render } from '@testing-library/react';

import { Typography } from './Typography';

describe('Typography', () => {
  it('renders the text passed as children', () => {
    const { getByText } = render(
      <Typography>Some text for testing purpose</Typography>
    );
    expect(getByText('Some text for testing purpose')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { getByText } = render(
      <Typography className="custom-class">Test</Typography>
    );
    const typographyElement = getByText('Test');
    expect(typographyElement).toHaveClass('custom-class');
  });

  it('renders the correct HTML element based on the variant prop', () => {
    const { container } = render(
      <Typography variant="h1">Heading 1</Typography>
    );
    expect(container.querySelector('h1')).not.toBeNull();
  });
});
