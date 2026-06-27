<script lang="ts">
	import ArchiveGallery from '$lib/components/archive/ArchiveGallery.svelte';
	import DetailPanel from '$lib/components/archive/DetailPanel.svelte';
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte';
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte';
	import { getEntryById } from '$lib/utils/archive';
	import { tick } from 'svelte';

	let selectedId = $state<string | null>(null);
	let soundEnabled = $state(true);

	const selectedEntry = $derived(selectedId ? getEntryById(selectedId) : undefined);

	function handleSelect(id: string) {
		selectedId = selectedId === id ? null : id;
	}

	function handleClose() {
		selectedId = null;
	}

	$effect(() => {
		if (!selectedId) return;

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

<div class="gallery-page">
	<div class="gallery-page__main">
		<SiteHeader />

		<div class="gallery-page__gallery">
			<ArchiveGallery {selectedId} onselect={handleSelect} />
		</div>
	</div>

	{#if selectedEntry}
		<DetailPanel entry={selectedEntry} onclose={handleClose} />
	{/if}

	<SiteFooter bind:soundEnabled />
</div>
