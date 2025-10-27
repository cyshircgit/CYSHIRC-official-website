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

<nav class="sticky top-0 z-50 bg-crimson/95 backdrop-blur-sm border-b border-crimson-dark">
	<div class="max-w-[1440px] mx-auto px-14 max-lg:px-8 max-md:px-6">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<a href="/" class="text-white text-xl font-black uppercase tracking-tight">CYSHIRC.</a>

			<!-- Desktop Navigation -->
			<nav class="desktop-nav max-md:!hidden">
				<a href="/" class="nav-link">首頁</a>
				<a href="/events" class="nav-link">活動資訊</a>
				<a href="/contact" class="nav-link">聯絡資訊</a>
			</nav>

			<!-- Hamburger Button (Mobile) -->
			<button
				onclick={toggleMobileMenu}
				class="md:hidden text-white bg-transparent p-0 border-0 cursor-pointer"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<IconX size={28} stroke={2} />
				{:else}
					<IconMenu2 size={28} stroke={2} />
				{/if}
			</button>

			<!-- CTA Button -->
			<a
				href={isMobile ? '/events' : '/about'}
				class="cta-button max-md:hidden inline-flex items-center gap-2 bg-white text-crimson px-6 py-3 rounded-full font-bold text-sm tracking-wide uppercase transition-all duration-300 border-2 border-white hover:bg-transparent hover:text-white hover:shadow-lg"
			>
				{isMobile ? '活動' : '關於我們'}
				<IconArrowRight size={18} stroke={2.5} class="transition-transform duration-300" />
			</a>
		</div>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<div class="mobile-menu animate-slideDown">
		<nav class="mobile-nav">
			<a href="/" class="mobile-nav-link" onclick={closeMobileMenu}>首頁</a>
			<a href="/about" class="mobile-nav-link" onclick={closeMobileMenu}>關於我們</a>
			<a href="/events" class="mobile-nav-link" onclick={closeMobileMenu}>活動資訊</a>
			<a href="/contact" class="mobile-nav-link" onclick={closeMobileMenu}>聯絡資訊</a>
		</nav>
	</div>
{/if}

{@render children?.()}

<style lang="scss">
	$crimson-primary: #ce1a4b;
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

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 2rem;
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

	.cta-button:hover :global(svg) {
		transform: translateX(4px);
	}

	.mobile-menu {
		position: fixed;
		top: 80px;
		left: 0;
		right: 0;
		background: $crimson-primary;
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
		display: block;
		transition: all 0.2s ease;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			padding-left: 2rem;
		}

		&:last-child {
			border-bottom: none;
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
