<script lang="ts">
	import SiteIdentity from '$lib/components/layout/SiteIdentity.svelte';
	import SiteNav from '$lib/components/layout/SiteNav.svelte';
	import type { SiteView } from '$lib/types/site.types';

	interface Props {
		typewriterActive?: boolean;
		metaVisible?: boolean;
		navVisible?: boolean;
		dividerVisible?: boolean;
		activeView?: SiteView;
		onnavselect?: (view: SiteView) => void;
		navLinkMode?: boolean;
	}

	let {
		typewriterActive = false,
		metaVisible = true,
		navVisible = true,
		dividerVisible = false,
		activeView = 'archive',
		onnavselect,
		navLinkMode = false
	}: Props = $props();
</script>

<header class="site-header">
	<div class="site-header__row">
		<SiteIdentity {typewriterActive} {metaVisible} />
		<SiteNav
			{activeView}
			onselect={onnavselect}
			visible={navVisible}
			linkMode={navLinkMode}
		/>
	</div>
	<div class="archive-index-divider" class:archive-index-divider--visible={dividerVisible}></div>
</header>
