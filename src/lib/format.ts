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

/** Dimensions string, e.g. "120 × 80 cm". */
export function formatDimensions(p: Pick<Painting, 'width' | 'height'>): string | null {
  if (!p.width || !p.height) return null;
  return `${p.width} × ${p.height} cm`;
}
