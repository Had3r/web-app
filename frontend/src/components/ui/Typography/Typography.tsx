import { twMerge } from 'tailwind-merge';

import { typographyStyles } from './Typography.options';
import type { TypographyProps } from './Typography.props';

export const Typography = ({
  variant = 'p',
  className = '',
  children,
}: TypographyProps) => {
  const Component = variant;
  const style = twMerge(typographyStyles[variant], className);

  return <Component className={style}>{children}</Component>;
};
