<script lang="ts">
	import InfoPanel from '$lib/components/archive/InfoPanel.svelte';
	import { aboutIntro, aboutSections } from '$lib/data/site-content';

	interface Props {
		hidden?: boolean;
		onclose?: () => void;
	}

	let { hidden = false, onclose }: Props = $props();
</script>

<InfoPanel id="about" label="About" title={aboutIntro.title} {hidden} {onclose}>
	<p class="info-panel__span">{aboutIntro.span}</p>

	{#each aboutSections as section (section.number)}
		<section class="info-panel__section">
			<h3 class="info-panel__section-title">
				<span class="info-panel__section-number">{section.number}</span>
				{section.title}
			</h3>
			{#each section.paragraphs as paragraph, index (index)}
				<p class="info-panel__text">{paragraph}</p>
			{/each}
			{#if section.items?.length}
				<ul class="info-panel__list">
					{#each section.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		</section>
	{/each}
</InfoPanel>
