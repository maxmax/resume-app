import * as React from 'react';
import { Container, Footer } from "@/components";

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md">
      {children}
      <Footer />
    </Container>
  );
}

export default AppLayout;
