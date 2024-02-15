import { twMerge } from 'tailwind-merge';

import type { ContainerProps } from './Container.type';

export const Container = ({
  children,
  component,
  className,
}: ContainerProps) => {
  const DynamicComponent = component ?? 'div';

  return (
    <DynamicComponent
      className={twMerge('container mx-auto px-4 py-12 ', className)}
    >
      {children}
    </DynamicComponent>
  );
};
