import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps } from './Button.type';

export const Button = ({
  className,
  children,
  type = 'button',
  variant = 'primary',
  disabled,
  href,
  onClick,
  ariaLabel,
  ...rest
}: ButtonProps) => {
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-700 text-black',
    dark: 'hover:bg-[#353b47]',
  };

  const commonProps = {
    className: twMerge(
      'px-4 py-3 transition rounded-xl outline-offset-2',
      variantStyles[variant],
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className
    ),
    ...(disabled && { disabled }),
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...rest,
  };

  return href ? (
    <Link {...commonProps} to={href}>
      {children}
    </Link>
  ) : (
    <button {...commonProps} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
