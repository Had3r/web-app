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
    primary: 'bg-bright-green hover:bg-vivid-purple text-white',
    secondary: 'bg-soft-orange hover:bg-warm-orange text-black',
    dark: 'bg-deep-gray hover:bg-light-gray text-white hover:text-gray-800',
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
