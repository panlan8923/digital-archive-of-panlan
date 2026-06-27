<script lang="ts">
	import type { ArchiveEntry } from '$lib/types/archive.types';

	interface Props {
		entry: ArchiveEntry;
		selected?: boolean;
		revealed?: boolean;
		onselect?: (id: string) => void;
	}

	let { entry, selected = false, revealed = true, onselect }: Props = $props();
</script>

<div
	class="archive-book-wrap"
	class:archive-book-wrap--pending={!revealed}
	class:archive-book-wrap--selected={selected}
>
	<button
		type="button"
		class="archive-book"
		class:archive-book--selected={selected}
		aria-pressed={selected}
		aria-label="{entry.number} {entry.title}"
		tabindex={revealed ? 0 : -1}
		onclick={() => onselect?.(entry.id)}
	>
		<span class="archive-book__number archive-entry-number">{entry.number}</span>
		<span class="archive-book__title">{entry.title}</span>
		<span class="archive-book__meta">
			{entry.year ? `${entry.category} / ${entry.year}` : entry.category}
		</span>
	</button>
</div>
