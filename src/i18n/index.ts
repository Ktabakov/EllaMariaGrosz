import type { Locale } from './locales';
import en from './en.json';
import de from './de.json';

const dictionaries = { en, de } as const;

export type Messages = typeof en;

export function getMessages(locale: Locale): Messages {
  return dictionaries[locale];
}

/** Dot-path lookup, e.g. t('nav.home') */
export function t(locale: Locale, path: string): string {
  const dict = dictionaries[locale] as Record<string, unknown>;
  const keys = path.split('.');
  let value: unknown = dict;
  for (const k of keys) {
    if (value === null || typeof value !== 'object') return path;
    value = (value as Record<string, unknown>)[k];
  }
  return typeof value === 'string' ? value : path;
}
