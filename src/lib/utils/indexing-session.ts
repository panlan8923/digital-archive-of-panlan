const SKIP_ONCE_KEY = 'panlan-archive-skip-index-once';

export function skipArchiveIndexOnce(): void {
	if (typeof sessionStorage === 'undefined') return;
	sessionStorage.setItem(SKIP_ONCE_KEY, '1');
}

export function consumeArchiveIndexSkip(): boolean {
	if (typeof sessionStorage === 'undefined') return false;
	if (sessionStorage.getItem(SKIP_ONCE_KEY) !== '1') return false;
	sessionStorage.removeItem(SKIP_ONCE_KEY);
	return true;
}
