export interface User {
	login: string;
	name: string;
	public_repos: number;
	created_at: string;
	updated_at: string;
	followers: string;
	avatar_url: string;
	html_url?: string;
	blog?: string;
}

export interface Repository {
	name: string;
	html_url: string;
	updated_at: string;
	languages_url: string;
	language?: string;
}