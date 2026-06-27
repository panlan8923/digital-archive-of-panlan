<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import IconButton from '$lib/components/ui/IconButton.svelte';
	import { getProjectByEntryId } from '$lib/data/projects';
	import { resolvePath } from '$lib/utils/path';
	import type { ArchiveEntry } from '$lib/types/archive.types';

	interface Props {
		entry: ArchiveEntry;
		onclose?: () => void;
	}

	let { entry, onclose }: Props = $props();

	const project = $derived(entry.projectSlug ? getProjectByEntryId(entry.id) : undefined);
</script>

<aside id="detail-panel" class="detail-panel" aria-label="Entry details">
	<div class="detail-panel__inner">
		<div class="detail-panel__meta">
			<IconButton label="Close" onclick={onclose} />
			<span class="detail-panel__number archive-entry-number">{entry.number}</span>
			<h2 class="detail-panel__title">{entry.title}</h2>
			<p class="detail-panel__category">
				{entry.year ? `${entry.category} / ${entry.year}` : entry.category}
			</p>
		</div>

		<div class="detail-panel__body">
			<p class="detail-panel__description">{entry.description}</p>
			<div class="detail-panel__actions">
				{#if entry.openUrl !== '#'}
					<Button label="OPEN" arrow href={entry.openUrl} />
				{:else}
					<Button label="OPEN" arrow onclick={() => {}} />
				{/if}
				{#if project?.pdfUrl}
					<Button label="PDF" href={project.pdfUrl} download />
				{/if}
			</div>
		</div>

		<div class="detail-panel__index">
			{#each entry.indexItems as item (item.number)}
				<div class="detail-panel__index-item">
					<span class="detail-panel__index-number">{item.number}</span>
					<span>{item.label}</span>
				</div>
			{/each}
		</div>

		<div class="detail-panel__media">
			<img class="detail-panel__image" src={resolvePath(entry.image)} alt="" />
		</div>
	</div>
</aside>
