import { archiveEntries } from '$lib/data/archive-entries';
import type { ArchiveEntry } from '$lib/types/archive.types';

export function getEntryById(id: string): ArchiveEntry | undefined {
	return archiveEntries.find((entry) => entry.id === id);
}

export function getEntriesByShelf(shelf: 1 | 2): ArchiveEntry[] {
	return archiveEntries.filter((entry) => entry.shelf === shelf);
}
