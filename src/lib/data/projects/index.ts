import { manu } from '$lib/data/projects/manu';
import { nuoOpera } from '$lib/data/projects/nuo-opera';
import { riottosa } from '$lib/data/projects/riottosa';
import { robotTherapy } from '$lib/data/projects/robot-therapy';
import { ruyiThreeThings } from '$lib/data/projects/ruyi-three-things';
import { whisp } from '$lib/data/projects/whisp';
import { xingYin } from '$lib/data/projects/xing-yin';
import type { ProjectContent } from '$lib/types/project.types';

export const projectContents: ProjectContent[] = [
	nuoOpera,
	robotTherapy,
	manu,
	riottosa,
	whisp,
	ruyiThreeThings,
	xingYin
];

const bySlug = new Map(projectContents.map((project) => [project.slug, project]));
const byEntryId = new Map(projectContents.map((project) => [project.entryId, project]));

export function getProjectBySlug(slug: string): ProjectContent | undefined {
	return bySlug.get(slug);
}

export function getProjectByEntryId(entryId: string): ProjectContent | undefined {
	return byEntryId.get(entryId);
}

export function getAllProjectSlugs(): string[] {
	return projectContents.map((project) => project.slug);
}
