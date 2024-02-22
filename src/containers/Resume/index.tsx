import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery, useGetUserRepositoriesQuery } from '@/services';
import { 
	PageLayout,
	CircularProgress, 
	ErrorNotification,
	CenteredLayout,
} from '@/components';
import UserInfo from './components/UserInfo';
import RepositoriesList from './components/RepositoriesList';
import LanguageUsage from './components/LanguageUsage';

const Resume: React.FC = () => {

	const { id: username } = useParams<{ id: string }>();

	const { data: user, isLoading: userLoading, error: userError } = useGetUserQuery(username || '');
	const { data: repos, isLoading: reposLoading, error: reposError } = useGetUserRepositoriesQuery(username || '');

	return (
		<PageLayout>
      {userLoading || reposLoading ? (
				<CenteredLayout>
					<CircularProgress />
				</CenteredLayout>
      ) : userError || !user ? (
				<CenteredLayout>
					<ErrorNotification error={userError} />
				</CenteredLayout>
      ) : (
        <>
          <UserInfo user={user} />
					{username && <LanguageUsage username={username} />}
					{reposError ? <ErrorNotification error={reposError} /> : <RepositoriesList repositories={repos} />}
        </>
      )}
		</PageLayout>
	);
};

export default Resume;