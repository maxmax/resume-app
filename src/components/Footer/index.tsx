import * as React from 'react';
import { User } from '@/services';
import { Container, Box, Typography } from "@/components";

interface FooterProps {
  currentUser?: User | null;
}

const Footer: React.FC<FooterProps> = ({ currentUser }) => {
  return (
		<Container maxWidth="xl">
			<Box sx={{ mt: 4, mb: 0, textAlign: 'center' }}>
				<Typography variant="body2">
					This resume is generated automatically using public information <br /> from the developer's GitHub account.
				</Typography>
				{currentUser &&
					<Typography variant="caption" gutterBottom>
						{currentUser.name} - <a href={currentUser.html_url} target='_blank'>{currentUser.html_url}</a>
					</Typography>
				}
			</Box>
		</Container>
  );
}

export default Footer;
