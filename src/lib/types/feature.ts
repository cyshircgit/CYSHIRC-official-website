import type { ComponentType } from 'svelte';

export interface FeatureData {
	id: number;
	title: string;
	description: string;
	icon: string;
}

export interface FeatureWithIcon extends Omit<FeatureData, 'icon'> {
	icon: ComponentType;
}
