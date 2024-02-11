import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
}
