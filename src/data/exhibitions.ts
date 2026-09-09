/* =============================================================================
 *  EXHIBITIONS  —  the "Ausstellungsverzeichnis" (list of exhibitions).
 * =============================================================================
 *
 *  This powers the Exhibitions page: an intro, the full chronological list of
 *  shows, and a gallery of selected views ("ausgewählte Ansichten").
 *
 *  TO ADD A SHOW: copy one block in `exhibitions` and fill it in. Newest first.
 *    id      short unique id, used to attach photos to this show (optional)
 *    year    display string for the year (e.g. '2025' or '2025/2026')
 *    month   optional short month/range (e.g. 'Jun' or 'Jun–Sep'), shown as
 *            its own line stacked above the year
 *    type    'solo' | 'group' | 'award'   (controls the small label)
 *    title   exhibition title (kept in the original language, shown as-is)
 *    venue   gallery / institution
 *    city    city (optional)
 *
 *  TO ADD A PHOTO to the gallery: drop the file in src/assets/images/updates/
 *  and add a block in `selectedViews` with its file name + a short caption.
 *  Set `exhibition` to a show's `id` to group the photo under that show's
 *  heading (like the PDF). Photos without an `exhibition` appear in a final
 *  "more views" gallery.
 * ========================================================================== */

import type { Locale } from '../i18n/locales';

export interface Localized {
  en: string;
  de: string;
}

export type ExhibitionType = 'solo' | 'group' | 'award';

export interface Exhibition {
  id?: string;
  year: string;
  month?: string;
  type: ExhibitionType;
  title: string;
  venue: string;
  city?: string;
}

export interface ExhibitionView {
  image: string;
  caption: Localized;
  /** id of the exhibition this photo belongs to (optional). */
  exhibition?: string;
}

/** Label shown for each show type. */
export const exhibitionTypeLabel: Record<ExhibitionType, Localized> = {
  solo: { en: 'Solo exhibition', de: 'Einzelausstellung' },
  group: { en: 'Group exhibition', de: 'Gruppenausstellung' },
  award: { en: 'Award exhibition', de: 'Preisverleihungsausstellung' },
};

/** Full list, newest first — transcribed from the Ausstellungsverzeichnis. */
export const exhibitions: Exhibition[] = [
  {
    year: '2026',
    month: 'Jun–Sep',
    type: 'group',
    title: '„Leichtigkeit“',
    venue: 'Galerie Ines Schulz',
    city: 'Dresden',
  },
  {
    year: '2026',
    month: 'Jun',
    type: 'group',
    title: '„Strömend“',
    venue: 'Galerie Hermann',
    city: 'Dresden',
  },
  {
    year: '2026',
    month: 'Apr–May',
    type: 'group',
    title: '„A Road, A Ribbon, A Dotted Line“',
    venue: 'Kunstraum Kreuzberg / Bethanien',
    city: 'Berlin',
  },
  {
    id: 'drewes-2026',
    year: '2026',
    type: 'group',
    title: '„FLOATING THROUGH FRAGMENTS“',
    venue: 'Drewes Galerie',
    city: 'Hamburg',
  },
  {
    id: 'ouverture-2025',
    year: '2025/2026',
    type: 'solo',
    title: '„Ouvertüre“',
    venue: 'Pentacon Galerie',
    city: 'Dresden',
  },
  {
    id: 'diplom-2025',
    year: '2025',
    type: 'group',
    title: 'Diplomausstellung HfBK Dresden',
    venue: 'HfBK Dresden',
    city: 'Dresden',
  },
  {
    year: '2025',
    type: 'group',
    title: '„ParaDiesDas“',
    venue: 'Werbeagentur Oberüber Karger',
  },
  {
    id: 'iwander-2024',
    year: '2024',
    type: 'group',
    title: '„I Wander All Night“',
    venue: 'Kunstraum Kreuzberg / Bethanien',
    city: 'Berlin',
  },
  {
    year: '2024',
    type: 'solo',
    title: '„News from Home“',
    venue: 'Soultunes',
    city: 'Magdeburg',
  },
  {
    year: '2023',
    type: 'group',
    title: '„Within and Without“',
    venue: 'Zentralwerk',
    city: 'Dresden',
  },
  {
    year: '2023',
    type: 'group',
    title: '„In Hundejahren bin ich tot“',
    venue: 'Brühlsche Galerie',
    city: 'Dresden',
  },
  {
    year: '2022',
    type: 'group',
    title: '„Certezza dopo il sonno“',
    venue: 'Accademia di Belle Arti di Roma',
    city: 'Roma',
  },
  {
    year: '2021',
    type: 'solo',
    title: '„Stall“',
    venue: 'St. Pankratius Kirche',
    city: 'Klein Rodensleben',
  },
  {
    year: '2018',
    type: 'award',
    title: 'Europäische Siegerin „Jugend Creativ“',
    venue: '„Jugend creativ“',
    city: 'Paris',
  },
];

