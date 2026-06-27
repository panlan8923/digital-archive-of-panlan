import type { ArchiveEntry, NavItem } from '$lib/types/archive.types';
import { getProjectByEntryId } from '$lib/data/projects';

function parseProjectLine(line: string): Pick<ArchiveEntry, 'title' | 'category' | 'description'> {
	const parts = line.split(/\s+[—–-]\s+/);
	const title = parts[0]?.trim() ?? line;
	const subtitle = parts[1]?.trim();

	if (subtitle) {
		return {
			title,
			category: subtitle,
			description: `${title} — ${subtitle}. Archive documentation forthcoming.`
		};
	}

	return {
		title,
		category: 'Archive Entry',
		description: `${title}. Archive documentation forthcoming.`
	};
}

function createEntry(id: string, line: string, shelf: 1 | 2): ArchiveEntry {
	const parsed = parseProjectLine(line);
	const project = getProjectByEntryId(id);

	if (project) {
		const description =
			project.introText.length > 300
				? project.introText.slice(0, 300).trimEnd() + '…'
				: project.introText;

		return {
			id,
			number: id,
			title: parsed.title,
			category: project.subtitle || parsed.category,
			year: project.year,
			shelf,
			description,
			indexItems: project.toc.slice(0, 3).map((item) => ({
				number: item.number,
				label: item.label
			})),
			image: project.coverImage,
			openUrl: `/projects/${project.slug}`,
			projectSlug: project.slug
		};
	}

	return {
		id,
		number: id,
		title: parsed.title,
		category: parsed.category,
		year: '—',
		shelf,
		description: parsed.description,
		indexItems: [
			{ number: '01', label: 'Overview' },
			{ number: '02', label: 'Documentation' },
			{ number: '03', label: 'Archive' }
		],
		image: '/archive/placeholder.svg',
		openUrl: '#'
	};
}

const projectLines = [
	'ARMA CHRISTI',
	'Nuo Opera — Digital Rebirth of Ritual Theatre',
	'Robot Therapy — Healing Machines',
	'MANU — Invisible Traces',
	'Riottosa — Pratiche sociali e identità collettiva',
	'Whisp',
	'如意的三件小事',
	'興隱',
	'POST-TROFEO',
	"Visionari all'interno — Sagra Musicale Umbra",
	'Mapping the Invisible Crisis — Designing Visual Systems for Water Scarcity',
	'The Third Way',
	'POST–STORY — No More Stories'
];

export const archiveEntries: ArchiveEntry[] = projectLines.map((line, index) => {
	const id = String(index + 1).padStart(2, '0');
	const shelf: 1 | 2 = index < 6 ? 1 : 2;
	return createEntry(id, line, shelf);
});

export const navItems: NavItem[] = [
	{ label: 'ARCHIVE', href: '/', active: true },
	{ label: 'ABOUT', href: '/#about' },
	{ label: 'CONTACT', href: '/#contact' }
];
