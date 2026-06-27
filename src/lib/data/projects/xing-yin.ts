import type { ProjectContent } from '$lib/types/project.types';

export const xingYin: ProjectContent = {
	slug: 'xing-yin',
	entryId: '08',
	title: '興隱',
	subtitle: '宋式雅境 · 都市归隐',
	authors: 'Pan Lan',
	year: '2025',
	introTitle: 'XING YIN — Song-style Elegance, Urban Seclusion',
	introText:
		'興隱 is a multi-form brand identity rooted in Song-dynasty aesthetics and contemporary urban life. WHO: the high-pressure, clear-minded city dweller. WHAT: restrained abundance—a dockable realm of elegance. HOW: neither faux-antique, nor trend-chasing, nor over-Orientalist. The brand seeks to give urban life a place to step half a pace back—「让城市生活，有一个可以退半步的地方。」',
	coverImage: '/archive/xing-yin/cover.png',
	pdfUrl: '/archive/xing-yin.pdf',
	highlights: [
		{
			kind: 'image',
			id: 'solid',
			title: 'SOLID Principles',
			caption:
				'Brand foundation: WHO the audience is, WHAT the experience offers, and HOW the visual language stays restrained and authentic.',
			image: '/archive/xing-yin/page-02.png'
		},
		{
			kind: 'image',
			id: 'logo-master',
			title: 'Logo Master Forms',
			caption:
				'Nine master motifs drawn from Song-era vessels and objects—scrolls, vases, gourds, bowls, and ritual forms.',
			image: '/archive/xing-yin/page-08.png'
		},
		{
			kind: 'image',
			id: 'logo-system',
			title: 'Logo System',
			caption:
				'Multi-form logo variations combining calligraphic wordmark, seal, and object icons across a muted Song-inspired palette.',
			image: '/archive/xing-yin/page-12.png'
		},
		{
			kind: 'image',
			id: 'locality',
			title: 'Localized Logo Forms',
			caption:
				'City-specific auxiliary graphics for Chengdu, Shanghai, and Shenzhen—merging regional character with the 興隱 identity.',
			image: '/archive/xing-yin/page-19.png'
		}
	],
	toc: [
		{
			number: '01',
			label: 'Multi-form LOGO Overview',
			subsections: ['宋式雅境 · 都市归隐', 'Brand Concept']
		},
		{
			number: '02',
			label: 'SOLID Principles',
			subsections: ['WHO — Target Audience', 'WHAT — Brand Promise', 'HOW — Visual Approach']
		},
		{
			number: '03',
			label: 'Optional Elements',
			subsections: ['Tang Dynasty', 'Song Dynasty', 'Late Qing Dynasty']
		},
		{
			number: '04',
			label: 'Brand Element System',
			subsections: ['宋', '兰', '库', 'Color & Material Palette']
		},
		{
			number: '05',
			label: 'Logo Master Forms & Design'
		},
		{
			number: '06',
			label: 'Logo Specifications',
			subsections: ['Size Standards', 'Color Specification', 'Seal Application']
		},
		{
			number: '07',
			label: 'Multi-form Logo Locality',
			subsections: ['Chengdu', 'Shanghai', 'Shenzhen']
		},
		{
			number: '08',
			label: 'Brand Application'
		}
	]
};