/** Selected views ("ausgewählte Ansichten"), grouped per show via `exhibition`. */
export const selectedViews: ExhibitionView[] = [
  // 2025 — Diplomausstellung HfBK Dresden (group show)
  { image: 'ex-view-1.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },
  { image: 'ex-view-3.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },
  { image: 'ex-view-4.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },
  { image: 'ex-work-1.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },
  { image: 'ex-work-6.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },
  { image: 'ex-work-8.webp', exhibition: 'diplom-2025', caption: { en: 'Diplomausstellung HfBK Dresden, 2025', de: 'Diplomausstellung HfBK Dresden, 2025' } },

  // 2026 — Drewes Galerie, Hamburg (group show): no photos yet, heading kept via id below

  // 2024 — „I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin (group show)
  { image: 'ex-work-3.webp', exhibition: 'iwander-2024', caption: { en: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024', de: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024' } },
  { image: 'ex-work-4.webp', exhibition: 'iwander-2024', caption: { en: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024', de: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024' } },
  { image: 'ex-work-5.webp', exhibition: 'iwander-2024', caption: { en: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024', de: '„I Wander All Night“, Kunstraum Kreuzberg / Bethanien, Berlin, 2024' } },

  // 2025/2026 — „Ouvertüre“, Pentacon Galerie, Dresden (solo show)
  // (the opening portrait shot is used on the About page instead — see artist-portrait.webp)
  { image: 'ex-detail-3.webp', exhibition: 'ouverture-2025', caption: { en: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026', de: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026' } },
  { image: 'ex-detail-1.webp', exhibition: 'ouverture-2025', caption: { en: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026', de: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026' } },
  { image: 'ex-detail-2.webp', exhibition: 'ouverture-2025', caption: { en: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026', de: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026' } },
  { image: 'ex-work-7.webp', exhibition: 'ouverture-2025', caption: { en: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026', de: '„Ouvertüre“, Pentacon Galerie, Dresden, 2025/2026' } },
];

export function pickLocalized(value: Localized, locale: Locale): string {
  return value[locale] ?? value.en;
}

/** Views attached to a given exhibition id. */
export function viewsForExhibition(id: string): ExhibitionView[] {
  return selectedViews.filter((v) => v.exhibition === id);
}

/** Views not attached to any exhibition (shown in a closing gallery). */
export function ungroupedViews(): ExhibitionView[] {
  return selectedViews.filter((v) => !v.exhibition);
}

/**
 * Exhibitions with an `id` — i.e. ones meant to get their own selected-views
 * heading, whether or not photos are attached yet — in list order (newest first).
 */
export function exhibitionsWithViews(): Exhibition[] {
  return exhibitions.filter((ex) => ex.id);
}

/**
 * Selected-view photos bucketed by the year their exhibition took place
 * (a show spanning two years, e.g. '2025/2026', buckets under the first),
 * newest year first. Used to show one plain year heading per group instead
 * of repeating each show's title/venue.
 */
export function viewsByYear(): { year: string; views: ExhibitionView[] }[] {
  const byYear = new Map<string, ExhibitionView[]>();
  for (const ex of exhibitionsWithViews()) {
    const yearKey = ex.year.match(/\d{4}/)?.[0] ?? ex.year;
    byYear.set(yearKey, [...(byYear.get(yearKey) ?? []), ...viewsForExhibition(ex.id!)]);
  }
  return Array.from(byYear, ([year, views]) => ({ year, views })).sort(
    (a, b) => Number(b.year) - Number(a.year)
  );
}
