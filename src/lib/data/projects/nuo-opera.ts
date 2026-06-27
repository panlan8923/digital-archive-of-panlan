import type { ProjectContent } from '$lib/types/project.types';

export const nuoOpera: ProjectContent = {
	slug: 'nuo-opera',
	entryId: '02',
	title: 'Nuo Opera',
	subtitle: 'Digital Rebirth of Ritual Theatre',
	authors: 'Pan Lan',
	year: '—',
	introTitle: 'Ancient Chinese Opera: Digital Presentation of Nuo Opera',
	introText:
		'The aim of this project is to translate the intricate artistic components embedded within Nuo culture into digital formats, thus generating digital art and immersive experiences. This endeavor seeks to foster the preservation of this cultural heritage and prevent the fading away of folk culture. Through the digitization and reconfiguration of the artistic elements found in Chinese-Chizhou Nuo drama, the project pioneers novel mediums for safeguarding intangible cultural heritage. It aims to inspire broader participation in the perpetuation of intangible cultural heritage, ensuring its vitality and perpetuity.',
	coverImage: '/archive/nuo-opera/cover.png',
	pdfUrl: '/archive/nuo-opera.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'background',
			title: 'Background — Nuo Opera and Nuo Masks',
			caption:
				'Historical evolution, geographic distribution, mask characteristics, and the ritual gestures at the heart of Chizhou Nuo culture.',
			image: '/archive/nuo-opera/page-02.png'
		},
		{
			kind: 'video',
			id: 'work-display-video',
			title: 'Work Display — Motion Study',
			caption:
				'Particle-based digital art regenerations of Nuo masks—dynamic, activated forms that transform intangible heritage through TouchDesigner.',
			src: '/archive/nuo-opera/work-display.mp4',
			poster: '/archive/nuo-opera/page-05.png'
		},
		{
			kind: 'image',
			id: 'work-display',
			title: 'Work Display',
			caption:
				'Digital particle compositions reassembling Nuo masks into luminous, interactive forms.',
			image: '/archive/nuo-opera/page-05.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Project Overview — Digital Presentation of Nuo Opera'
		},
		{
			number: '02',
			label: 'Background — Nuo Opera and Nuo Masks',
			subsections: [
				'Historical Evolution',
				'Distribution Area',
				'Mask Characteristics',
				'Mask Type',
				'Nuo Opera Gestures'
			]
		},
		{
			number: '03',
			label: 'Introduction to Nuo Culture',
			subsections: [
				'Mask Etiquette',
				'The Core of Nuo Opera',
				'Production Procedure'
			]
		},
		{
			number: '04',
			label: 'Design Process',
			subsections: [
				'Mask Restoration and Digitization',
				'Character Studies',
				'Digital Art Regeneration'
			]
		},
		{
			number: '05',
			label: 'Work Display'
		},
		{
			number: '06',
			label: 'Project Value',
			subsections: [
				'Cultural Inheritance Value',
				'Technologically Driven Cultural Inheritance',
				'Linking Society and Triggering Thinking',
				'Diverse Digital Intangible Cultural Heritage Forms'
			]
		}
	]
};
