import * as React from 'react';
import Box from "@/components/Box";

interface CenteredLayoutProps {
  children: React.ReactNode
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
      {children}
    </Box>
  );
}

export default CenteredLayout;
