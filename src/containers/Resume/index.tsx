import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery, useGetUserRepositoriesQuery } from '@/services';
import { 
	Box, 
	CircularProgress, 
} from '@/components';
import UserInfo from './components/UserInfo';
import RepositoriesList from './components/RepositoriesList';

const Resume: React.FC = () => {

	const { id: username } = useParams<{ id: string }>();

	const { data: user, isLoading: userLoading, error: userError } = useGetUserQuery(username || '');
	const { data: repos, isLoading: reposLoading, error: reposError } = useGetUserRepositoriesQuery(username || '');

	if (userLoading || reposLoading) return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}><CircularProgress /></Box>;
	if (userError || !user) return <div>Error fetching user data</div>;
	if (reposError) return <div>Error fetching repositories</div>;

	return (
		<Box>
			<UserInfo user={user} />
			<RepositoriesList repositories={repos} />
		</Box>
	);
};

export default Resume;