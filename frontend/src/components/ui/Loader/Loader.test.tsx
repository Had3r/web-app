import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('<Loader />', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('accepts and applies a custom className', () => {
    const customClass = 'my-custom-class';
    const { getByTestId } = render(<Loader className={customClass} />);
    expect(getByTestId('loader').className).toMatch(customClass);
  });
});
