<script lang="ts">
	import '../app.css';
	import { IconArrowRight, IconMenu2, IconX } from '@tabler/icons-svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	let isMobile = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	$effect(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="navbar">
	<div class="navbar-container">
		<div class="navbar-content">
			<a href="/" class="navbar-logo">CYSHIRC.</a>

			<nav class="desktop-nav">
				<a href="/" class="nav-link">首頁</a>
				<a href="/events" class="nav-link">活動資訊</a>
				<a href="/contact" class="nav-link">聯絡資訊</a>
			</nav>

			<div class="mobile-nav-toggle">
				<button
					onclick={toggleMobileMenu}
					class="menu-button"
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<IconX size={28} stroke={2} />
					{:else}
						<IconMenu2 size={28} stroke={2} />
					{/if}
				</button>

				<a href="/events" class="cta-button mobile-cta">
					活動資訊
					<IconArrowRight size={18} stroke={2.5} />
				</a>
			</div>

			<a href="/about" class="cta-button desktop-cta">
				關於我們
				<IconArrowRight size={18} stroke={2.5} />
			</a>
		</div>
	</div>
</nav>

{#if mobileMenuOpen}
	<div class="mobile-menu animate-slideDown">
		<nav class="mobile-nav">
			<a href="/" class="mobile-nav-link" onclick={closeMobileMenu}>
				<span>首頁</span>
				<IconArrowRight size={20} stroke={2.5} />
			</a>
			<a href="/about" class="mobile-nav-link" onclick={closeMobileMenu}>
				<span>關於我們</span>
				<IconArrowRight size={20} stroke={2.5} />
			</a>
			<a href="/contact" class="mobile-nav-link" onclick={closeMobileMenu}>
				<span>聯絡資訊</span>
				<IconArrowRight size={20} stroke={2.5} />
			</a>
		</nav>
	</div>
{/if}

{@render children?.()}

<style lang="scss">
	@use '$lib/styles/theme' as theme;
	$white: #ffffff;

	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: #1d1f25;
		color: #e5e7eb;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: 900;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}

	:global(a) {
		text-decoration: none;
	}

	.navbar {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(theme.$crimson-primary, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid theme.$crimson-dark;
	}

	.navbar-container {
		max-width: 1440px;
		margin: 0 auto;
		padding: 0 3.5rem;

		@media (max-width: 1024px) {
			padding: 0 2rem;
		}

		@media (max-width: 768px) {
			padding: 0 1.5rem;
		}
	}

	.navbar-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
	}

	.navbar-logo {
		color: $white;
		font-size: 1.25rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.02em;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 2rem;

		@media (max-width: 768px) {
			display: none;
		}
	}

	.mobile-nav-toggle {
		display: none;
		align-items: center;
		gap: 0.75rem;

		@media (max-width: 768px) {
			display: flex;
		}
	}

	.menu-button {
		color: $white;
		background: transparent;
		padding: 0;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cta-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: $white;
		color: theme.$crimson-primary;
		padding: 0.75rem 1.5rem;
		border-radius: 100px;
		font-weight: 700;
		font-size: 0.875rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		transition: all 0.3s theme.$transition-smooth;
		border: 2px solid $white;

		&:hover {
			background: transparent;
			color: $white;
			box-shadow: 0 8px 24px rgba($white, 0.2);

			:global(svg) {
				transform: translateX(4px);
			}
		}

		:global(svg) {
			transition: transform 0.3s theme.$transition-smooth;
		}

		&.mobile-cta {
			padding: 0.625rem 1.25rem;
			font-size: 0.75rem;
		}

		&.desktop-cta {
			@media (max-width: 768px) {
				display: none;
			}
		}
	}

	.nav-link {
		color: $white;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.9375rem;
		letter-spacing: -0.01em;
		padding: 0.5rem 0;
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		position: relative;
		transition: all 0.2s ease;
		opacity: 0.95;

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 2px;
			background: $white;
			transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		}

		&:hover {
			opacity: 1;

			&::before {
				width: 100%;
			}
		}
	}

	:global(.container) {
		@include theme.container;
	}

	:global(.section-label) {
		@include theme.section-label;
	}

	:global(.section-title) {
		@include theme.section-title();
	}

	:global(.highlight) {
		@include theme.highlight;
	}

	:global(.btn-primary) {
		@include theme.btn-primary;
	}

	:global(.btn-secondary) {
		@include theme.btn-secondary;
	}

	.mobile-menu {
		position: fixed;
		top: 80px;
		left: 0;
		right: 0;
		background: theme.$crimson-primary;
		border-bottom: 1px solid rgba(160, 21, 56, 1);
		z-index: 40;
		padding: 1rem 0;
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.mobile-nav-link {
		color: $white;
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		padding: 1rem 1.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all 0.2s ease;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			padding-left: 2rem;

			:global(svg) {
				transform: translateX(4px);
			}
		}

		&:last-child {
			border-bottom: none;
		}

		:global(svg) {
			transition: transform 0.3s ease;
			flex-shrink: 0;
		}
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-slideDown {
		animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
