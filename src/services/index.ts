import { 
	githubApi, 
	useGetUserQuery, 
	useGetUserRepositoriesQuery,
	useGetUserRepositoryQuery,
	useGetUserRepositoriesLanguageQuery,
	useGetUserRepositoryLanguageQuery,
} from '../services/github';
import { 
	User, 
	Repository,
	LanguageUsage,
} from './types';
export { 
	githubApi,
	useGetUserQuery,
	useGetUserRepositoriesQuery,
	useGetUserRepositoryQuery,
	useGetUserRepositoriesLanguageQuery,
	useGetUserRepositoryLanguageQuery,
};
export type { 
	User, 
	Repository,
	LanguageUsage,
};