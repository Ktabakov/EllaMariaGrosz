/* =============================================================================
 *  UPDATES  —  news, press and exhibitions.
 * =============================================================================
 *
 *  These power the "Latest News" block on the home page and the Press &
 *  Exhibitions pages. Every text field has an English (en) and German (de)
 *  version. Images are optional — if you leave `image` out, a tasteful
 *  placeholder is shown instead, so nothing ever looks broken.
 *
 *  TO ADD AN IMAGE: drop the file in src/assets/images/updates/ and set
 *  `image: 'my-file.webp'`.
 *
 *  These are placeholder examples — replace them with real shows / press.
 * ========================================================================== */

import type { Locale } from '../i18n/locales';

export type UpdateKind = 'news' | 'press' | 'exhibition';

export interface Localized {
  en: string;
  de: string;
}

export interface UpdateEntry {
  kind: UpdateKind | UpdateKind[];
  image?: string;
  date: Localized;
  category: Localized;
  title: Localized;
  excerpt: Localized;
  link?: string;
  featured?: boolean;
}

export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}

function kinds(entry: UpdateEntry): UpdateKind[] {
  return Array.isArray(entry.kind) ? entry.kind : [entry.kind];
}

export const updates: UpdateEntry[] = [
  {
    kind: ['news', 'exhibition'],
    featured: true,
    date: { en: 'Spring 2025', de: 'Frühjahr 2025' },
    category: { en: 'Exhibition', de: 'Ausstellung' },
    title: {
      en: 'Open Studio — Dresden',
      de: 'Offenes Atelier — Dresden',
    },
    excerpt: {
      en: 'A weekend of open doors at the Dresden studio, showing new oil paintings and works in progress.',
      de: 'Ein Wochenende der offenen Tür im Dresdner Atelier mit neuen Ölgemälden und Arbeiten im Entstehen.',
    },
  },
  {
    kind: ['news', 'press'],
    featured: true,
    date: { en: '2024', de: '2024' },
    category: { en: 'Press', de: 'Presse' },
    title: {
      en: 'Studio Conversation',
      de: 'Atelier-Gespräch',
    },
    excerpt: {
      en: 'A short interview on working in layered oil and finding stillness in everyday scenes.',
      de: 'Ein kurzes Interview über das Arbeiten in geschichtetem Öl und die Ruhe in alltäglichen Szenen.',
    },
  },
  {
    kind: ['news', 'exhibition'],
    featured: true,
    date: { en: '2024', de: '2024' },
    category: { en: 'Group Show', de: 'Gruppenausstellung' },
    title: {
      en: 'Contemporary Painting — Saxony',
      de: 'Zeitgenössische Malerei — Sachsen',
    },
    excerpt: {
      en: 'Selected works shown alongside regional contemporary painters.',
      de: 'Ausgewählte Arbeiten gezeigt neben regionalen zeitgenössischen Malerinnen und Malern.',
    },
  },
];

export function getUpdates(kind: UpdateKind, locale?: Locale): UpdateEntry[] {
  void locale;
  return updates.filter((u) => kinds(u).includes(kind));
}

export function getFeaturedUpdates(): UpdateEntry[] {
  return updates.filter((u) => u.featured);
}
