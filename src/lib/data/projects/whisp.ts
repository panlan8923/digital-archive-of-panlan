import type { ProjectContent } from '$lib/types/project.types';

export const whisp: ProjectContent = {
	slug: 'whisp',
	entryId: '06',
	title: 'Whisp',
	subtitle: 'Urban Focus Space Network',
	authors: 'Anqi Huang / Pan Lan / Wu Yifeng',
	year: '2025/2026',
	introTitle: 'A City-Focused Service Platform for Focus',
	introText:
		'Whisp is a city-focused service platform that evaluates noise, comfort, lighting, and connectivity to recommend better places for focus. In contemporary urban environments, environmental factors continuously affect people’s ability to concentrate—attention has become a scarce resource. Cities offer many places to sit, but few places to focus. Whisp proposes a new way of understanding cities by re-evaluating space across multiple dimensions, from noise level and Wi-Fi quality to seating comfort, power outlets, crowd density, and lighting.',
	coverImage: '/archive/whisp/cover.png',
	pdfUrl: '/archive/whisp.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'symbol-meaning',
			title: 'From Noise to Focus',
			caption:
				'Scattered particles represent distraction and urban noise; the dense center symbolizes calm, clarity, and concentration—a transition from chaos to focus.',
			image: '/archive/whisp/symbol-meaning.png'
		},
		{
			kind: 'image',
			id: 'concept',
			title: 'Concept',
			caption:
				'Whisp re-evaluates urban space across noise, Wi-Fi quality, seating comfort, power outlets, crowd density, stay duration, and lighting.',
			image: '/archive/whisp/concept.png'
		},
		{
			kind: 'image',
			id: 'urban-focus-map',
			title: 'Urban Focus Map',
			caption:
				'A spatial interface mapping city locations by focus suitability—translating environmental data into navigable recommendations.',
			image: '/archive/whisp/urban-focus-map.png'
		},
		{
			kind: 'image',
			id: 'color-palette',
			title: 'Color Palette',
			caption:
				'Brand color system supporting clarity and calm across digital and environmental applications.',
			image: '/archive/whisp/color-palette.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'From Noise to Focus',
			subsections: ['Symbol Meaning', 'Noise, Movement, and Focus']
		},
		{
			number: '02',
			label: 'Symbol Evolution',
			subsections: ['From Hand-Drawn Form to Scalable Identity Mark']
		},
		{
			number: '03',
			label: 'Investigation'
		},
		{
			number: '04',
			label: 'Key Thresholds',
			subsections: ['Noise Level', 'Sleep', 'Sensitive Groups', 'Daily Activities', 'Health']
		},
		{
			number: '05',
			label: 'Concept',
			subsections: [
				'Urban Focus Conditions',
				'Noise Level',
				'Wi-Fi Quality',
				'Seating Comfort',
				'Power Outlets',
				'Crowd Density',
				'Stay Duration',
				'Lighting'
			]
		},
		{
			number: '06',
			label: 'Brand Positioning',
			subsections: ['Noise / Stress / Need']
		},
		{
			number: '07',
			label: 'Typography',
			subsections: ['Times New Roman MT', 'Type System']
		},
		{
			number: '08',
			label: 'Urban Focus Map'
		},
		{
			number: '09',
			label: 'Logo Construction'
		},
		{
			number: '10',
			label: 'Color Palette'
		}
	]
};
