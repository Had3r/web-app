import React from 'react'

import { Footer, Header } from '@common/'

// TODO: check https://dev.to/marcosdiasdev/using-path-aliases-on-create-react-app-projects-686

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)
