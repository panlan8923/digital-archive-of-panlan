<script lang="ts">
	import { resolvePath } from '$lib/utils/path';
	import type { SiteView } from '$lib/types/site.types';

	const navItems: { label: string; view: SiteView }[] = [
		{ label: 'ARCHIVE', view: 'archive' },
		{ label: 'ABOUT', view: 'about' },
		{ label: 'CONTACT', view: 'contact' }
	];

	interface Props {
		activeView?: SiteView | null;
		onselect?: (view: SiteView) => void;
		visible?: boolean;
		linkMode?: boolean;
	}

	let {
		activeView = 'archive',
		onselect,
		visible = true,
		linkMode = false
	}: Props = $props();

	function hrefFor(view: SiteView): string {
		if (view === 'archive') return resolvePath('/');
		return resolvePath(`/#${view}`);
	}
</script>

<nav class="site-nav" class:site-nav--pending={!visible} aria-label="Site">
	{#each navItems as item (item.label)}
		{#if linkMode}
			<a class="site-nav__link" href={hrefFor(item.view)}>
				{item.label}
			</a>
		{:else}
			<button
				type="button"
				class="site-nav__link"
				class:site-nav__link--active={activeView === item.view}
				onclick={() => onselect?.(item.view)}
			>
				{item.label}
			</button>
		{/if}
	{/each}
</nav>
