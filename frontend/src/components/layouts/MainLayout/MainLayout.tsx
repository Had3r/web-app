import { Footer, Header } from '@components/shell'

import type { MainLayoutProps } from './MainLayout.type'

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
)
