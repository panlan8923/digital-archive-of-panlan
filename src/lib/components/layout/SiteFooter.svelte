<script lang="ts">
	import Toggle from '$lib/components/ui/Toggle.svelte';

	interface Props {
		soundEnabled?: boolean;
		visible?: boolean;
	}

	let { soundEnabled = $bindable(true), visible = true }: Props = $props();
</script>

<footer class="site-footer" class:site-footer--pending={!visible}>
	<p class="site-footer__copyright">© 2025 PAN LAN. All rights reserved.</p>
	<div class="site-footer__sound">
		<span class="site-footer__sound-label">Sound</span>
		<Toggle bind:enabled={soundEnabled} />
	</div>
</footer>
