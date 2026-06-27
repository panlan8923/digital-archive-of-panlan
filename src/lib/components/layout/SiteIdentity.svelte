<script lang="ts">
	interface Props {
		titleVisible?: boolean;
		metaVisible?: boolean;
	}

	let { titleVisible = true, metaVisible = true }: Props = $props();
</script>

<div class="site-identity">
	<h1 class="site-identity__title">
		<span
			class="site-identity__title-line"
			class:site-identity__title-line--pending={!titleVisible}
		>
			PAN LAN
		</span>
		<span
			class="site-identity__title-line"
			class:site-identity__title-line--pending={!titleVisible}
		>
			DIGITAL ARCHIVE
		</span>
	</h1>
	<p
		class="site-identity__subtitle"
		class:site-identity__subtitle--pending={!metaVisible}
	>
		Research / Design / Experiment
	</p>
	<p class="site-identity__hint" class:site-identity__hint--pending={!metaVisible}>
		Select an item to explore.
	</p>
</div>
