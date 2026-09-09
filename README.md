# Ella Maria Gross — Artist Portfolio

A fast, bilingual (English / German) portfolio website for selling original
paintings, built with [Astro](https://astro.build/).

Studio: Dresden, Germany.

---

## Running the site locally

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:4321
npm run build    # build the final site into /dist
npm run preview  # preview the built site
```

---

## ✏️ How to add a painting (the important part)

It takes two steps.

### 1. Add the image

Put the image file in:

```
src/assets/images/paintings/
```

- Use **`.webp`** or **`.jpg`** (not `.jfif`).
- Roughly **2000px** on the longest side is perfect — large enough to look
  crisp, and Astro automatically compresses and resizes it for every screen.

### 2. Add the details

Open **`src/data/paintings.ts`** and copy one of the existing blocks:

```ts
{
  slug: 'sunrise-over-elbe',        // web address id (lowercase-with-dashes)
  image: 'sunrise-over-elbe.webp',  // the file name you just added
  title: 'Sunrise over the Elbe',
  year: 2025,
  medium: 'oil',                    // 'oil' | 'mixed' | 'acrylic' | 'watercolor'
  width: 100,                       // cm (optional)
  height: 70,                       // cm (optional)
  price: 1800,                      // euros, a plain number. Remove if not for sale.
  status: 'available',              // 'available' | 'sold' | 'reserved'
  recent: true,                     // optional: show under the "Recent" filter
  featured: true,                   // optional: show on the home page
  description: 'A short English note about the piece.',     // optional
  description_de: 'Eine kurze Notiz auf Deutsch.',          // optional
},
```

Save the file — the painting now appears in the gallery, gets its own page
(e.g. `/en/portfolio/sunrise-over-elbe`), an "Inquire to buy" button that
emails you about that exact painting, and price/availability data that Google
can read.

**To mark a painting as sold:** change `status` to `'sold'` (you can leave the
price; it won't be shown).

---

## Adding news, press or exhibitions

Edit **`src/data/updates.ts`**. Each entry has English (`en`) and German (`de`)
text. Images are optional — drop them in `src/assets/images/updates/` and set
`image: 'file.webp'`. If you leave the image out, a tidy placeholder is shown
so nothing ever looks broken.

---

## Changing contact details

All of the artist's details (email, Instagram, studio address) live in one
file: **`src/lib/site.ts`**. Editing them there updates the whole site,
including the SEO/structured data.

---

## Before going live

In **`astro.config.mjs`**, change `site` to the real domain. It is currently:

```js
site: 'https://ellamariagrosz.github.io',
```

This value is used for the sitemap, canonical URLs and social-share links, so
search engines and link previews work correctly. Also update the URL in
`public/robots.txt`.

---

## Project structure

```
src/
  assets/images/paintings/   ← drop painting images here
  assets/images/updates/     ← drop news/press/exhibition images here
  components/                ← reusable cards (PaintingCard, UpdateCard)
  data/paintings.ts          ← the painting catalogue (edit this)
  data/updates.ts            ← news / press / exhibitions
  i18n/                      ← English + German interface text
  layouts/Layout.astro       ← shared page shell, SEO, header, footer
  lib/                       ← helpers (images, prices, site config)
  pages/[lang]/              ← the actual pages
  styles/style.css           ← all styling
public/                      ← favicon, robots.txt, scripts
```
