import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Notification } from './Notification';

describe('Notification Component', () => {
  it('renders correctly when isVisible is true', () => {
    render(
      <Notification
        message="Test message"
        isVisible={true}
        onClose={() => {}}
        type="success"
      />
    );

    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('does not render when isVisible is false', () => {
    render(
      <Notification
        message="Test message"
        isVisible={false}
        onClose={() => {}}
        type="success"
      />
    );

    expect(screen.queryByText('Test message')).not.toBeInTheDocument();
  });
});
