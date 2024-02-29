import React from 'react';
import {
	Typography, 
	Box, 
} from '@/components';

const NotFoundPage: React.FC = () => {
  return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
			<Box sx={{ textAlign: 'center', width: '100%' }}>
				<Typography variant="h1" sx={{ mb: 8 }}>404 - Page not found 🤕</Typography>
				<Typography variant="body1" gutterBottom>Sorry, the page you are looking for does not exist.</Typography>
			</Box>
		</Box>
  );
};

export default NotFoundPage;
