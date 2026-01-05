import fs from 'fs/promises';
import path from 'path';
import type { PageServerLoad } from './$types';

const CONTENT_DIR = path.resolve('static/handouts');

export const prerender = true;

export const load: PageServerLoad = async () => {
	try {
		const files = await fs.readdir(CONTENT_DIR);
		const mdFiles = files.filter((file) => file.endsWith('.md'));

		const handouts = await Promise.all(
			mdFiles.map(async (file) => {
				const slug = file.replace('.md', '');
				const filePath = path.join(CONTENT_DIR, file);
				const content = await fs.readFile(filePath, 'utf-8');

				// Extract title from first heading
				const titleMatch = content.match(/^#\s+(.+)$/m);
				const title = titleMatch ? titleMatch[1] : slug;

				return { slug, title };
			})
		);

		return { handouts };
	} catch (error) {
		console.error('Error loading handouts:', error);
		return { handouts: [] };
	}
};
