import { Footer, Header } from 'components/shell';

import type { MainLayoutProps } from './MainLayout.type';
import { Container } from '../Container';

export const MainLayout = ({
  children,
  'data-testid': dataTestId,
}: MainLayoutProps) => (
  <div data-testid={dataTestId} className="flex flex-col min-h-screen">
    <Header />
    <Container component="main" className="flex flex-1">
      {children}
    </Container>
    <Footer />
  </div>
);
