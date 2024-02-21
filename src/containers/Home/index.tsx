import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		navigate(`/${username}`);
	};

	return (
		<div>
			<h1>Home Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					GitHub Username:
					<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				</label>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Home;
