<script lang="ts">
	import { EventCard } from '$lib/components';
	import eventsData from '$lib/data/events.json';
	import { getUpcomingEvents } from '$lib/utils';
	import type { EventData } from '$lib/types';

	const events = getUpcomingEvents(eventsData as EventData[], eventsData.length);
</script>

<svelte:head>
	<title>活動資訊 - CYSHIRC 嘉義高中資訊研究社</title>
	<meta
		name="description"
		content="探索我們精心規劃的活動與課程，從技術學習到社群交流，找到最適合你的成長路徑。"
	/>
	<meta property="og:title" content="活動資訊 - CYSHIRC" />
	<meta property="og:description" content="探索我們精心規劃的活動與課程，從技術學習到社群交流。" />
</svelte:head>

<div class="page">
	<section class="hero">
		<div class="container">
			<div class="hero-content">
				<span class="hero-badge">UPCOMING EVENTS</span>
				<h1 class="hero-title">近期活動</h1>
				<p class="hero-subtitle">
					探索我們精心規劃的活動與課程，從技術學習到社群交流，<br />
					找到最適合你的成長路徑。
				</p>
			</div>
		</div>
	</section>

	<section class="events-section">
		<div class="container">
				<div class="events-grid">
					{#each events as event (event.id)}
						<EventCard {event} variant="detailed" showAction={true} actionLabel="了解更多" />
					{/each}
				</div>
		</div>
	</section>
</div>

<style lang="scss">
	@use '$lib/styles/theme' as theme;

.page {
		background: theme.$gray-900;
		min-height: 100vh;
	}

	.container {
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

.hero {
		padding: 8rem 0 6rem;
		background: theme.$gray-900;
		text-align: center;

		@media (max-width: 768px) {
			padding: 5rem 0 4rem;
		}

		.hero-content {
			max-width: 800px;
			margin: 0 auto;

.hero-badge {
				display: inline-block;
				font-size: 0.6875rem;
				font-weight: 700;
				letter-spacing: 0.15em;
				text-transform: uppercase;
				color: theme.$gray-400;
				padding: 0.5rem 1rem;
				border: 1.5px solid theme.$gray-700;
				border-radius: 100px;
				margin-bottom: 2rem;
			}

			.hero-title {
				font-size: 4rem;
				font-weight: 900;
				line-height: 1.1;
				letter-spacing: -0.045em;
				color: #fff;
				margin: 0 0 1.5rem;

				@media (max-width: 768px) {
					font-size: 2.5rem;
				}
			}

.hero-subtitle {
				font-size: 1.125rem;
				line-height: 1.7;
				color: theme.$gray-400;
				margin: 0;
				font-weight: 500;

				@media (max-width: 768px) {
					font-size: 1rem;
				}
			}
		}
	}

	.events-section {
		padding: 4rem 0 8rem;

		@media (max-width: 768px) {
			padding: 2rem 0 4rem;
		}
	}

	.events-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
		gap: 2rem;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}




</style>
