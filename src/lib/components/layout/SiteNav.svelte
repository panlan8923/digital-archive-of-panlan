<script lang="ts">
	import { navItems } from '$lib/data/archive-entries';

	interface Props {
		visible?: boolean;
	}

	let { visible = true }: Props = $props();
</script>

<nav class="site-nav" class:site-nav--pending={!visible} aria-label="Site">
	{#each navItems as item (item.label)}
		<button type="button" class="site-nav__link" class:site-nav__link--active={item.active}>
			{item.label}
		</button>
	{/each}
	<button type="button" class="site-nav__info" aria-label="Information">i</button>
</nav>
