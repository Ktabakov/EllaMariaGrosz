/* Central place for the artist's contact + identity details.
 * Edit these once and they update across the whole site + SEO data. */

export const site = {
  name: 'Ella Maria Gross',
  email: 'ellamariagross@web.de',
  instagram: 'https://instagram.com/ellamariagross',
  instagramHandle: '@ellamariagross',
  studio: {
    street: 'Grossenhainer Straße 99',
    postalCode: '01127',
    city: 'Dresden',
    country: 'Germany',
    countryCode: 'DE',
  },
  jobTitle: 'Contemporary Oil Painter',
} as const;

export const studioAddressLines = [
  site.studio.street,
  `${site.studio.postalCode} ${site.studio.city}`,
];
