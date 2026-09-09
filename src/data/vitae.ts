/* Biographical timeline shown under the artist text in the About section.
 * Kept in English only (not translated), same as exhibition titles. */

export interface VitaeEntry {
  year: string;
  detail: string;
}

export const vitae: VitaeEntry[] = [
  { year: 'b. 1999', detail: 'in Magdeburg, Germany' },
  { year: '2005–2008', detail: 'private lessons by contemporary artist in Magdeburg' },
  { year: '2008–2014', detail: 'participant in classes at Jugendkunstschule Magdeburg' },
  { year: '2014–2016', detail: 'student at Burggymnasium Wettin, specialized visual arts class' },
  { year: '2018–2025', detail: 'Fine arts student at the Dresden University of Fine Arts, class of Christian Macketanz' },
  { year: 'since 2025', detail: 'Fine arts master student in the class of Christian Macketanz' },
];
