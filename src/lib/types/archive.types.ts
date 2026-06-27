export interface ArchiveIndexItem {
	number: string;
	label: string;
}

export interface ArchiveEntry {
	id: string;
	number: string;
	title: string;
	category: string;
	year: string;
	shelf: 1 | 2;
	description: string;
	indexItems: ArchiveIndexItem[];
	image: string;
	openUrl: string;
	/** Route slug when a full project page exists, e.g. robot-therapy */
	projectSlug?: string;
}

export interface NavItem {
	label: string;
	href: string;
	active?: boolean;
}
