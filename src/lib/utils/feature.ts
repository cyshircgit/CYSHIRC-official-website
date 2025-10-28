import type { FeatureData, FeatureWithIcon } from '$lib/types';
import { iconMap } from './icon';

export function transformFeatures(features: FeatureData[]): FeatureWithIcon[] {
	return features.map((feature) => ({
		...feature,
		icon: iconMap[feature.icon]
	}));
}
