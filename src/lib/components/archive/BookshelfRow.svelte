<script lang="ts">
	import ArchiveBook from '$lib/components/ui/ArchiveBook.svelte';
	import type { ArchiveEntry } from '$lib/types/archive.types';

	interface Props {
		entries: ArchiveEntry[];
		selectedId?: string | null;
		onselect?: (id: string) => void;
	}

	let { entries, selectedId = null, onselect }: Props = $props();
</script>

<div class="bookshelf-row">
	<div class="bookshelf-row__books">
		{#each entries as entry (entry.id)}
			<ArchiveBook {entry} selected={selectedId === entry.id} {onselect} />
		{/each}
	</div>
	<div class="bookshelf-row__shelf" aria-hidden="true"></div>
</div>
