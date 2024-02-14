import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormInput } from './FormInput';

describe('FormInput', () => {
  it('renders input element with placeholder', () => {
    render(
      <FormInput
        onChange={() => {}}
        placeholder="Test Placeholder"
        id="testInput"
      />
    );
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<FormInput onChange={() => {}} label="Test Label" id="testInput" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders required mark when isRequired is true', () => {
    render(
      <FormInput
        onChange={() => {}}
        label="Test Label"
        isRequired={true}
        id="testInput"
      />
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('renders error message when error is provided', () => {
    render(<FormInput onChange={() => {}} error="Test Error" id="testInput" />);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('renders select element when tag is select', () => {
    render(
      <FormInput
        onChange={() => {}}
        tag="select"
        options={['Option 1', 'Option 2']}
        id="testSelect"
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('changes value when typed into input', async () => {
    const MockFormInputWithState = () => {
      const [value, setValue] = React.useState('');
      const handleChange = (event: any) => setValue(event.target.value);

      return <FormInput onChange={handleChange} id="testInput" value={value} />;
    };

    render(<MockFormInputWithState />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'Hello, World!');
    expect(input).toHaveValue('Hello, World!');
  });
});
