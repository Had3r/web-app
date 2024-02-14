import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>);
    expect(
      screen.getByRole('button', { name: 'Test Button' })
    ).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Clickable Button' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant class', () => {
    const { rerender } = render(
      <Button variant="primary">Primary Button</Button>
    );
    expect(screen.getByRole('button', { name: 'Primary Button' })).toHaveClass(
      'bg-bright-green'
    );

    rerender(<Button variant="secondary">Secondary Button</Button>);
    expect(
      screen.getByRole('button', { name: 'Secondary Button' })
    ).toHaveClass('bg-soft-orange');
  });
});
