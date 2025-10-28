import type { EventData, EventWithIcon } from '$lib/types';
import { iconMap } from './icon';

export function getUpcomingEvents(events: EventData[], limit = 3): EventWithIcon[] {
	const now = new Date();

	return events
		.map((event) => ({
			...event,
			icon: iconMap[event.icon],
			dateObj: new Date(event.fullDate)
		}))
		.sort((a, b) => {
			const diffA = Math.abs(a.dateObj.getTime() - now.getTime());
			const diffB = Math.abs(b.dateObj.getTime() - now.getTime());
			return diffA - diffB;
		})
		.slice(0, limit);
}

export function formatDate(date: string | Date): string {
	const d = typeof date === 'string' ? new Date(date) : date;
	const year = d.getFullYear();
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const day = String(d.getDate()).padStart(2, '0');
	return `${year}.${month}.${day}`;
}

export function isEventPast(date: string | Date): boolean {
	const eventDate = typeof date === 'string' ? new Date(date) : date;
	return eventDate < new Date();
}
