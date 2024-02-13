import type { FormInputProps } from './FormInput.type';

export const FormInput = ({
  tag = 'input',
  className = '',
  label,
  disabled = false,
  isRequired = false,
  value,
  placeholder,
  id,
  error,
  options = [],
  ...rest
}: FormInputProps) => {
  const baseClasses = 'px-4 py-2 border border-gray-300 rounded-md shadow-sm';
  const focusClasses =
    'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500';
  const combinedClasses = `${baseClasses} ${focusClasses} ${className}`;

  const inputElement =
    tag === 'select' ? (
      <select
        className={combinedClasses}
        id={id}
        disabled={disabled}
        required={isRequired}
        value={value || ''}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        className={combinedClasses}
        placeholder={placeholder}
        value={value || ''}
        id={id}
        disabled={disabled}
        required={isRequired}
        {...rest}
      />
    );

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {inputElement}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
