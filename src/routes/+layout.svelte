<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import NotByAIBadgewhite from '$lib/assets/Assisted-By-Humans-Not-By-AI-Badge-white.svg?url';

	let { children } = $props();
	let isMenuOpen = $state(false);

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav
	class="relative flex items-center justify-between border-b border-gray-300 p-4 dark:border-gray-700"
>
	<a href="/" class="text-2xl font-bold">CYSHIRC official website</a>

	<div class="block md:hidden">
		<button
			onclick={() => (isMenuOpen = !isMenuOpen)}
			class="flex items-center rounded px-3 py-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
			aria-label="Toggle navigation"
		>
			{#if isMenuOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			{/if}
		</button>
	</div>

	<ul
		class:hidden={!isMenuOpen}
		class="absolute top-full left-0 w-full flex-col items-center space-y-4 border-b bg-white p-4 transition-transform duration-300 ease-in-out md:relative md:top-auto md:left-auto md:flex md:w-auto md:flex-row md:space-y-0 md:space-x-10 md:border-none md:bg-transparent md:p-0 dark:border-gray-700 dark:bg-gray-900"
	>
		<li><a href="#announcements" onclick={closeMenu}>公告與活動</a></li>
		<li><a href="#calendar" onclick={closeMenu}>行事曆與排程</a></li>
		<li><a href="#team" onclick={closeMenu}>社團幹部介紹</a></li>
		<li><a href="#projects" onclick={closeMenu}>最新專案與成果展示</a></li>
		<li><a href="#join" onclick={closeMenu}>加入我們</a></li>
		<li><a href="#resources" onclick={closeMenu}>學習資源與教材</a></li>
		<li><a href="#faq" onclick={closeMenu}>常見問答（FAQ）</a></li>
	</ul>
</nav>

{@render children?.()}

<nav
	class="flex items-center justify-between border-t border-gray-300 p-4 text-center text-sm dark:border-gray-700"
>
	<p class="m-0 mx-auto flex-1 text-center text-xl">
		Built with ❤️ by CYSHIRC members x tonicatOWO
	</p>
	<img
		src={NotByAIBadgewhite}
		class="mr-10 block max-w-[100px]"
		alt="Assisted by Humans, Not by AI"
	/>
</nav>
