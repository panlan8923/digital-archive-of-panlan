<script lang="ts">
	import ArchiveBook from '$lib/components/ui/ArchiveBook.svelte';
	import type { ArchiveEntry } from '$lib/types/archive.types';

	interface Props {
		entries: ArchiveEntry[];
		selectedId?: string | null;
		revealedCount?: number;
		onselect?: (id: string) => void;
	}

	let { entries, selectedId = null, revealedCount = 13, onselect }: Props = $props();

	function isRevealed(entry: ArchiveEntry): boolean {
		return Number(entry.number) <= revealedCount;
	}
</script>

<div class="bookshelf-row">
	<div class="bookshelf-row__books">
		{#each entries as entry (entry.id)}
			<ArchiveBook
				{entry}
				selected={selectedId === entry.id}
				revealed={isRevealed(entry)}
				{onselect}
			/>
		{/each}
	</div>
	<div class="bookshelf-row__shelf" aria-hidden="true"></div>
</div>
