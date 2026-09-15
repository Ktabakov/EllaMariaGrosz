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
 *    title       artwork title (English; used as fallback for German too)
 *    title_de    optional German title (omit to reuse the English title)
 *    year        year painted
 *    medium      'oil' | 'mixed' | 'acrylic' | 'watercolor' (used for the filter buttons)
 *    mediumNote  optional exact support material shown instead of the generic
 *                medium label, e.g. "Oil on paper on wood" (EN)
 *    mediumNote_de optional German version of mediumNote
 *    width/height size in centimetres (optional but good for buyers + SEO)
 *    price       price in EUR as a number (omit or remove if sold / price on request)
 *    status      'available' | 'sold' | 'reserved'
 *    recent      true to show under the "Recent" filter (optional)
 *    featured    true to show on the home page (optional)
 * ========================================================================== */

export type PaintingMedium = 'oil' | 'mixed' | 'acrylic' | 'watercolor';
export type PaintingStatus = 'available' | 'sold' | 'reserved';

export interface Painting {
  slug: string;
  image: string;
  title: string;
  title_de?: string;
  year: number;
  medium: PaintingMedium;
  mediumNote?: string;
  mediumNote_de?: string;
  width?: number;
  height?: number;
  price?: number;
  status: PaintingStatus;
  recent?: boolean;
  featured?: boolean;
}

