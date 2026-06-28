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
    slug: 'blue-room',
    image: 'blue-bedroom.webp',
    title: 'Blue Room',
    year: 2025,
    medium: 'oil',
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
    title: 'Poolside',
    year: 2025,
    medium: 'oil',
    status: 'available',
    recent: true,
    featured: true,
    description:
      'An empty indoor pool in green and ochre, a classical figure reclining at its edge. The tiled water holds a strange, suspended calm.',
    description_de:
      'Ein leeres Hallenbad in Grün und Ocker, am Rand eine ruhende klassische Gestalt. Das gekachelte Wasser bewahrt eine seltsame, schwebende Ruhe.',
  },
  {
    slug: 'reclining-pool',
    image: 'reclining-pool.webp',
    title: 'By the Water',
    year: 2025,
    medium: 'oil',
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
    title: 'Bathing',
    year: 2025,
    medium: 'oil',
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
    title: 'Operating Theatre',
    year: 2024,
    medium: 'oil',
    status: 'available',
    recent: true,
    featured: true,
    description:
      'A surreal operating room peopled by suited figures — a theatrical, dreamlike scene that hovers between ritual and clinic.',
    description_de:
      'Ein surrealer Operationssaal voller anzugtragender Gestalten – eine theatralische, traumhafte Szene zwischen Ritual und Klinik.',
  },
  {
    slug: 'clinic',
    image: 'clinic.webp',
    title: 'Clinic',
    year: 2024,
    medium: 'oil',
    status: 'available',
    recent: true,
    description:
      'A second medical scene of suited figures gathered around an unseen procedure — composed with the cool strangeness of a remembered dream.',
    description_de:
      'Eine zweite medizinische Szene aus anzugtragenden Gestalten um einen unsichtbaren Eingriff – komponiert mit der kühlen Fremdheit eines erinnerten Traums.',
  },
  {
    slug: 'mirror',
    image: 'mirror-cat.webp',
    title: 'Through the Mirror',
    year: 2024,
    medium: 'oil',
    status: 'available',
    recent: true,
    featured: true,
    description:
      'A close, uneasy view: a pair of eyes caught in a gilt-framed mirror, wax-like flowers dripping at the edges and an orange cat watching from the green.',
    description_de:
      'Ein naher, beunruhigender Blick: ein Augenpaar im goldgerahmten Spiegel, an den Rändern tropfende wächserne Blüten und eine orangefarbene Katze, die aus dem Grün heraus beobachtet.',
  },
  {
    slug: 'chandelier',
    image: 'chandelier.webp',
    title: 'Chandelier',
    year: 2023,
    medium: 'oil',
    status: 'available',
    description:
      'A sepia underpainting of a chandelier interior, rendered almost as a memory — warm monochrome glazes building a hushed, half-lit room.',
    description_de:
      'Eine Sepia-Untermalung eines Interieurs mit Kronleuchter, fast wie eine Erinnerung wiedergegeben – warme monochrome Lasuren bauen einen stillen, halb erleuchteten Raum auf.',
  },
  {
    slug: 'nude-on-canvas',
    image: 'nude-on-canvas.webp',
    title: 'Study in Sepia',
    year: 2023,
    medium: 'oil',
    status: 'available',
    description:
      'A reclining nude laid down in sepia on raw, unprimed canvas — a quiet meditation on the figure stripped back to earth and line.',
    description_de:
      'Ein liegender Akt, in Sepia auf rohe, ungrundierte Leinwand gesetzt – eine stille Meditation über die auf Erde und Linie reduzierte Figur.',
  },
  {
    slug: 'cowrie',
    image: 'cowrie.webp',
    title: 'Cowrie',
    year: 2023,
    medium: 'oil',
    status: 'available',
    description:
      'A single cowrie shell resting against a field of blue — small, intimate and precisely observed.',
    description_de:
      'Eine einzelne Kaurimuschel vor einem Feld aus Blau – klein, intim und genau beobachtet.',
  },
  {
    slug: 'blue-drape',
    image: 'blue-drape.webp',
    title: 'Blue Drape',
    year: 2022,
    medium: 'oil',
    status: 'available',
    description:
      'A patterned blue cloth falls through a grey-green space laced with charcoal underdrawing — paint and drawing held in open tension.',
    description_de:
      'Ein gemustertes blaues Tuch fällt durch einen graugrünen Raum, durchzogen von einer Kohle-Untermalung – Malerei und Zeichnung in offener Spannung.',
  },
  {
    slug: 'reclining-figure',
    image: 'reclining-study.webp',
    title: 'Reclining Figure',
    year: 2022,
    medium: 'oil',
    status: 'available',
    description:
      'A loose oil study of a reclining figure in green, pink, turquoise and ochre — gestural, immediate and alive with colour.',
    description_de:
      'Eine lockere Ölstudie einer liegenden Gestalt in Grün, Rosa, Türkis und Ocker – gestisch, unmittelbar und voller Farbe.',
  },
  {
    slug: 'big-cat',
    image: 'big-cat-watercolour.webp',
    title: 'Big Cat',
    year: 2021,
    medium: 'watercolor',
    status: 'available',
    description:
      'A small watercolour of a great cat in cobalt blue, caught in a few swift, confident washes on cream paper.',
    description_de:
      'Ein kleines Aquarell einer Großkatze in Kobaltblau, in wenigen schnellen, sicheren Lasuren auf cremefarbenem Papier festgehalten.',
  },
  {
    slug: 'pool-interior',
    image: 'pool-interior.webp',
    title: 'Pool Interior',
    year: 2025,
    medium: 'oil',
    status: 'available',
    recent: true,
    description:
      'Green and yellow flood an empty pool room — a ladder, a checkerboard floor and a classical figure share the same impossible light.',
    description_de:
      'Grün und Gelb durchfluten einen leeren Poolraum – eine Leiter, ein Schachbrettboden und eine klassische Gestalt teilen sich dasselbe unmögliche Licht.',
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
