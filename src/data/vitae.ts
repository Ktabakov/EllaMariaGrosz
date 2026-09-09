/* Biographical timeline shown under the artist text in the About section. */

export interface Localized {
  en: string;
  de: string;
}

export interface VitaeEntry {
  year: Localized;
  detail: Localized;
}

export const vitae: VitaeEntry[] = [
  {
    year: { en: 'b. 1999', de: 'geb. 1999' },
    detail: { en: 'in Magdeburg, Germany', de: 'in Magdeburg, Deutschland' },
  },
  {
    year: { en: '2005–2008', de: '2005–2008' },
    detail: {
      en: 'private lessons by contemporary artist in Magdeburg',
      de: 'Privatunterricht bei einem zeitgenössischen Künstler in Magdeburg',
    },
  },
  {
    year: { en: '2008–2014', de: '2008–2014' },
    detail: {
      en: 'participant in classes at Jugendkunstschule Magdeburg',
      de: 'Teilnahme an Kursen der Jugendkunstschule Magdeburg',
    },
  },
  {
    year: { en: '2014–2016', de: '2014–2016' },
    detail: {
      en: 'student at Burggymnasium Wettin, specialized visual arts class',
      de: 'Schülerin des Burggymnasiums Wettin, Fachklasse Bildende Kunst',
    },
  },
  {
    year: { en: '2018–2025', de: '2018–2025' },
    detail: {
      en: 'Fine arts student at the Dresden University of Fine Arts, class of Christian Macketanz',
      de: 'Studium der Freien Kunst an der Hochschule für Bildende Künste Dresden, Klasse Christian Macketanz',
    },
  },
  {
    year: { en: 'since 2025', de: 'seit 2025' },
    detail: {
      en: 'Fine arts master student in the class of Christian Macketanz',
      de: 'Meisterschülerin in der Klasse von Christian Macketanz',
    },
  },
];

export function pickLocalized(value: Localized, locale: 'en' | 'de'): string {
  return value[locale] ?? value.en;
}
