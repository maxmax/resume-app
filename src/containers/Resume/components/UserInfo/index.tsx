import React from 'react';
import dayjs from 'dayjs';
import { User } from '@/services';
import { 
	Box, 
	Typography, 
	Divider, 
	Avatar 
} from '@/components';

interface UserInfoProps {
	user: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {

	const memberSince = dayjs(user.created_at).format('DD-MMM-YYYY');
	const lastUpdated = dayjs(user.updated_at).format('DD-MMM-YYYY');
	
	return (
		<Box sx={{ textAlign: 'center', mt: 8 }}>
			<Typography variant="h1">{user.name}</Typography>
      <Avatar
        alt="Remy Sharp"
        src={user.avatar_url}
        sx={{ width: 140, height: 140, margin: 'auto', mt: 1, mb: 2 }}
      />
      <Typography variant="overline" display="block">
				<a href={user.html_url} target='_blank'>{user.html_url}</a>
      </Typography>
			<Typography variant="caption" display="block" gutterBottom>
				Last Updated: {lastUpdated}
      </Typography>
			<Divider />
			<Typography variant="body1" sx={{ my: 2 }}>
				A GitHub user since {memberSince}, {user.name} is a developer with {user.public_repos} public 
				repositories and {user.followers} subscribers.
			</Typography>
			{user.blog &&
				<Typography variant="overline" display="block">
					Website: <a href={user.blog} target='_blank'>{user.blog}</a>
				</Typography>
			}
			<Divider />
		</Box>
	);
};

export default UserInfo;
