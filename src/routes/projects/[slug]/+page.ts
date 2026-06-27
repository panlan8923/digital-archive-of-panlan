import { error } from '@sveltejs/kit';
import { getAllProjectSlugs, getProjectBySlug } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const prerender = true;

export const entries = () => getAllProjectSlugs().map((slug) => ({ slug }));

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return { project };
};
