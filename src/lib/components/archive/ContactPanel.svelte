<script lang="ts">
	import InfoPanel from '$lib/components/archive/InfoPanel.svelte';
	import { contactIntro, contactLinks, contactName } from '$lib/data/site-content';

	interface Props {
		hidden?: boolean;
		onclose?: () => void;
	}

	let { hidden = false, onclose }: Props = $props();
</script>

<InfoPanel
	id="contact"
	label="Contact"
	eyebrow={contactIntro.eyebrow}
	title={contactIntro.title}
	{hidden}
	{onclose}
>
	<p class="info-panel__name">{contactName}</p>

	<dl class="info-panel__contact-list">
		{#each contactLinks as link (link.label)}
			<div class="info-panel__contact-item">
				<dt class="info-panel__contact-label">{link.label}</dt>
				<dd class="info-panel__contact-value">
					<a
						class="info-panel__contact-link"
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
					>
						{link.value}
					</a>
				</dd>
			</div>
		{/each}
	</dl>
</InfoPanel>
