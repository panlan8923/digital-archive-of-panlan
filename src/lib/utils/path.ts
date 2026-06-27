import { base } from '$app/paths';

export function resolvePath(path: string): string {
	if (!path || path === '#' || path.startsWith('http')) return path;
	return `${base}${path}`;
}
