import React from 'react';
import { User } from '@/services';

interface UserInfoProps {
	user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
	const memberSince = user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A';
	const lastUpdated = user.updated_at ? new Date(user.updated_at).toLocaleDateString() : 'N/A';
	
	return (
		<div>
			<h2>User Info:</h2>
			<div>Login: {user.login}</div>
			<div>Name: {user.name}</div>
			<div>Public Repositories: {user.public_repos}</div>
			<div>Member Since: {memberSince}</div>
      <div>Last Updated: {lastUpdated}</div>
		</div>
	);
};

export default UserInfo;
