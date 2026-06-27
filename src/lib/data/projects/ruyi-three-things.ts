import type { ProjectContent } from '$lib/types/project.types';

export const ruyiThreeThings: ProjectContent = {
	slug: 'ruyi-three-things',
	entryId: '07',
	title: '如意的三件小事',
	subtitle: "Ruyi's Three Little Things",
	authors: 'Pan Lan',
	year: '2026',
	introTitle: 'A Gift for Ruyi',
	introText:
		"Ruyi's Three Little Things is a picture book I created as a gift for my daughter, Ruyi. Inspired by the small moments of her everyday life, the story follows the comfort doll she holds every day as its main character. Through this familiar companion, the book captures the tenderness, imagination, and quiet rituals of childhood.",
	coverImage: '/archive/ruyi-three-things/cover.png',
	pdfUrl: '/archive/ruyi-three-things.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'wawa',
			title: 'Wawa — The Comfort Doll',
			caption:
				'Ruyi’s bunny companion with long ears “like antennas that receive the world”—always winking, always keeping a secret.',
			image: '/archive/ruyi-three-things/page-03.png'
		},
		{
			kind: 'image',
			id: 'clouds',
			title: 'Looking at the Clouds',
			caption:
				'A circle drawn on the pavement invites busy adults to slow down—and notice the sky.',
			image: '/archive/ruyi-three-things/page-07.png'
		},
		{
			kind: 'image',
			id: 'labels',
			title: 'The Label Market',
			caption:
				'In a world of names and categories, the doll refuses to be only one word—and chooses to be brave.',
			image: '/archive/ruyi-three-things/page-10.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Cover — 如意的三件小事'
		},
		{
			number: '02',
			label: 'Wawa — The Comfort Doll',
			subsections: ['The bunny with antenna ears', 'A secret kept in one winking eye']
		},
		{
			number: '03',
			label: 'The Question Seed',
			subsections: ['Look with your heart', 'A journey to understand yourself']
		},
		{
			number: '04',
			label: 'Looking at the Clouds',
			subsections: ['A circle on the road', 'Bringing the “now” back']
		},
		{
			number: '05',
			label: 'The Label Market',
			subsections: ['More than one word', 'The bravest, most adventurous doll']
		}
	]
};
