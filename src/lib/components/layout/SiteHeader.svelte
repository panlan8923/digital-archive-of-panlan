<script lang="ts">
	import SiteIdentity from '$lib/components/layout/SiteIdentity.svelte';
	import SiteNav from '$lib/components/layout/SiteNav.svelte';

	interface Props {
		titleVisible?: boolean;
		metaVisible?: boolean;
		navVisible?: boolean;
		dividerVisible?: boolean;
	}

	let {
		titleVisible = true,
		metaVisible = true,
		navVisible = true,
		dividerVisible = false
	}: Props = $props();
</script>

<header class="site-header">
	<div class="site-header__row">
		<SiteIdentity {titleVisible} {metaVisible} />
		<SiteNav visible={navVisible} />
	</div>
	<div class="archive-index-divider" class:archive-index-divider--visible={dividerVisible}></div>
</header>
