import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const THEME_CLASSES = {
	light: 'theme-light',
	dark: 'theme-dark',
} as const;

const STORAGE_KEY = 'darkmode';

function createDarkModeStore() {
	const { subscribe, set, update } = writable(false);

	function safeSetStorage(key: string, value: string): boolean {
		try {
			localStorage.setItem(key, value);
			return true;
		} catch (error) {
			return false;
		}
	}

	function safeGetStorage(key: string): string | null {
		try {
			return localStorage.getItem(key);
		} catch (error) {
			return null;
		}
	}

	function applyThemeClass(isDark: boolean): void {
		if (!browser) return;

		const body = document.body;
		const html = document.documentElement;

		body.classList.remove(THEME_CLASSES.light, THEME_CLASSES.dark);
		html.classList.remove(THEME_CLASSES.light, THEME_CLASSES.dark);

		const themeClass = isDark ? THEME_CLASSES.dark : THEME_CLASSES.light;
		body.classList.add(themeClass);
		html.classList.add(themeClass);
	}

	function getSystemPreference(): boolean {
		if (!browser) return false;

		try {
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		} catch (error) {
			return false;
		}
	}

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				const newValue = !current;
				safeSetStorage(STORAGE_KEY, newValue.toString());
				applyThemeClass(newValue);
				return newValue;
			});
		},
		init: () => {
			if (!browser) return;

			let isDark = false;
			const saved = safeGetStorage(STORAGE_KEY);

			if (saved !== null) {
				isDark = saved === 'true';
			} else {
				isDark = getSystemPreference();
				safeSetStorage(STORAGE_KEY, isDark.toString());
			}

			applyThemeClass(isDark);
			set(isDark);
		},
	};
}

export const darkmode = createDarkModeStore();
