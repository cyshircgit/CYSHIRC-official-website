<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { MenuItem } from '$lib/config/navigation';
	export let isMenuOpen = false;
	export let menuItems: MenuItem[] = [];

	const dispatch = createEventDispatcher<{
		close: null;
	}>();

	function handleMenuClick() {
		dispatch('close');
	}
</script>

<ul
	id="mobile-menu"
	class="mobile-menu"
	class:menu-open={isMenuOpen}
	role="navigation"
	aria-label="Mobile menu"
>
	{#each menuItems as item}
		<li><a href={item.href} on:click={handleMenuClick}>{item.text}</a></li>
	{/each}
	{#if menuItems.length === 0}
		<li>目前沒有導覽項目</li>
	{/if}
</ul>

<style lang="scss">
	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: var(--bg-color);
		box-shadow: 0 4px 12px var(--shadow-dark);
		list-style: none;
		margin: 0;
		padding: 0.5rem 0;
		z-index: 999;

		@media (min-width: 1710px) {
			display: none !important;
		}

		&.menu-open {
			display: block;
		}

		li {
			padding: 0;

			a {
				display: block;
				padding: 1rem 2rem;
				text-decoration: none;
				color: var(--text-color);
				font-weight: 500;
				transition: background-color 0.2s ease;

				&:hover,
				&:focus {
					background-color: var(--shadow-light);
					color: var(--color-primary);
					outline: none;
				}
			}
		}
	}
</style>
