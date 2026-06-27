<script lang="ts">
	import { navItems } from '$lib/data/archive-entries';
</script>

<nav class="site-nav" aria-label="Site">
	{#each navItems as item (item.label)}
		<button type="button" class="site-nav__link" class:site-nav__link--active={item.active}>
			{item.label}
		</button>
	{/each}
	<button type="button" class="site-nav__info" aria-label="Information">i</button>
</nav>
