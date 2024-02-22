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
		<Box sx={{ mt: 4, textAlign: 'center' }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography variant="h4">Popular Repositories</Typography>
				</Grid>
				<Grid item xs={12}>
					{repositories.length ? repositories.map((repo) => (
						<Box key={repo.name}>
							<Typography variant="overline" display="block">
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
					)) : 'Empty 🤔'}
				</Grid>
			</Grid>
		</Box>
	);
};

export default RepositoriesList;
