import { twMerge } from 'tailwind-merge'

import type { ContainerProps } from './Container.type'

export const Container = ({
  children,
  component,
  className,
}: ContainerProps) => {
  const DynamicComponent = component ?? 'section'

  return (
    <DynamicComponent
      className={twMerge('container mx-auto px-4 py-12 md:py-24', className)}
    >
      {children}
    </DynamicComponent>
  )
}
