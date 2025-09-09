<script lang="ts">
	import '../app.scss';
	import favicon from '$lib/assets/favicon.svg';
	import NotByAIBadgewhite from '$lib/assets/Assisted-By-Humans-Not-By-AI-Badge-white.svg?url';
	import { menuItems } from '$lib/config/navigation';

	let isMenuOpen = false;

	function closeMenu() {
		isMenuOpen = false;
	}

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && isMenuOpen) {
			closeMenu();
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<svelte:window on:keydown={handleKeydown} />

<nav aria-label="Main navigation">
	<a href="/" class="logo font:8x">CYSHIRC official website</a>

	<ul class="desktop-menu" role="navigation" aria-label="Main menu">
		{#if menuItems && menuItems.length > 0}
			{#each menuItems as item}
				<li><a href={item.href} on:click={closeMenu}>{item.text}</a></li>
			{/each}
		{/if}
	</ul>

	<button
		class="hamburger"
		on:click={toggleMenu}
		aria-expanded={isMenuOpen}
		aria-controls="mobile-menu"
		aria-label="主選單"
	>
		<span></span>
		<span></span>
		<span></span>
	</button>

	<ul
		id="mobile-menu"
		class="mobile-menu"
		class:menu-open={isMenuOpen}
		role="navigation"
		aria-label="Mobile menu"
	>
		{#if menuItems && menuItems.length > 0}
			{#each menuItems as item}
				<li><a href={item.href} on:click={closeMenu}>{item.text}</a></li>
			{/each}
		{:else}
			<li>目前沒有導覽項目</li>
		{/if}
	</ul>
</nav>

<div class="py:10x">
	<slot />
</div>
<footer>
	<p>Built with ❤️ by CYSHIRC members x tonicatOWO</p>
	<img
		src={NotByAIBadgewhite}
		alt="CYSHIRC - Assisted by Humans, Not by AI certification badge"
		width="100"
		height="35"
	/>
</footer>

<style scoped lang="scss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		position: relative;

		.logo {
			text-decoration: none;
			font-weight: bold;
			color: inherit;
		}
	}

	// Desktop menu - visible on larger screens
	.desktop-menu {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 2rem;

		li a {
			text-decoration: none;
			color: inherit;
			padding: 0.5rem 1rem;
			border-radius: 4px;
			transition: background-color 0.2s;

			&:hover {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: space-around;
		width: 30px;
		height: 25px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;

		span {
			display: block;
			height: 3px;
			background-color: currentColor;
			transition: all 0.3s ease;
			border-radius: 2px;

			&:nth-child(1) {
				width: 100%;
			}
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

	// Mobile menu - hidden by default
	.mobile-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background: var(--bg-color, white);
		color: var(--text-color, inherit);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		list-style: none;
		margin: 0;
		padding: 1rem 0;
		z-index: 1000;

		li {
			padding: 0;

			a {
				display: block;
				padding: 1rem 2rem;
				text-decoration: none;
				color: inherit;
				border-bottom: 1px solid rgba(0, 0, 0, 0.1);

				&:hover {
					background-color: rgba(0, 0, 0, 0.05);
				}
			}
		}

		&.menu-open {
			display: block;
		}
	}

	/* Mobile breakpoint (max-width: 767px) */
	@media (max-width: 767px) {
		.desktop-menu {
			display: none;
		}
		.hamburger {
			display: flex;
		}
	}

	/* Tablet breakpoint (768px - 1023px) */
	@media (max-width: 1023px) and (min-width: 768px) {
		.desktop-menu {
			gap: 1rem;
			li:nth-child(n + 3) {
				display: none;
			}
		}
		.hamburger {
			display: flex;
		}
		.mobile-menu {
			li:nth-child(-n + 2) {
				display: none;
			}
		}
	}

	/* Large desktop (1024px+) */
	@media (min-width: 1024px) {
		.desktop-menu {
			li:nth-child(n + 5) {
				display: none;
			}
		}
		.hamburger {
			display: flex;
		}
		.mobile-menu {
			li:nth-child(-n + 4) {
				display: none;
			}
		}
	}

	@media (min-width: 1024px) {
		nav:has(.desktop-menu li:nth-child(-n + 4):last-child) .hamburger {
			display: none;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		nav:has(.desktop-menu li:nth-child(-n + 2):last-child) .hamburger {
			display: none;
		}
	}
	footer {
		margin-top: auto;
		padding: 2rem 1rem 1rem;
		text-align: center;
		border-top: 1px solid rgba(0, 0, 0, 0.1);

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;

		p {
			margin: 0;
		}
		img {
			opacity: 0.8;
			transition: opacity 0.2s;
			&:hover {
				opacity: 1;
			}
		}
	}
</style>
