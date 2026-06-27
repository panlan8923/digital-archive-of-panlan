<script lang="ts">
	import { resolvePath } from '$lib/utils/path';

	interface Props {
		label: string;
		arrow?: boolean;
		href?: string;
		download?: boolean;
		onclick?: () => void;
	}

	let { label, arrow = false, href, download = false, onclick }: Props = $props();

	const resolvedHref = $derived(href ? resolvePath(href) : undefined);
</script>

{#if resolvedHref}
	<a
		class="ui-button"
		href={resolvedHref}
		download={download ? '' : undefined}
		target={download ? undefined : undefined}
		rel={download ? undefined : undefined}
	>
		{label}
		{#if arrow}
			<span class="ui-button__arrow" aria-hidden="true">→</span>
		{/if}
	</a>
{:else}
	<button type="button" class="ui-button" {onclick}>
		{label}
		{#if arrow}
			<span class="ui-button__arrow" aria-hidden="true">→</span>
		{/if}
	</button>
{/if}
