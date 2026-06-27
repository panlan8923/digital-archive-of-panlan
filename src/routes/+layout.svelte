<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>PAN LAN — DIGITAL ARCHIVE</title>
	<meta name="description" content="A continuously updated personal research archive." />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
