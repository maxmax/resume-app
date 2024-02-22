import * as React from 'react';
import { Container } from "@/components";

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="md">
      {children}
    </Container>
  );
}

export default AppLayout;
