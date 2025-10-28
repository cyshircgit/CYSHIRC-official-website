<script lang="ts">
	import type { FeatureWithIcon } from '$lib/types';

	type Props = {
		feature: FeatureWithIcon;
	};

	let { feature }: Props = $props();
	
	const Icon = feature.icon;
</script>

<div class="feature-card">
	<div class="feature-icon">
		<Icon size={48} stroke={1.5} />
	</div>
	<h3 class="feature-title">{feature.title}</h3>
	<p class="feature-description">{feature.description}</p>
</div>

<style lang="scss">
	@use '$lib/styles/theme' as theme;

	.feature-card {
		background: theme.$gray-800;
		border: 1.5px solid theme.$gray-700;
		border-radius: 1.25rem;
		padding: 2.5rem;
		transition: all 0.4s theme.$transition-smooth;

		&:hover {
			border-color: theme.$gray-600;
			transform: translateY(-4px);
			background: theme.$gray-700;

			.feature-icon {
				transform: scale(1.1) rotate(-5deg);
				color: theme.$crimson-primary;
			}
		}
	}

	.feature-icon {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: theme.$crimson-primary;
		transition: transform 0.4s theme.$transition-smooth, color 0.4s theme.$transition-smooth;
	}

	.feature-title {
		font-size: 1.25rem;
		font-weight: 800;
		line-height: 1.3;
		letter-spacing: -0.02em;
		color: #fff;
		margin: 0 0 0.75rem;
	}

	.feature-description {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: theme.$gray-400;
		margin: 0;
	}
</style>
