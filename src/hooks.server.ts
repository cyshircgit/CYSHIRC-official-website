import { render } from '@master/css-server';
import config from '../master.css.js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return render(html, config).html;
		}
	});
};
