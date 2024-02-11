import { ReactNode, MouseEventHandler } from 'react'

export interface ButtonProps {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}
