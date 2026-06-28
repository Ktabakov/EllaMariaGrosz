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
  /** A YouTube watch/share URL — shows the video thumbnail + a play badge. */
  video?: string;
  /** Source name (e.g. 'Volksstimme', 'Instagram') shown on the placeholder. */
  source?: string;
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

/** Pull the 11-char video id out of any common YouTube URL form. */
export function youTubeId(url: string | undefined): string | undefined {
  if (!url) return undefined;
  const m = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/);
  return m?.[1];
}

/**
 * Thumbnail URL for a YouTube video id. Uses the 16:9 `maxresdefault`
 * (1280×720) so there are no black letterbox bars like the 4:3 `hqdefault`.
 */
export function youTubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
}

function kinds(entry: UpdateEntry): UpdateKind[] {
  return Array.isArray(entry.kind) ? entry.kind : [entry.kind];
}

export const updates: UpdateEntry[] = [
  {
    kind: ['news', 'exhibition'],
    featured: true,
    image: 'opening-pentacon.webp',
    date: { en: '2025 / 2026', de: '2025 / 2026' },
    category: { en: 'Solo exhibition', de: 'Einzelausstellung' },
    title: {
      en: '„Ouvertüre“ — Pentacon Galerie, Dresden',
      de: '„Ouvertüre“ — Pentacon Galerie, Dresden',
    },
    excerpt: {
      en: 'A solo exhibition of new paintings at the Pentacon Galerie in Dresden.',
      de: 'Eine Einzelausstellung mit neuen Bildern in der Pentacon Galerie Dresden.',
    },
  },
  {
    kind: ['news', 'exhibition'],
    featured: true,
    image: 'ex-view-1.webp',
    date: { en: '2026', de: '2026' },
    category: { en: 'Group exhibition', de: 'Gruppenausstellung' },
    title: {
      en: '„Floating Through Fragments“ — Drewes Galerie, Hamburg',
      de: '„Floating Through Fragments“ — Drewes Galerie, Hamburg',
    },
    excerpt: {
      en: 'A group exhibition at the Drewes Galerie in Hamburg.',
      de: 'Eine Gruppenausstellung in der Drewes Galerie in Hamburg.',
    },
  },
  {
    kind: ['news', 'exhibition'],
    featured: true,
    image: 'ex-view-2.webp',
    date: { en: '2025', de: '2025' },
    category: { en: 'Group exhibition', de: 'Gruppenausstellung' },
    title: {
      en: 'Diploma Exhibition — HfBK Dresden',
      de: 'Diplomausstellung — HfBK Dresden',
    },
    excerpt: {
      en: 'New work shown in the graduation exhibition of the Dresden Academy of Fine Arts (HfBK).',
      de: 'Neue Arbeiten in der Diplomausstellung der Hochschule für Bildende Künste Dresden (HfBK).',
    },
  },
  {
    kind: 'press',
    date: { en: '2025', de: '2025' },
    category: { en: 'Interview', de: 'Interview' },
    title: {
      en: 'Interview with Ella Maria Grosz',
      de: 'Interview mit Ella Maria Grosz',
    },
    excerpt: {
      en: 'A video interview with the artist about her work and practice.',
      de: 'Ein Videointerview mit der Künstlerin über ihre Arbeit und ihre Praxis.',
    },
    video: 'https://www.youtube.com/watch?v=ckkxiCSsQkQ',
    link: 'https://www.youtube.com/watch?v=ckkxiCSsQkQ',
  },
  {
    kind: 'press',
    source: 'Volksstimme',
    date: { en: '2017', de: '2017' },
    category: { en: 'Press', de: 'Presse' },
    title: {
      en: '„Junge Kunst begeistert Wanzleber“ — Volksstimme',
      de: '„Junge Kunst begeistert Wanzleber“ — Volksstimme',
    },
    excerpt: {
      en: 'A newspaper feature on the artist’s first solo exhibition in Wanzleben.',
      de: 'Ein Zeitungsbeitrag über die erste Einzelausstellung der Künstlerin in Wanzleben.',
    },
    link: 'https://www.volksstimme.de/lokal/wanzleben/junge-kunst-begeistert-wanzleber-860925',
  },
  {
    kind: 'press',
    source: 'Instagram',
    date: { en: '2022', de: '2022' },
    category: { en: 'Instagram', de: 'Instagram' },
    title: {
      en: 'Featured on Instagram',
      de: 'Auf Instagram vorgestellt',
    },
    excerpt: {
      en: 'A post featuring the artist’s work.',
      de: 'Ein Beitrag mit Arbeiten der Künstlerin.',
    },
    link: 'https://www.instagram.com/p/CdNxp1XMSsT/',
  },
  {
    kind: 'press',
    source: 'Instagram',
    date: { en: '2025', de: '2025' },
    category: { en: 'Instagram', de: 'Instagram' },
    title: {
      en: 'Reel on Instagram',
      de: 'Reel auf Instagram',
    },
    excerpt: {
      en: 'A short video featuring the artist’s work.',
      de: 'Ein kurzes Video mit Arbeiten der Künstlerin.',
    },
    link: 'https://www.instagram.com/reel/DSF4c1JEf8t/',
  },
];

export function getUpdates(kind: UpdateKind, locale?: Locale): UpdateEntry[] {
  void locale;
  return updates.filter((u) => kinds(u).includes(kind));
}

export function getFeaturedUpdates(): UpdateEntry[] {
  return updates.filter((u) => u.featured);
}
