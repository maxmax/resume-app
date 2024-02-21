import * as React from 'react';
import Container from "../Container";

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
			<Container maxWidth="xl">
				{children}
			</Container>
    </>
  );
}

export default AppLayout;
