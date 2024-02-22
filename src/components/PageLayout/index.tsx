import * as React from 'react';
import { Paper, Box, Footer } from "@/components";

interface PageLayoutProps {
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Paper sx={{ py: 4, my: 4 }}>
      <Box>
        {children}
      </Box>
      <Footer />
    </Paper>
  );
}

export default PageLayout;
