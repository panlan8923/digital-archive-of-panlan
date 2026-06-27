<script lang="ts">
	import BookshelfRow from '$lib/components/archive/BookshelfRow.svelte';
	import { getEntriesByShelf } from '$lib/utils/archive';

	interface Props {
		selectedId?: string | null;
		onselect?: (id: string) => void;
	}

	let { selectedId = null, onselect }: Props = $props();

	const shelfOne = getEntriesByShelf(1);
	const shelfTwo = getEntriesByShelf(2);
</script>

<section class="archive-gallery" aria-label="Archive gallery">
	<BookshelfRow entries={shelfOne} {selectedId} {onselect} />
	<BookshelfRow entries={shelfTwo} {selectedId} {onselect} />
</section>
