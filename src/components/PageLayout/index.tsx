import * as React from 'react';
import { 
  Paper, 
  Box, 
  Footer,
	CircularProgress, 
	ErrorNotification,
	CenteredLayout,
} from "@/components";
import { useSelector } from 'react-redux'; // Import the useSelector hook
import { RootState } from '@/store';

interface Error {
  message?: string;
  status?: string | number;
}

interface PageLayoutProps {
  loading: boolean,
  children: React.ReactNode,
  error?: Error
}

const PageLayout: React.FC<PageLayoutProps> = ({ loading, children, error }) => {

  // Just for demonstrated Slice - Access currentUser from the Redux store
	const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <Paper sx={{ py: 4, my: 4 }}>
      <Box sx={{ minHeight: '80vh' }}>
        {loading ? (
          <CenteredLayout>
            <CircularProgress />
          </CenteredLayout>
        ) : error ? (
          <CenteredLayout>
            <ErrorNotification error={error || {}} />
          </CenteredLayout>
        ) : (
          <>
            {children}
          </>
        )}
      </Box>
      <Footer currentUser={currentUser} />
    </Paper>
  );
}


export default PageLayout;
