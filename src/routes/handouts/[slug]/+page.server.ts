import type { PageServerLoad } from './$types';
import loadMarkdown from '$lib/utils/mdloader';
import fs from 'fs/promises';
import path from 'path';

export const load: PageServerLoad = async ({ params }) => {
	return await loadMarkdown({ params });
};

// Prerender configuration for static adapter
export const prerender = true;

// Generate entries for all possible slugs
export async function entries() {
	const CONTENT_DIR = path.resolve('static/handouts');
	try {
		const files = await fs.readdir(CONTENT_DIR);
		const mdFiles = files.filter((file) => file.endsWith('.md'));
		
		// Extract slugs from filenames (remove .md extension)
		const slugs = mdFiles.map((file) => ({
			slug: file.replace('.md', '')
		}));
		
		return slugs;
	} catch (error) {
		console.error('Error reading handouts directory:', error);
		return [];
	}
}
