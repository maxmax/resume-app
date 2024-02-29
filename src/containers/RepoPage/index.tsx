import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import { useGetUserRepositoryQuery } from '@/services';
import { Link } from "react-router-dom";
import { 
	PageLayout,
	Box,
	Typography,
	Chip,
	Button,
} from '@/components';
import RepoLanguageUsage from './components/RepoLanguageUsage'

const RepoPage: React.FC = () => {

	const { usernameId, repoId } = useParams<{ usernameId: string, repoId: string }>();
	const { data: repo, isLoading: repoLoading, error: repoError } = useGetUserRepositoryQuery(`${usernameId}/${repoId}`);

	return (
		<PageLayout loading={repoLoading} error={repoError}>
			{!!repo &&
				<Box sx={{ p: 4, textAlign: 'center' }}>
					<Typography variant="h1" sx={{ py: 4 }}>{repo.name}</Typography>
					<Typography variant="overline" display="block">
						Created: {dayjs(repo.created_at).format('DD-MMM-YYYY h:mm A')} - Updated: {dayjs(repo.updated_at).format('DD-MMM-YYYY h:mm A')}
					</Typography>
					<Chip label={`Subscribers: ${repo.subscribers_count}`} sx={{ my: 2, mx: 1 }} />
					<Chip label={`Watchers: ${repo.watchers_count}`} sx={{ my: 2, mx: 1 }} />
					<Chip label={`Issues: ${repo.open_issues_count}`} sx={{ my: 2, mx: 1 }} />
					<RepoLanguageUsage repository={`${usernameId}/${repoId}`} />
					<Typography variant="button" display="block" sx={{ mt: 4 }}>
						<a href={repo.html_url} target="_blank" rel="noopener noreferrer">{'Go to repository github page'}</a> 
					</Typography>
					<Link to={`/resume/${usernameId}`}>
						<Button variant="outlined" sx={{ mt: 8 }}>Back</Button>
					</Link>
				</Box>
			}
		</PageLayout>
	);
};

export default RepoPage;