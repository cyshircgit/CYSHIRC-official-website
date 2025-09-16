<script lang="ts">
	import { onMount } from 'svelte';
	import { darkmode } from '$lib/stores/theme';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.scss';

	onMount(() => {
		darkmode.init();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>CYSHIRC Official Website</title>
</svelte:head>

<div class="app">
	<Navigation />
	<main class="main-content">
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.main-content {
		flex: 1;
		padding: 2rem;
	}
</style>
