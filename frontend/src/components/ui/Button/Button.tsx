import { twMerge } from 'tailwind-merge'

import type { ButtonProps } from './Button.type'

export const Button = ({
  className,
  children,
  type = 'button',
  ...rest
}: ButtonProps) => (
  <button
    type={type}
    className={twMerge('inline-block border px-4 py-2 rounded-sm', className)}
    {...rest}
  >
    {children}
  </button>
)
