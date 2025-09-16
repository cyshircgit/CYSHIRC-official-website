<script lang="ts">
	import { darkmode } from '$lib/stores/theme';
	import { IconMoon, IconSun } from '@tabler/icons-svelte';

	function handleToggle() {
		darkmode.toggle();
	}
</script>

<button
	class="darkmode-toggle"
	aria-label={$darkmode ? '切換至淺色模式' : '切換至深色模式'}
	on:click={handleToggle}
>
	<span class="debug-info">
		{$darkmode ? 'DARK' : 'LIGHT'}
	</span>

	{#if $darkmode}
		<IconMoon size={20} />
	{:else}
		<IconSun size={20} />
	{/if}
</button>

<style lang="scss">
	.darkmode-toggle {
		background: none;
		border: 2px solid var(--color-primary);
		cursor: pointer;
		width: 60px;
		height: 44px;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary);
		transition: all 0.2s ease;
		position: relative;

		.debug-info {
			position: absolute;
			top: -20px;
			font-size: 10px;
			color: var(--text-color);
		}
	}
</style>
