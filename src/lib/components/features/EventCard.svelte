<script lang="ts">
	import type { EventWithIcon } from '$lib/types';

	type Props = {
		event: EventWithIcon;
		variant?: 'compact' | 'detailed';
		showAction?: boolean;
		actionLabel?: string;
	};

	let {
		event,
		variant = 'compact',
		showAction = false,
		actionLabel = '了解更多'
	}: Props = $props();

	const Icon = event.icon;
</script>

<article class={`event-card ${variant}`}>
	<div class="event-header">
		<div class="event-icon">
			<Icon size={variant === 'compact' ? 32 : 40} stroke={1.5} />
		</div>
		<div class="event-meta">
			<span class="event-category">{event.category}</span>
			<span class="event-date">{event.date}</span>
		</div>
	</div>

	<h3 class="event-title">{event.title}</h3>
	<p class="event-description">{event.description}</p>

	{#if variant === 'detailed' && showAction}
		<div class="event-footer">
			<button class="btn-secondary">{actionLabel}</button>
		</div>
	{/if}
</article>

<style lang="scss">
	@use '$lib/styles/theme' as theme;

	.event-card {
		background: theme.$gray-800;
		border: 1.5px solid theme.$gray-700;
		border-radius: 1.5rem;
		transition: all 0.4s theme.$transition-smooth;
		display: flex;
		flex-direction: column;

		&.compact {
			padding: 3rem;
			gap: 1.5rem;

			.event-header {
				justify-content: flex-start;
				gap: 1.5rem;
			}

			.event-meta {
				flex-direction: row;
				align-items: center;
				gap: 1rem;
			}
		}

		&.detailed {
			padding: 2.5rem;
			gap: 1.5rem;
		}

		&:hover {
			border-color: theme.$crimson-primary;
			transform: translateY(-6px);
			box-shadow: 0 24px 48px rgba(theme.$crimson-primary, 0.18);

			.event-icon {
				background: theme.$crimson-primary;
				color: #fff;
				transform: scale(1.05) rotate(5deg);
			}
		}
	}

	.event-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
	}

	.event-icon {
		width: 72px;
		height: 72px;
		background: theme.$gray-700;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		transition: all 0.4s theme.$transition-smooth;
	}

	.event-meta {
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		align-items: flex-start;
	}

	.event-category {
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: theme.$gray-400;
	}

	.event-date {
		font-size: 0.875rem;
		font-weight: 600;
		color: theme.$gray-400;
	}

	.event-title {
		font-size: 1.75rem;
		font-weight: 800;
		line-height: 1.2;
		letter-spacing: -0.02em;
		color: #fff;
		margin: 0;
	}

	.event-description {
		font-size: 1rem;
		line-height: 1.7;
		color: theme.$gray-400;
		margin: 0;
	}

	.event-footer {
		display: flex;
		gap: 1rem;
		margin-top: auto;
	}

	@media (max-width: 768px) {
		.event-card {
			&.compact,
			&.detailed {
				padding: 2rem;
			}
		}

		.event-header {
			flex-direction: row;
			align-items: center;
		}

		.event-meta {
			align-items: flex-start;
		}
	}
</style>

