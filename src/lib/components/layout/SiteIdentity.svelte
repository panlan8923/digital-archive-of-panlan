<script lang="ts">
	const FIRST_LINE = 'PAN LAN';
	const SECOND_LINE = 'DIGITAL ARCHIVE';
	const TYPEWRITER_DURATION_MS = 2000;

	interface Props {
		typewriterActive?: boolean;
		metaVisible?: boolean;
	}

	let { typewriterActive = false, metaVisible = true }: Props = $props();

	let firstLineText = $state('');
	let secondLineText = $state('');
	let activeLine = $state<0 | 1 | 2>(2);

	$effect(() => {
		if (!typewriterActive) {
			firstLineText = FIRST_LINE;
			secondLineText = SECOND_LINE;
			activeLine = 2;
			return;
		}

		firstLineText = '';
		secondLineText = '';
		activeLine = 0;

		const timeouts: ReturnType<typeof setTimeout>[] = [];
		const totalChars = FIRST_LINE.length + SECOND_LINE.length;
		const charDelay = Math.floor(TYPEWRITER_DURATION_MS / totalChars);
		const lineTwoStart = FIRST_LINE.length * charDelay + charDelay;

		for (let index = 1; index <= FIRST_LINE.length; index += 1) {
			timeouts.push(
				setTimeout(() => {
					firstLineText = FIRST_LINE.slice(0, index);
					activeLine = index === FIRST_LINE.length ? 1 : 0;
				}, index * charDelay)
			);
		}

		for (let index = 1; index <= SECOND_LINE.length; index += 1) {
			timeouts.push(
				setTimeout(() => {
					secondLineText = SECOND_LINE.slice(0, index);
					activeLine = index === SECOND_LINE.length ? 2 : 1;
				}, lineTwoStart + index * charDelay)
			);
		}

		return () => {
			for (const timeout of timeouts) clearTimeout(timeout);
		};
	});
</script>

<div class="site-identity">
	<h1 class="site-identity__title" aria-label="PAN LAN DIGITAL ARCHIVE">
		<span class="site-identity__title-line">
			{firstLineText}{#if activeLine === 0}<span class="site-identity__cursor" aria-hidden="true"></span>{/if}
		</span>
		<span class="site-identity__title-line site-identity__title-line--second">
			{secondLineText}{#if activeLine === 1}<span class="site-identity__cursor" aria-hidden="true"></span>{/if}
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
