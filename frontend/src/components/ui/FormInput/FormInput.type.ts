import { ChangeEvent } from 'react';

export interface FormInputProps {
  value: string | number | null;
  id: string;
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
  onChange?: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => void;
  type?: string;
}
