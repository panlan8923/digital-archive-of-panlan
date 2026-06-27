<script lang="ts">
	import { browser } from '$app/environment';
	import ArchiveGallery from '$lib/components/archive/ArchiveGallery.svelte';
	import ArchiveIndexStatus from '$lib/components/archive/ArchiveIndexStatus.svelte';
	import DetailPanel from '$lib/components/archive/DetailPanel.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import { archiveEntryCount, getEntryById } from '$lib/utils/archive';
	import { onMount, tick } from 'svelte';

	const PHASE_MS = 2000;
	const TOTAL_MS = 4000;
	const DIVIDER_START_MS = 1500;
	const BOOKS_START_MS = PHASE_MS;
	const BOOK_STAGGER_MS = Math.floor(PHASE_MS / archiveEntryCount);
	const STATUS_COMPLETE_MS = TOTAL_MS - 200;
	const UNLOCK_MS = TOTAL_MS;
	const STATUS_HIDE_MS = TOTAL_MS + 400;

	function shouldPlayIndexSequence(): boolean {
		if (!browser) return false;
		return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	function createIndexState() {
		const play = shouldPlayIndexSequence();

		return {
			play,
			isIndexing: play,
			plainBackground: play,
			typewriterActive: play,
			dividerVisible: false,
			metaVisible: !play,
			navVisible: !play,
			footerVisible: !play,
			revealedCount: play ? 0 : archiveEntryCount,
			statusVisible: play,
			statusComplete: false
		};
	}

	const initialIndexState = createIndexState();

	let selectedId = $state<string | null>(null);
	let soundEnabled = $state(true);

	let isIndexing = $state(initialIndexState.isIndexing);
	let plainBackground = $state(initialIndexState.plainBackground);
	let typewriterActive = $state(initialIndexState.typewriterActive);
	let dividerVisible = $state(initialIndexState.dividerVisible);
	let metaVisible = $state(initialIndexState.metaVisible);
	let navVisible = $state(initialIndexState.navVisible);
	let footerVisible = $state(initialIndexState.footerVisible);
	let revealedCount = $state(initialIndexState.revealedCount);
	let statusVisible = $state(initialIndexState.statusVisible);
	let statusComplete = $state(initialIndexState.statusComplete);

	const selectedEntry = $derived(selectedId ? getEntryById(selectedId) : undefined);

	function handleSelect(id: string) {
		if (isIndexing) return;
		selectedId = selectedId === id ? null : id;
	}

	function handleClose() {
		selectedId = null;
	}

	onMount(() => {
		if (!initialIndexState.play) return;

		const timeouts: ReturnType<typeof setTimeout>[] = [];
		const schedule = (delay: number, fn: () => void) => {
			timeouts.push(setTimeout(fn, delay));
		};

		schedule(DIVIDER_START_MS, () => {
			dividerVisible = true;
		});

		for (let index = 1; index <= archiveEntryCount; index += 1) {
			schedule(BOOKS_START_MS + (index - 1) * BOOK_STAGGER_MS, () => {
				revealedCount = index;
			});
		}

		schedule(STATUS_COMPLETE_MS, () => {
			statusComplete = true;
		});

		schedule(UNLOCK_MS, () => {
			plainBackground = false;
			metaVisible = true;
			navVisible = true;
			footerVisible = true;
			isIndexing = false;
		});

		schedule(STATUS_HIDE_MS, () => {
			statusVisible = false;
		});

		return () => {
			for (const timeout of timeouts) clearTimeout(timeout);
		};
	});

	$effect(() => {
		if (!selectedId || isIndexing) return;

		tick().then(() => {
			const panel = document.getElementById('detail-panel');
			if (!panel) return;

			const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			panel.scrollIntoView({
				behavior: reducedMotion ? 'instant' : 'smooth',
				block: 'start'
			});
		});
	});
</script>

<div
	class="gallery-page"
	class:gallery-page--plain={plainBackground}
	class:gallery-page--indexing={isIndexing}
>
	<div class="gallery-page__main">
		<SiteHeader {typewriterActive} {metaVisible} {navVisible} {dividerVisible} />

		<div class="gallery-page__gallery">
			<ArchiveGallery {selectedId} {revealedCount} onselect={handleSelect} />
		</div>
	</div>

	{#if selectedEntry && !isIndexing}
		<DetailPanel entry={selectedEntry} onclose={handleClose} />
	{/if}

	<SiteFooter bind:soundEnabled visible={footerVisible} />

	<ArchiveIndexStatus
		visible={statusVisible}
		count={revealedCount}
		total={archiveEntryCount}
		complete={statusComplete}
	/>
</div>
