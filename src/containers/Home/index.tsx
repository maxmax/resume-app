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
		navigate(`/resume/${username}`);
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
			<Box sx={{ textAlign: 'center', width: '100%' }}>
				<Typography variant="h1" sx={{ mb: 8 }}>MY GITHUB RESUME</Typography>
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
								Generate
							</Button>
						</Grid>
					</Grid>
					<Typography variant="body1" sx={{ my: 8}}>
						As a software startup owner I really enjoy when people send us their resumes and
						they include their github account so we can see tangible work they have done.
					</Typography>
				</form>
			</Box>
		</Box>
	);
};

export default Home;
