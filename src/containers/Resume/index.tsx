import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery, useGetUserRepositoriesQuery } from '@/services';
import { PageLayout } from '@/components';
import { SelectChangeEvent } from '@/components/Select';
import UserInfo from './components/UserInfo';
import RepositoriesList from './components/RepositoriesList';
import LanguageUsage from './components/LanguageUsage';

const Resume: React.FC = () => {

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
	const [selectedSort, setSelectedSort] = useState('updated');

	const { id: username } = useParams<{ id: string }>();
	const { data: user, isLoading: userLoading, error: userError } = useGetUserQuery(username || '');
	const { data: repos, isLoading: reposLoading, error: reposError } = useGetUserRepositoriesQuery({
    username: username || '',
    page,
    perPage,
		sort: selectedSort
	});

  const handlePageChange = (newPage: number) => setPage(newPage);

  const handlePerPageChange = (newPerPage: number) => setPerPage(newPerPage);

	const handleSortChange = (event: SelectChangeEvent<unknown>) => setSelectedSort(event.target.value as string);

	return (
		<PageLayout loading={userLoading || reposLoading} error={userError}>
			{!!user && <UserInfo user={user} />}
			{username && <LanguageUsage username={username} />}
      {!!user && !reposError && (
        <RepositoriesList
          repositories={repos}
					currentPage={page}
					perPage={perPage}
					count={user.public_repos}
          onPageChange={handlePageChange}
          onPerPageChange={handlePerPageChange}
          selectedSort={selectedSort}
          onSortChange={handleSortChange}
        />
      )}
		</PageLayout>
	);
};

export default Resume;