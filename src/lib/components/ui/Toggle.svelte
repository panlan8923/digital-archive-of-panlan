<script lang="ts">
	interface Props {
		enabled: boolean;
		onchange?: (enabled: boolean) => void;
	}

	let { enabled = $bindable(true), onchange }: Props = $props();

	function setEnabled(value: boolean) {
		enabled = value;
		onchange?.(value);
	}
</script>

<div class="ui-toggle" role="group" aria-label="Sound">
	<button
		type="button"
		class="ui-toggle__option"
		class:ui-toggle__option--active={enabled}
		onclick={() => setEnabled(true)}
	>
		On
	</button>
	<span class="ui-toggle__divider" aria-hidden="true">|</span>
	<button
		type="button"
		class="ui-toggle__option"
		class:ui-toggle__option--active={!enabled}
		onclick={() => setEnabled(false)}
	>
		Off
	</button>
</div>
