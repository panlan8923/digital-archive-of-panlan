<script lang="ts">
	interface Props {
		visible?: boolean;
		count?: number;
		total?: number;
		complete?: boolean;
	}

	let { visible = false, count = 0, total = 13, complete = false }: Props = $props();

	const countLabel = $derived(String(count).padStart(2, '0'));
	const totalLabel = $derived(String(total).padStart(2, '0'));
</script>

<div class="archive-index-status" class:archive-index-status--visible={visible} aria-hidden="true">
	<p class="archive-index-status__label">
		{complete ? 'INDEX COMPLETE' : 'INDEXING ARCHIVE'}
	</p>
	<p class="archive-index-status__count">{countLabel} / {totalLabel}</p>
</div>
