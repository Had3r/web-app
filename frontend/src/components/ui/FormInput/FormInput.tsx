import type { FormInputProps } from './FormInput.type'

export const FormInput = ({
  tag = 'input',
  className = '',
  label,
  disabled = false,
  isRequired = false,
  placeholder,
  id,
  ...rest
}: FormInputProps) => {
  const DynamicComponent = tag === 'textarea' ? 'textarea' : 'input'

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <DynamicComponent
        className="px-4 py-2 border rounded-sm"
        placeholder={placeholder}
        id={id}
        {...rest}
      />
    </div>
  )
}
