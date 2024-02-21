import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, Repository, Language } from './types';

export const githubApi = createApi({
    reducerPath: 'githubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    endpoints: (builder) => ({
        getUser: builder.query<User, string>({
            query: (username) => `users/${username}`,
        }),
        getUserRepositories: builder.query<Repository[], string>({
            query: (username) => `users/${username}/repos?per_page=10`,
        }),
        getUserLanguages: builder.query<Language, string>({
            query: (url) => url,
        }),
    }),
});

export const { useGetUserQuery, useGetUserRepositoriesQuery, useGetUserLanguagesQuery } = githubApi;
