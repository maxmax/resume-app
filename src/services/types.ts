export interface User {
	login: string;
	name: string;
	public_repos: number;
	created_at: string;
	updated_at: string;
	languages_url: string;
}

export interface Repository {
	name: string;
	html_url: string;
	updated_at: string;
}

export interface Language {
	[key: string]: number;
}