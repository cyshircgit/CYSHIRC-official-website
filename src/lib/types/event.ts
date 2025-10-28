import type { ComponentType } from 'svelte';

export interface EventData {
	id: number;
	category: string;
	date: string;
	fullDate: string;
	title: string;
	description: string;
	icon: string;
}

export interface EventWithIcon extends Omit<EventData, 'icon'> {
	icon: ComponentType;
	dateObj: Date;
}
