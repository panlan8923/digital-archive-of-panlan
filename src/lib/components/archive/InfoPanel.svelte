<script lang="ts">
	import IconButton from '$lib/components/ui/IconButton.svelte';

	interface Props {
		id: string;
		label: string;
		eyebrow?: string;
		title: string;
		onclose?: () => void;
		children: import('svelte').Snippet;
	}

	let { id, label, eyebrow = '', title, onclose, children }: Props = $props();
</script>

<aside {id} class="info-panel" aria-label={label}>
	<div class="info-panel__inner">
		<header class="info-panel__header">
			<div class="info-panel__heading">
				{#if eyebrow}
					<p class="info-panel__eyebrow">{eyebrow}</p>
				{/if}
				<h2 class="info-panel__title">{title}</h2>
			</div>
			<IconButton label="Close" onclick={onclose} />
		</header>
		<div class="info-panel__body">
			{@render children()}
		</div>
	</div>
</aside>
