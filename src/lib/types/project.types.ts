export interface ProjectHighlightImage {
	kind: 'image';
	id: string;
	title: string;
	caption?: string;
	image: string;
}

export interface ProjectHighlightVideo {
	kind: 'video';
	id: string;
	title: string;
	caption?: string;
	src: string;
	poster?: string;
}

export type ProjectHighlight = ProjectHighlightImage | ProjectHighlightVideo;

export interface ProjectTocItem {
	number: string;
	label: string;
	subsections?: string[];
}

export interface ProjectContent {
	slug: string;
	entryId: string;
	title: string;
	subtitle: string;
	authors: string;
	year: string;
	introTitle: string;
	introText: string;
	highlights: ProjectHighlight[];
	toc: ProjectTocItem[];
	pdfUrl?: string;
	coverImage: string;
}
