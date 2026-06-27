<script lang="ts">
	interface Props {
		label: string;
		onclick?: () => void;
	}

	let { label, onclick }: Props = $props();
</script>

<button type="button" class="ui-icon-button" {onclick} aria-label={label}> × </button>
