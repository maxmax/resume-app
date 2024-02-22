import React from 'react';
import dayjs from 'dayjs';
import { Repository } from '@/services';
import { 
	Box, 
	Grid,
	Typography,
	Divider, 
} from '@/components';

interface RepositoriesListProps {
  repositories?: Repository[];
}

const RepositoriesList: React.FC<RepositoriesListProps> = ({ repositories }) => {
	
	if (!repositories) return null;

	return (
		<Box sx={{ my: 4, textAlign: 'center' }}>
			<Grid container spacing={0} justifyContent="center">
				<Grid item xs={12}>
					<Typography variant="h4" sx={{ py: 4 }}>Popular Repositories</Typography>
				</Grid>				
				{repositories.length ? repositories.map((repo) => (
					<Grid item sm={12} md={6} lg={4} xl={4}>
						<Box key={repo.name} sx={{ pt: 2 }}>
							<Typography variant="button" display="block">
								<a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a> 
							</Typography>
							<Typography variant="overline" display="block">
								(Last Updated: {dayjs(repo.updated_at).format('DD-MMM-YYYY h:mm A')})
							</Typography>
							{repo.language &&
								<Typography variant="caption" display="block" gutterBottom>
									(Language: {repo.language})
								</Typography>
							}
							<Divider />
						</Box>
					</Grid>
				)) : <Grid item xs={12}>Empty 🤔</Grid>}
			</Grid>
		</Box>
	);
};

export default RepositoriesList;