// Ordered newest → oldest by year, so the top of the portfolio grid shows recent work first.
export const paintings: Painting[] = [
  {
    slug: 'femme-a-la-peau-bleue',
    image: 'Femme à la peau bleue, Öl auf Leinwand, 140 x 180 cm, 2026.webp',
    title: 'Femme à la peau bleue',
    title_de: 'Femme à la peau bleue',
    year: 2026,
    medium: 'oil',
    width: 140,
    height: 180,
    status: 'sold',
  },
  {
    slug: 'capita-flammea',
    image: 'Capita flammea, Acryl auf Leinwand, 100 x 70 cm, 2027.webp',
    title: 'Capita flammea',
    title_de: 'Capita flammea',
    year: 2026,
    medium: 'acrylic',
    width: 100,
    height: 70,
    status: 'available',
  },
  {
    slug: 'kiss',
    image: 'Kiss, Acryl auf Leinwand, 50 x 40 cm, 2027.webp',
    title: 'Kiss',
    title_de: 'Kiss',
    year: 2026,
    medium: 'acrylic',
    width: 50,
    height: 40,
    status: 'available',
  },
  {
    slug: 'utangatta',
    image: 'Útangátta 2026.webp',
    title: 'Útangátta',
    title_de: 'Útangátta',
    year: 2026,
    medium: 'oil',
    width: 170,
    height: 200,
    status: 'available',
  },
  {
    slug: 'blue-room',
    image: 'blue-bedroom.webp',
    title: 'Presence in Absence',
    title_de: 'Präsenz in Absenz',
    year: 2025,
    medium: 'oil',
    width: 160,
    height: 140,
    status: 'available',
    recent: true,
    featured: true,
  },
  {
    slug: 'poolside',
    image: 'Synkope 2027.webp',
    title: 'Synkope',
    title_de: 'Synkope',
    year: 2025,
    medium: 'oil',
    width: 200,
    height: 250,
    status: 'sold',
    recent: true,
    featured: true,
  },
  {
    slug: 'chekhovs-gun-i',
    image: 'Chekhov\'s gun I, Aquarellstift auf Leinwand, 40 x 30 cm, 2025.webp',
    title: "Chekhov's gun I",
    title_de: "Chekhov's gun I",
    year: 2025,
    medium: 'watercolor',
    mediumNote: 'Aquarelle pencil on canvas',
    mediumNote_de: 'Aquarellstift auf Leinwand',
    width: 40,
    height: 30,
    status: 'available',
  },
  {
    slug: 'chekhovs-gun-ii',
    image: 'Chekhov\'s gun II, Aquarellstift auf Leinwand, 40 x 30, 2025.webp',
    title: "Chekhov's gun II",
    title_de: "Chekhov's gun II",
    year: 2025,
    medium: 'watercolor',
    mediumNote: 'Aquarelle pencil on canvas',
    mediumNote_de: 'Aquarellstift auf Leinwand',
    width: 40,
    height: 30,
    status: 'available',
  },
  {
    slug: 'nude-on-canvas',
    image: 'nude-on-canvas.webp',
    title: "Chekhov's gun III",
    title_de: "Chekhov's gun III",
    year: 2025,
    medium: 'watercolor',
    mediumNote: 'Aquarelle pencil on canvas',
    mediumNote_de: 'Aquarellstift auf Leinwand',
    width: 40,
    height: 30,
    status: 'available',
  },
  {
    slug: 'cowrie',
    image: 'cowrie.webp',
    title: 'Embrace',
    title_de: 'Embrace',
    year: 2025,
    medium: 'oil',
    width: 60,
    height: 80,
    status: 'available',
  },
  {
    slug: 'chandelier',
    image: 'chandelier.webp',
    title: 'Babylon',
    title_de: 'Babylon',
    year: 2024,
    medium: 'acrylic',
    width: 140,
    height: 115,
    status: 'available',
  },
  {
    slug: 'reclining-figure',
    image: 'reclining-study.webp',
    title: 'Running from a body',
    title_de: 'Running from a body',
    year: 2024,
    medium: 'oil',
    mediumNote: 'Oil on paper on wood',
    mediumNote_de: 'Öl auf Papier auf Holz',
    width: 29.7,
    height: 42,
    status: 'available',
  },
  {
    slug: 'big-cat',
    image: 'big-cat-watercolour.webp',
    title: 'Anaemia',
    title_de: 'Anaemia',
    year: 2024,
    medium: 'oil',
    mediumNote: 'Oil on paper on wood',
    mediumNote_de: 'Öl auf Papier auf Holz',
    width: 29.7,
    height: 42,
    status: 'available',
  },
  {
    slug: 'torso-i',
    image: 'Torso |, Öl auf Papier auf Holz, 22 x 17 cm, 2024.webp',
    title: 'Torso |',
    title_de: 'Torso |',
    year: 2024,
    medium: 'oil',
    mediumNote: 'Oil on paper on wood',
    mediumNote_de: 'Öl auf Papier auf Holz',
    width: 22,
    height: 17,
    status: 'available',
  },
  {
    slug: 'torso-ii',
    image: 'Torso ||, Öl auf Papier auf Holz, 22 x 17, 2024.webp',
    title: 'Torso ||',
    title_de: 'Torso ||',
    year: 2024,
    medium: 'oil',
    mediumNote: 'Oil on paper on wood',
    mediumNote_de: 'Öl auf Papier auf Holz',
    width: 22,
    height: 17,
    status: 'available',
  },
  {
    slug: 'warm-tears-taste-better',
    image: 'Warm tears taste better, Acryl, Öl auf Leinwand, 180 x 210 cm, 2024.webp',
    title: 'Warm tears taste better',
    title_de: 'Warm tears taste better',
    year: 2024,
    medium: 'mixed',
    mediumNote: 'Acrylic, oil on canvas',
    mediumNote_de: 'Acryl, Öl auf Leinwand',
    width: 180,
    height: 210,
    status: 'sold',
  },
  {
    slug: 'reclining-pool',
    image: 'reclining-pool.webp',
    title: 'Jetzt ist es Wasser, es gefriert',
    title_de: 'Jetzt ist es Wasser, es gefriert',
    year: 2023,
    medium: 'oil',
    width: 140,
    height: 113,
    status: 'sold',
    recent: true,
    featured: true,
  },
  {
    slug: 'bathing',
    image: 'bathroom.webp',
    title: 'Solve et coagula',
    title_de: 'Solve et coagula',
    year: 2023,
    medium: 'oil',
    width: 145,
    height: 200,
    status: 'sold',
    recent: true,
    featured: true,
  },
  {
    slug: 'operating-theatre',
    image: 'operating-room.webp',
    title: "Baby's infertility",
    title_de: "Baby's infertility",
    year: 2022,
    medium: 'oil',
    width: 180,
    height: 130,
    status: 'available',
    recent: true,
    featured: true,
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
