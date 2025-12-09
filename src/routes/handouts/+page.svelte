<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>講義列表 - CYSHIRC</title>
	<meta name="description" content="CYSHIRC 所有講義資料" />
</svelte:head>

<div class="handouts-list">
	<h1 class="page-title">講義列表</h1>

	<div class="handouts-grid">
		{#each data.handouts as handout (handout.slug)}
			<a href="/handouts/{handout.slug}" class="handout-card">
				<h2>{handout.title}</h2>
				<span class="read-more">閱讀更多 →</span>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@use '$lib/styles/theme' as theme;

	.handouts-list {
		@include theme.container;
		padding-top: 3rem;
		padding-bottom: 3rem;

		.page-title {
			@include theme.section-title(2.5rem, 2rem);
			color: #fff;
			text-align: center;
		}
	}

	.handouts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.handout-card {
		background: white;
		border: 2px solid theme.$gray-300;
		border-radius: 0.75rem;
		padding: 2rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s theme.$transition-smooth;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 150px;

		&:hover {
			border-color: theme.$crimson-primary;
			box-shadow: 0 8px 16px rgba(theme.$crimson-primary, 0.1);
			transform: translateY(-4px);
		}

		h2 {
			font-size: 1.5rem;
			font-weight: 600;
			margin: 0 0 1rem 0;
			color: #1a1a1a;
		}

		.read-more {
			color: theme.$crimson-primary;
			font-weight: 500;
			font-size: 0.95rem;
		}
	}

	@media (max-width: 640px) {
		.handouts-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
