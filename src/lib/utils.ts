export function resolveAssetUrl(url?: string): string {
  if (!url) return '';
  if (url.startsWith('/') && !url.startsWith('//')) {
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    return `${base}${url}`;
  }
  return url;
}
