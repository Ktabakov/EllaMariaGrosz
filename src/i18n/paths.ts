import type { Locale } from './locales';

/** Path for a page under a locale, e.g. portfolio → `/en/portfolio` */
export function localizedHref(lang: Locale, segment: '' | 'portfolio' | 'press' | 'exhibitions'): string {
  if (segment === '') return `/${lang}/`;
  return `/${lang}/${segment}`;
}

/** Replace leading locale segment in the current pathname (for language toggle). */
export function swapLocaleInPath(pathname: string, newLang: Locale): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] === 'en' || parts[0] === 'de') {
    parts[0] = newLang;
  } else {
    parts.unshift(newLang);
  }
  const path = '/' + parts.join('/');
  return parts.length === 1 ? path + '/' : path;
}
