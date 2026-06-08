/* =============================================================================
 *  PAINTINGS  —  this is the only file you edit to add / change artworks.
 * =============================================================================
 *
 *  TO ADD A PAINTING:
 *    1. Put the image file in:  src/assets/images/paintings/
 *       (use .webp or .jpg, roughly 2000px on the long side)
 *    2. Copy one block below and fill in the details.
 *    3. Reference the image by its file name only, e.g. image: 'sunrise.webp'
 *
 *  FIELDS:
 *    slug        unique URL id, lowercase-with-dashes (used in the web address)
 *    image       file name inside src/assets/images/paintings/
 *    title       artwork title (shown in both languages)
 *    year        year painted
 *    medium      'oil' | 'mixed' | 'acrylic' | 'watercolor'
 *    width/height size in centimetres (optional but good for buyers + SEO)
 *    price       price in EUR as a number (omit or remove if sold / price on request)
 *    status      'available' | 'sold' | 'reserved'
 *    recent      true to show under the "Recent" filter (optional)
 *    featured    true to show on the home page (optional)
 *    description optional short text shown on the artwork page (EN)
 *    description_de optional German version of that text
 * ========================================================================== */

export type PaintingMedium = 'oil' | 'mixed' | 'acrylic' | 'watercolor';
export type PaintingStatus = 'available' | 'sold' | 'reserved';

export interface Painting {
  slug: string;
  image: string;
  title: string;
  year: number;
  medium: PaintingMedium;
  width?: number;
  height?: number;
  price?: number;
  status: PaintingStatus;
  recent?: boolean;
  featured?: boolean;
  description?: string;
  description_de?: string;
}

export const paintings: Painting[] = [
  {
    slug: 'plovdiv',
    image: 'plovdiv.webp',
    title: 'Plovdiv',
    year: 2023,
    medium: 'oil',
    width: 120,
    height: 80,
    price: 2400,
    status: 'available',
    recent: true,
    featured: true,
    description:
      'A layered oil study of Plovdiv\u2019s old town \u2014 warm stone, deep shadow and the quiet light of late afternoon.',
    description_de:
      'Eine vielschichtige Ölstudie der Altstadt von Plowdiw \u2014 warmer Stein, tiefer Schatten und das ruhige Licht des späten Nachmittags.',
  },
  {
    slug: 'study-i',
    image: 'painting.jpg',
    title: 'Study I',
    year: 2023,
    medium: 'oil',
    width: 60,
    height: 80,
    price: 1200,
    status: 'available',
    recent: true,
    featured: true,
  },
  {
    slug: 'study-ii',
    image: 'painting.jpg',
    title: 'Study II',
    year: 2022,
    medium: 'mixed',
    width: 50,
    height: 50,
    price: 900,
    status: 'available',
    featured: true,
  },
  {
    slug: 'study-iii',
    image: 'painting.jpg',
    title: 'Study III',
    year: 2022,
    medium: 'oil',
    width: 70,
    height: 90,
    status: 'sold',
  },
];

export function getPainting(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

/** Space-separated category list used by the portfolio filter buttons. */
export function paintingCategories(p: Painting): string {
  const cats = [p.medium];
  if (p.recent) cats.push('recent');
  return cats.join(' ');
}
