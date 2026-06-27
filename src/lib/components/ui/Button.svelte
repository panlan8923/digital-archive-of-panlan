<script lang="ts">
	interface Props {
		label: string;
		arrow?: boolean;
		href?: string;
		download?: boolean;
		onclick?: () => void;
	}

	let { label, arrow = false, href, download = false, onclick }: Props = $props();
</script>

{#if href}
	<a
		class="ui-button"
		{href}
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
