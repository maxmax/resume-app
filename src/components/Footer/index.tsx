import * as React from 'react';
import { Container, Box, Typography } from "@/components";

const Footer: React.FC = () => {
  return (
		<Container maxWidth="xl">
			<Box sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
				<Typography variant="body1" gutterBottom>
					This résumé is generated automatically using public information from the developer's GitHub account.
				</Typography>
			</Box>
		</Container>
  );
}

export default Footer;
