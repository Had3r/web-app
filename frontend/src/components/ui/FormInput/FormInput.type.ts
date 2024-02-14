import { ChangeEvent } from 'react';

export interface FormInputProps {
  id: string;
  value?: string | number | null;
  error?: string;
  name?: string;
  tag?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  min?: string;
  options?: string[];
  onChange: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => void;
  type?: string;
}
