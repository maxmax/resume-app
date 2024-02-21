import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
	Typography, 
	TextField, 
	Button, 
	Box, 
	Grid 
} from '@/components';

const Home: React.FC = () => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate(`/${username}`);
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h1" sx={{ mb: 4 }}>MY GITHUB RÉSUMÉ</Typography>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<TextField
								fullWidth
								size="small"
								label="GitHub Username"
								variant="outlined"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Grid>
						<Grid item xs={4}>
							<Button type="submit" variant="contained" color="primary" fullWidth>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Box>
	);
};

export default Home;
