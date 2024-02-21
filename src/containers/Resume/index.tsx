import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserQuery } from '@/services';
import UserInfo from './components/UserInfo';

const Resume: React.FC = () => {

	const { id: username } = useParams<{ id: string }>();

	const { data: user, isLoading: userLoading, error: userError } = useGetUserQuery(username || '');

	if (userLoading) return <div>Loading...</div>;
	if (userError || !user) return <div>Error fetching user data</div>;

	return (
		<div>
			<h1>Resume Page</h1>
			<UserInfo user={user} />
		</div>
	);
};

export default Resume;