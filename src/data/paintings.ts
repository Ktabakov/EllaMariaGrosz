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
 *    description optional short text shown on the artwork page (EN)
 *    description_de optional German version of that text
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
  description?: string;
  description_de?: string;
}

// Ordered newest → oldest by year, so the top of the portfolio grid shows recent work first.
export const paintings: Painting[] = [
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
    description:
      'A bedroom dissolving into deep blue, where a golden figure pours across the bed like liquid light. Memory and matter blur in a single dreamlike interior.',
    description_de:
      'Ein Schlafzimmer, das in tiefes Blau zerfließt, während eine goldene Gestalt wie flüssiges Licht über das Bett strömt. Erinnerung und Materie verschwimmen in einem traumartigen Interieur.',
  },
  {
    slug: 'poolside',
    image: 'poolside.webp',
    title: 'Synkope',
    title_de: 'Synkope',
    year: 2025,
    medium: 'oil',
    width: 200,
    height: 250,
    status: 'available',
    recent: true,
    featured: true,
    description:
      'An empty indoor pool in green and ochre, a classical figure reclining at its edge. The tiled water holds a strange, suspended calm.',
    description_de:
      'Ein leeres Hallenbad in Grün und Ocker, am Rand eine ruhende klassische Gestalt. Das gekachelte Wasser bewahrt eine seltsame, schwebende Ruhe.',
  },
  {
    slug: 'nude-on-canvas',
    image: 'nude-on-canvas.webp',
    title: "Chekhov's gun |",
    title_de: "Chekhov's gun |",
    year: 2025,
    medium: 'watercolor',
    mediumNote: 'Aquarelle pencil on canvas',
    mediumNote_de: 'Aquarellstift auf Leinwand',
    width: 40,
    height: 30,
    status: 'available',
    description:
      'A reclining nude laid down in sepia on raw, unprimed canvas — a quiet meditation on the figure stripped back to earth and line.',
    description_de:
      'Ein liegender Akt, in Sepia auf rohe, ungrundierte Leinwand gesetzt – eine stille Meditation über die auf Erde und Linie reduzierte Figur.',
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
    description:
      'A single cowrie shell resting against a field of blue — small, intimate and precisely observed.',
    description_de:
      'Eine einzelne Kaurimuschel vor einem Feld aus Blau – klein, intim und genau beobachtet.',
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
    description:
      'A sepia underpainting of a chandelier interior, rendered almost as a memory — warm monochrome glazes building a hushed, half-lit room.',
    description_de:
      'Eine Sepia-Untermalung eines Interieurs mit Kronleuchter, fast wie eine Erinnerung wiedergegeben – warme monochrome Lasuren bauen einen stillen, halb erleuchteten Raum auf.',
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
    description:
      'A loose oil study of a reclining figure in green, pink, turquoise and ochre — gestural, immediate and alive with colour.',
    description_de:
      'Eine lockere Ölstudie einer liegenden Gestalt in Grün, Rosa, Türkis und Ocker – gestisch, unmittelbar und voller Farbe.',
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
    slug: 'reclining-pool',
    image: 'reclining-pool.webp',
    title: 'Jetzt ist es Wasser, es gefriert',
    title_de: 'Jetzt ist es Wasser, es gefriert',
    year: 2023,
    medium: 'oil',
    width: 140,
    height: 113,
    status: 'available',
    recent: true,
    featured: true,
    description:
      'A figure lies on yellow poolside tiles beside still blue water, the scene bursting at one edge into a tangle of pink and violet bloom.',
    description_de:
      'Eine Gestalt liegt auf gelben Beckenfliesen neben stillem blauem Wasser, während die Szene an einem Rand in ein Gewirr aus rosa und violetter Blüte aufbricht.',
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
    status: 'available',
    recent: true,
    featured: true,
    description:
      'A surreal bathroom where a ghostly white figure sinks into the tub. Soft, dissolving edges turn an ordinary room into something uncanny.',
    description_de:
      'Ein surreales Badezimmer, in dem eine gespenstische weiße Gestalt in der Wanne versinkt. Weiche, sich auflösende Konturen verwandeln einen gewöhnlichen Raum in etwas Unheimliches.',
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
    description:
      'A surreal operating room peopled by suited figures — a theatrical, dreamlike scene that hovers between ritual and clinic.',
    description_de:
      'Ein surrealer Operationssaal voller anzugtragender Gestalten – eine theatralische, traumhafte Szene zwischen Ritual und Klinik.',
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
