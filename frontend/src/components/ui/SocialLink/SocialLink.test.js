import React from 'react';

import { render } from '@testing-library/react';
import { FaTwitter } from 'react-icons/fa';

import { SocialLink } from './SocialLink';

describe('SocialLink', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(
      <SocialLink href="https://twitter.com" icon={FaTwitter} label="Twitter" />
    );

    const linkElement = getByLabelText('Twitter');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://twitter.com');
    expect(linkElement).toHaveAttribute('target', '_blank');
    expect(linkElement).toHaveClass('hover:text-blue-600');
    expect(linkElement.querySelector('svg')).toBeInTheDocument();
  });
});
