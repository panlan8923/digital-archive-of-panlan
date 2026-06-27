import type { ProjectContent } from '$lib/types/project.types';

export const riottosa: ProjectContent = {
	slug: 'riottosa',
	entryId: '05',
	title: 'Riottosa',
	subtitle: 'Pratiche sociali e identità collettiva',
	authors: 'Lan Pan / Daniela Mancarella / Sara Pantalloni / Marco Emanuele Romano',
	year: '2025',
	introTitle: 'Social Practices and Collective Identity',
	introText:
		'Riottosa is a brand design research project developed at ABA Perugia (2024/25), focused on the Fontivegge neighborhood and the collective OSA — Operatori Sociali Autorganizzati. Rather than serving market visibility, the identity system addresses collective, social, and political needs: spreading messages, building networks, and strengthening community belonging through typography, illustration, and applied communication.',
	coverImage: '/archive/riottosa/cover.png',
	pdfUrl: '/archive/riottosa.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'context',
			title: 'Context Analysis — Fontivegge',
			caption:
				'Research into the Fontivegge district of Perugia—from Aldo Rossi’s original master plan to the neighborhood today.',
			image: '/archive/riottosa/context.png'
		},
		{
			kind: 'image',
			id: 'typography',
			title: 'Design System — Typography',
			caption:
				'Riottosa display type and Founders Grotesk for editorial use—built around the OSA acronym and collective voice.',
			image: '/archive/riottosa/design-system.png'
		},
		{
			kind: 'image',
			id: 'social',
			title: 'Social Network Applications',
			caption:
				'Instagram posts and stories for campaigns, presidi, and neighborhood events—expressive, participatory, and politically engaged.',
			image: '/archive/riottosa/page-184.png'
		},
		{
			kind: 'image',
			id: 'merchandise',
			title: 'Clothing & Accessori',
			caption:
				'Merchandise as symbolic vehicles for recognition—t-shirts and materials that carry OSA into public space.',
			image: '/archive/riottosa/applications.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Analisi del contesto',
			subsections: [
				'Fontivegge tra passato e presente',
				'Gli operatori sociali umbri',
				'Le origini di OSA',
				'Indagine: Focus group'
			]
		},
		{
			number: '02',
			label: 'Case Histories',
			subsections: ['Maria Thereza Alves', 'Maria Lai', 'Ana Mendieta']
		},
		{
			number: '03',
			label: 'Diario di campo — Cronache di comunità'
		},
		{
			number: '04',
			label: 'Design System',
			subsections: [
				'Visual Style & Typography',
				'Logotipo primario e secondario',
				'Palette cromatica',
				'Pattern & Illustration Library',
				'Trattamento fotografico'
			]
		},
		{
			number: '05',
			label: 'Applicazioni',
			subsections: [
				'Stationary',
				'Social network',
				'Materiali di presidio',
				'Abbigliamento e accessori'
			]
		}
	]
};
