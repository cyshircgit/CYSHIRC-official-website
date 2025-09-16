<script lang="ts">
	import { menuItems } from '$lib/config/navigation';
	import MobileMenu from './MobileMenu.svelte';
	import DarkModeToggle from './DarkModeToggle.svelte';

	let isMenuOpen = false;

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<nav aria-label="Main navigation" class="nav-container">
	<a href="/" class="logo">CYSHIRC official website</a>

	<ul class="desktop-menu" role="navigation" aria-label="Main menu">
		{#each menuItems as item}
			<li><a href={item.href}>{item.text}</a></li>
		{/each}
	</ul>

	<div class="controls">
		<button
			class="hamburger"
			aria-expanded={isMenuOpen}
			aria-controls="mobile-menu"
			aria-label="主選單"
			on:click={() => (isMenuOpen = !isMenuOpen)}
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
		<DarkModeToggle />
	</div>

	<MobileMenu {isMenuOpen} {menuItems} on:close={closeMenu} />
</nav>

<style lang="scss">
	.nav-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: var(--bg-color);
		border-bottom: 1px solid var(--border-gray);
		position: relative;
		z-index: 1000;

		@media (max-width: 480px) {
			padding: 0.75rem 1rem;
		}

		@media (min-width: 1710px) {
			padding: 1rem 3rem;
		}
	}

	.logo {
		font-weight: 700;
		font-size: 1.5rem;
		color: var(--text-color);
		text-decoration: none;
		transition: color 0.3s ease;

		&:hover,
		&:focus {
			color: var(--color-primary);
			outline: none;
		}

		@media (max-width: 480px) {
			font-size: 1.2rem;
		}
	}

	.desktop-menu {
		display: none;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;

		@media (min-width: 768px) {
			display: flex;
			gap: 1.5rem;
		}

		@media (min-width: 1710px) {
			display: flex;
			gap: 2.5rem;
		}

		li a {
			color: var(--text-color);
			text-decoration: none;
			padding: 0.5rem 1rem;
			border-radius: 6px;
			transition: all 0.2s ease;
			font-weight: 500;

			&:hover,
			&:focus {
				background-color: var(--shadow-light);
				color: var(--color-primary);
				outline: none;
			}
		}
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.hamburger {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 44px;
		height: 44px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 8px;
		border-radius: 6px;
		gap: 4px;

		@media (min-width: 1710px) {
			display: none;
		}

		&:hover,
		&:focus {
			background-color: var(--shadow-light);
			outline: none;
		}

		.bar {
			width: 100%;
			height: 3px;
			background-color: var(--text-color);
			border-radius: 2px;
			transition: all 0.3s ease;

			&:nth-child(2) {
				width: 80%;
				margin-left: auto;
			}

			&:nth-child(3) {
				width: 60%;
				margin-left: auto;
			}
		}
	}
</style>
