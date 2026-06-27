import type { AboutSection, ContactLink } from '$lib/types/site.types';

export const aboutIntro = {
	title: 'About Pan Lan',
	span: '2024–Present'
};

export const aboutSections: AboutSection[] = [
	{
		number: '01',
		title: 'Who I Am',
		paragraphs: [
			'I am Pan Lan, a brand designer and visual researcher from China, currently completing a master’s degree in Brand Design in Italy. Before returning to study, I worked as an Art Director at Dentsu China.'
		]
	},
	{
		number: '02',
		title: 'My Practice',
		paragraphs: [
			'My practice moves across brand identity, editorial design, cultural research, interactive media, and visual storytelling.',
			'I work with different formats, including visual systems, publications, installations, digital experiences, and experimental projects.'
		]
	},
	{
		number: '03',
		title: 'What I Explore',
		paragraphs: [
			'My work often begins with culture, memory, ritual, social relationships, and invisible systems.',
			'Through design, I explore how complex ideas and personal experiences can be translated into visual structures, narratives, objects, and interactive experiences.'
		]
	},
	{
		number: '04',
		title: 'About This Archive',
		paragraphs: [
			'PAN LAN — DIGITAL ARCHIVE brings together selected academic, professional, independent, and collaborative projects.',
			'It is an evolving record of my design practice, research interests, working processes, and ongoing experiments. Each numbered object represents a project or research entry, with images, text, video, or PDF documentation available where relevant.'
		]
	}
];

export const contactIntro = {
	eyebrow: 'Correspondence',
	title: 'Contact'
};

export const contactName = 'PAN LAN';

export const contactLinks: ContactLink[] = [
	{
		label: 'Email',
		value: 'panlan8923@gmail.com',
		href: 'mailto:panlan8923@gmail.com'
	},
	{
		label: 'Instagram',
		value: '@panlan8923',
		href: 'https://instagram.com/panlan8923',
		external: true
	}
];
