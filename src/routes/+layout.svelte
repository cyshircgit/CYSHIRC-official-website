<script lang="ts">
	import '../app.css';
	import { slide, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import favicon from '$lib/assets/favicon.svg';
	import NotByAIBadgewhite from '$lib/assets/Assisted-By-Humans-Not-By-AI-Badge-white.svg?url';
	let { children } = $props();
	let isMenuOpen = $state(false);
	function closeMenu() {
		isMenuOpen = false;
	}

	const MENU_ITEMS = [
		{ href: '#announcements', text: '公告與活動' },
		{ href: '#calendar', text: '行事曆與排程' },
		{ href: '#projects', text: '最新專案與成果展示' },
		{ href: '#join', text: '加入我們' },
		{ href: '#resources', text: '學習資源與教材' },
		{ href: '#faq', text: '常見問答（FAQ）' },
		{ href: '#team', text: '社團幹部介紹' },
	];

	const HAMBURGER_LINES = [
		{
			position: 'top-1',
			duration: 'duration-300',
			open: 'translate-y-2 scale-110 rotate-45',
		},
		{
			position: 'top-3',
			duration: 'duration-200',
			open: 'scale-75 opacity-0',
			closed: 'scale-100 opacity-100',
		},
		{
			position: 'top-5',
			duration: 'duration-300',
			open: '-translate-y-2 scale-110 -rotate-45',
		},
	];
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
			class="flex items-center rounded px-3 py-2 text-gray-500 transition-colors duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
			aria-label="Toggle navigation"
		>
			<div class="relative h-6 w-6">
				{#each HAMBURGER_LINES as { position, duration, open, closed }}
					<span
						class="absolute {position} left-0 h-0.5 w-6 transform bg-current transition-all {duration} ease-[cubic-bezier(0.4,0,0.2,1)] {isMenuOpen
							? open
							: closed || ''}"
					></span>
				{/each}
			</div>
		</button>
	</div>
	{#if isMenuOpen}
		<ul
			transition:slide={{ duration: 300, easing: quintOut }}
			class="absolute top-full left-0 w-full flex-col items-center space-y-4 border-b bg-white p-4 shadow-lg
			md:relative md:top-auto md:left-auto md:flex md:w-auto md:flex-row md:space-y-0 md:space-x-10
			md:border-none md:bg-transparent md:p-0 md:shadow-none dark:border-gray-700 dark:bg-gray-900"
		>
			{#each MENU_ITEMS as item, i}
				<li
					in:fade={{ duration: 200, delay: i * 50 }}
					out:fade={{ duration: 150 }}
					class="transform transition-transform duration-200 hover:scale-105"
				>
					<a href={item.href} onclick={closeMenu} class="block rounded-lg px-4 py-2">
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<ul class="hidden md:flex md:flex-row md:space-x-10">
			{#each MENU_ITEMS as item}
				<li>
					<a href={item.href} class="relative">
						{item.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
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
