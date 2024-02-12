import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from './Button.type';

export const Button = ({
  className,
  children,
  type = 'button',
  variant = 'primary',
  disabled,
  ...rest
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-black',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        'px-4 py-2 rounded-sm outline-offset-2',
        variantStyles[variant],
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
