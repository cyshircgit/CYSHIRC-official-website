import type { PageServerLoad } from './$types';
import loadMarkdown from '$lib/utils/mdloader';

export const load: PageServerLoad = async ({ params }) => {
	return await loadMarkdown({ params });
};
