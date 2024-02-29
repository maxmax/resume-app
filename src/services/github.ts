import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCurrentUser } from '@/store/slices/userSlice';
import { User, Repository, LanguageUsage } from './types';

const API_URL = import.meta.env.VITE_API_URL;

export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		getUser: builder.query<User, string>({
			query: (username) => `users/${username}`,
      async onQueryStarted(_username, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result.data) {
            dispatch(setCurrentUser(result.data));
          }
        } catch (error) {
          // If necessary, handle errors.
        }
      },
		}),
		getUserRepositories: builder.query<Repository[], { username: string, page: number, perPage: number, sort: string }>({
			query: ({ username, page, perPage, sort }) => `users/${username}/repos?page=${page}&per_page=${perPage}&sort=${sort}`,
		}),
		getUserRepositoriesLanguage: builder.query<Repository[], string>({
			query: (username) => `users/${username}/repos`,
		}),
		getUserRepositoryLanguage: builder.query<LanguageUsage, string>({
			query: (props) => `repos/${props}/languages`,
		}),
		getUserRepository: builder.query<Repository, string>({
			query: (url) => `repos/${url}`,
		}),
	}),
});

export const { 
	useGetUserQuery, 
	useGetUserRepositoriesQuery,
	useGetUserRepositoryQuery,
	useGetUserRepositoriesLanguageQuery,
	useGetUserRepositoryLanguageQuery,
} = githubApi;
