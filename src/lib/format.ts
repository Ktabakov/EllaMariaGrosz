import type { Locale } from '../i18n/locales';
import type { Painting } from '../data/paintings';

/** Format a EUR price for display, e.g. 2400 → "€2,400" (en) / "2.400 €" (de). */
export function formatPrice(price: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price);
}

/** Dimensions string, e.g. "120 × 80 cm" (en) / "29,7 × 42 cm" (de). */
export function formatDimensions(p: Pick<Painting, 'width' | 'height'>, locale: Locale = 'en'): string | null {
  if (!p.width || !p.height) return null;
  const nf = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : 'en-GB');
  return `${nf.format(p.width)} × ${nf.format(p.height)} cm`;
}

/** Painting title in the requested locale, falling back to the English title. */
export function paintingTitle(p: Pick<Painting, 'title' | 'title_de'>, locale: Locale): string {
  return (locale === 'de' ? p.title_de : p.title) ?? p.title;
}

/**
 * Medium label for display. Uses the painting's own mediumNote (the exact
 * support material, e.g. "Oil on paper on wood") when set, otherwise falls
 * back to the generic category label (e.g. "Oil on canvas") passed in.
 */
export function mediumLabel(
  p: Pick<Painting, 'mediumNote' | 'mediumNote_de'>,
  locale: Locale,
  genericLabel: string,
): string {
  const note = locale === 'de' ? p.mediumNote_de : p.mediumNote;
  return note ?? genericLabel;
}
