<script lang="ts">
	import { IconCalendar, IconMapPin, IconClock } from '@tabler/icons-svelte';
	import { EventCard } from '$lib/components';
	import eventsData from '$lib/data/events.json';
	import { getUpcomingEvents } from '$lib/utils';
	import type { EventData } from '$lib/types';

	const events = getUpcomingEvents(eventsData as EventData[], eventsData.length);
</script>

<svelte:head>
	<title>活動資訊 - CYSHIRC 嘉義高中資訊研究社</title>
	<meta name="description" content="探索我們精心規劃的活動與課程，從技術學習到社群交流，找到最適合你的成長路徑。" />
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
				{#each events as event}
					<article class="event-card">
						<div class="event-header">
							<div class="event-icon">
								<event.icon size={40} stroke={1.5} />
							</div>
							<div class="event-meta">
								<span class="event-category">{event.category}</span>
								<span class="event-date">
									<IconCalendar size={16} stroke={2} />
									{event.date}
								</span>
							</div>
						</div>
						<h2 class="event-title">{event.title}</h2>
						<p class="event-description">{event.description}</p>
						<div class="event-footer">
							<button class="btn-secondary">了解更多</button>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	$crimson-primary: #ce1a4b;
	$crimson-dark: #a01538;
	$crimson-light: #e63764;
	$highlight-yellow: #d4ff00;
	$gray-900: #0f1117;
	$gray-800: #1a1d29;
	$gray-700: #252936;
	$gray-600: #32374a;
	$gray-400: #9ca3af;
	$gray-300: #d1d5db;
	$transition-smooth: cubic-bezier(0.4, 0, 0.2, 1);

	.page {
		background: $gray-900;
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
		background: $gray-900;
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
				color: $gray-400;
				padding: 0.5rem 1rem;
				border: 1.5px solid $gray-700;
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
				color: $gray-400;
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

	.event-card {
		background: $gray-800;
		border: 1px solid $gray-700;
		border-radius: 1.5rem;
		padding: 2.5rem;
		transition: all 0.3s $transition-smooth;

		&:hover {
			transform: translateY(-8px);
			border-color: $crimson-primary;
			box-shadow: 0 24px 48px rgba($crimson-primary, 0.15);

			.event-icon {
				background: rgba($crimson-primary, 0.9);
				border-color: $crimson-primary;
				transform: scale(1.1);
				color: #fff;
			}
		}

		.event-header {
			display: flex;
			align-items: flex-start;
			gap: 1.5rem;
			margin-bottom: 1.5rem;
		}

		.event-icon {
			width: 80px;
			height: 80px;
			background: rgba($crimson-primary, 0.1);
			border: 2px solid rgba($crimson-primary, 0.3);
			border-radius: 1.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
			color: $crimson-light;
			flex-shrink: 0;
			transition: all 0.3s $transition-smooth;
		}

		.event-meta {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			padding-top: 0.5rem;
		}

		.event-category {
			display: inline-block;
			font-size: 0.75rem;
			font-weight: 700;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			color: $crimson-light;
			background: rgba($crimson-primary, 0.15);
			padding: 0.375rem 0.75rem;
			border-radius: 100px;
			width: fit-content;
		}

		.event-date {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			font-size: 0.875rem;
			color: $gray-400;
			font-weight: 600;

			:global(svg) {
				color: $crimson-primary;
			}
		}

		.event-title {
			font-size: 1.75rem;
			font-weight: 800;
			line-height: 1.2;
			letter-spacing: -0.02em;
			color: #fff;
			margin: 0 0 1rem;
		}

		.event-description {
			font-size: 1rem;
			line-height: 1.7;
			color: $gray-400;
			margin: 0 0 2rem;
		}

		.event-footer {
			display: flex;
			gap: 1rem;
		}
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		color: $crimson-light;
		padding: 0.875rem 1.75rem;
		border-radius: 100px;
		font-weight: 700;
		font-size: 0.9375rem;
		letter-spacing: -0.01em;
		transition: all 0.3s $transition-smooth;
		border: 2px solid $crimson-primary;
		cursor: pointer;

		&:hover {
			background: $crimson-primary;
			color: #fff;
			transform: translateY(-2px);
			box-shadow: 0 12px 24px rgba($crimson-primary, 0.3);
		}
	}
</style>
