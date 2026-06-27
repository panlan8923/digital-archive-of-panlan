<script lang="ts">
	import type { ArchiveEntry } from '$lib/types/archive.types';

	interface Props {
		entry: ArchiveEntry;
		selected?: boolean;
		onselect?: (id: string) => void;
	}

	let { entry, selected = false, onselect }: Props = $props();
</script>

<div class="archive-book-wrap">
	<button
		type="button"
		class="archive-book"
		class:archive-book--selected={selected}
		aria-pressed={selected}
		aria-label="{entry.number} {entry.title}"
		onclick={() => onselect?.(entry.id)}
	>
		<span class="archive-book__number">{entry.number}</span>
		<span class="archive-book__title">{entry.title}</span>
		<span class="archive-book__meta">{entry.category} / {entry.year}</span>
	</button>
</div>
