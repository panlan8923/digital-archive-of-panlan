const SESSION_KEY = 'panlan-archive-index-seen';

export function shouldPlayIndexSequence(): boolean {
	if (typeof window === 'undefined') return false;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
	return sessionStorage.getItem(SESSION_KEY) !== '1';
}

export function markIndexSequenceSeen(): void {
	sessionStorage.setItem(SESSION_KEY, '1');
}
