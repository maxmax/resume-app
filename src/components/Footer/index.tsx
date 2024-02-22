import * as React from 'react';
import { Container, Box, Typography } from "@/components";

const Footer: React.FC = () => {
  return (
		<Container maxWidth="xl">
			<Box sx={{ mt: 4, mb: 0, textAlign: 'center' }}>
				<Typography variant="caption" gutterBottom>
					This resume is generated automatically using public information <br /> from the developer's GitHub account.
				</Typography>
			</Box>
		</Container>
  );
}

export default Footer;
