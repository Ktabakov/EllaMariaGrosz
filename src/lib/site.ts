/* Central place for the artist's contact + identity details.
 * Edit these once and they update across the whole site + SEO data. */

export const site = {
  name: 'Ella Maria Grosz',
  email: 'ellamariagross@web.de',
  instagram: 'https://instagram.com/ellamariagross',
  instagramHandle: '@ellamariagross',
  studio: {
    street: 'Schandauer Str. 64',
    postalCode: '01277',
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
