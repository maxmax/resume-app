import { 
	githubApi, 
	useGetUserQuery, 
	useGetUserRepositoriesQuery,
	useGetUserRepositoriesLanguageQuery,
} from '../services/github';
import { 
	User, 
	Repository,
} from './types';
export { 
	githubApi,
	useGetUserQuery,
	useGetUserRepositoriesQuery,
	useGetUserRepositoriesLanguageQuery,
};
export type { 
	User, 
	Repository,
};