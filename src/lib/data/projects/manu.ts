import type { ProjectContent } from '$lib/types/project.types';

export const manu: ProjectContent = {
	slug: 'manu',
	entryId: '04',
	title: 'MANU',
	subtitle: 'Invisible Traces',
	authors: 'Pan Lan / Zhang Yingxi / Ma Sutong',
	year: '2025',
	introTitle: 'Invisible Traces',
	introText:
		'History is not always clearly visible. Time erases traces and leaves behind fragments. Yet absence itself is a trace — a testimony of existence. Broken inscriptions, lost languages, shattered artifacts, and undeciphered scripts speak through silence. An archaeological museum does not only tell the story of what remains, but also of what has disappeared; not only what is visible, but also what is invisible. To infer the invisible through the visible.',
	coverImage: '/archive/manu/cover.png',
	pdfUrl: '/archive/manu.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'theme',
			title: 'The Theme — Invisible Traces',
			caption:
				'Archaeology as a puzzle: the invisible parts are the key to understanding civilizations at Museo Archeologico Nazionale dell\'Umbria.',
			image: '/archive/manu/page-03.png'
		},
		{
			kind: 'image',
			id: 'logo',
			title: 'Logo Explanation',
			caption:
				'Letterforms from Etruscan and Umbrian alphabets, with missing and invisible traces forming the museum identity.',
			image: '/archive/manu/page-08.png'
		},
		{
			kind: 'image',
			id: 'poster',
			title: 'Poster Application',
			caption:
				'Campaign visuals extending the invisible-traces concept across exhibition communication.',
			image: '/archive/manu/page-16.png'
		},
		{
			kind: 'image',
			id: 'navigation',
			title: 'Navigation System',
			caption:
				'Wayfinding and signage design for practical application within the museum environment.',
			image: '/archive/manu/page-17.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Previous Research',
			subsections: ['Target Profile', 'Specific Target Portrait', 'WHW']
		},
		{
			number: '02',
			label: 'Theme — Invisible Traces',
			subsections: ['Theme', 'Content', 'Concept']
		},
		{
			number: '03',
			label: 'Vision',
			subsections: ['Logo', 'Poster', 'Auxiliary Graphics']
		},
		{
			number: '04',
			label: 'Practical Application',
			subsections: ['Signage Design', 'Improvement of Cultural Relics Introduction']
		}
	]
};
