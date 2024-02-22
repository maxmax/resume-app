import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Repository } from './types';

const API_URL = import.meta.env.VITE_API_URL;

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getUser: builder.query<User, string>({
			query: (username) => `users/${username}`,
		}),
		getUserRepositories: builder.query<Repository[], string>({
			query: (username) => `users/${username}/repos?per_page=10&sort=updated`,
		}),
	}),
});

export const { 
	useGetUserQuery, 
	useGetUserRepositoriesQuery,
} = githubApi;
