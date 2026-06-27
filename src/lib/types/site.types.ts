export type SiteView = 'archive' | 'about' | 'contact';

export interface AboutSection {
	number: string;
	title: string;
	paragraphs: string[];
	items?: string[];
}

export interface ContactLink {
	label: string;
	value: string;
	href: string;
	external?: boolean;
}
