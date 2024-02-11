import { ChangeEvent } from 'react'

export interface FormInputProps {
  value: string | number
  name?: string
  id: string
  tag?: string
  className?: string
  label?: string
  disabled?: boolean
  isRequired?: boolean
  placeholder?: string
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void
  type?: string
}
