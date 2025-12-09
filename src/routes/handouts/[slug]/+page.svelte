<script lang="ts">
	import type { PageProps } from './$types';
	import 'highlight.js/styles/tokyo-night-dark.css';
	import '$lib/styles/handout.scss';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.title} - CYSHIRC</title>
	<meta name="description" content={`CYSHIRC 講義 - ${data.title}`} />
</svelte:head>

<div class="handout-container">
	<h1 class="handout-title">{data.title}</h1>
	<article class="handout-content">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html data.content}
	</article>
</div>
