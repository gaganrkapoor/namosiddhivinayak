# Namo Siddhivinayak — Website

Single-page, mobile-first static website for **namosiddhivinayak.com.au** — an informational
"about the shop" page for the Campsie store, built to funnel visitors to the online shop at
**store.namosiddhivinayak.com.au**. It's not a storefront itself: no products, prices, cart or
search — just who we are, what we stock, and how to find us or shop online.

Plain HTML/CSS/JS — no build step, no framework, no dependencies (other than the Google Fonts
CDN link for the Poppins typeface).

## Structure

```
index.html              Single page: header/nav, hero intro, what-we-stock pantries,
                         about, brands strip, store info + map, footer
assets/css/style.css     All styling (theme colours as CSS variables at the top)
assets/js/main.js        Mobile menu toggle
assets/logo/             Logo image (ns-logo-no-bg.png) + favicon.png (see PLACE_LOGO_HERE.txt)
assets/img/              Reserved for future banner/brand images (e.g. assets/img/brands/)
CNAME                    GitHub Pages custom domain file (namosiddhivinayak.com.au)
robots.txt               Allows crawling, points crawlers to sitemap.xml
sitemap.xml              Single-URL sitemap for the homepage
```

## Adding the logo

Logo files live in `assets/logo/`:

- `ns-logo-no-bg.png` — header/footer logo (already in place)
- `favicon.png` — browser tab icon (still to add)

`index.html` references the logo by this exact filename — if you swap in a differently-named
file, update the `src="assets/logo/..."` references in `index.html` to match, or rename the
file back to `ns-logo-no-bg.png`. The page falls back to a text wordmark automatically if the
logo file is missing.

## Theme

Colour tokens live as CSS variables at the top of `assets/css/style.css`:

| Token | Value |
|---|---|
| Brand background | `#E21134` |
| Brand gradient | `linear-gradient(135deg, rgb(201,15,46) 0%, rgb(226,17,52) 70%, rgb(245,180,0) 100%)` |
| Text on brand | `#FFFFFF` |
| Link hover | `#000000` |
| Input background / text / border | `#FFFFFF` / `#000000` / `#EEEEEE` |
| Button background / label | `#FED700` / `#000000` |
| Button hover background / label | `#000000` / `#FFFFFF` |
| Outline button | `#00A550` |

## Running locally

No build tooling required — just open `index.html` in a browser, or serve the folder with
any static file server, e.g.:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder as its own GitHub repository.
2. In the repo settings → Pages, set the source to the `main` branch, root folder.
3. Keep (or edit) the `CNAME` file so it matches the custom domain you want GitHub Pages to
   serve (currently set to `namosiddhivinayak.com.au`).
4. Point your domain's DNS at GitHub Pages per
   [GitHub's custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)
   (an `A`/`ALIAS` record for the apex domain, and/or a `CNAME` record for `www`).

All "Shop Online" / "Shop →" calls to action link to `https://store.namosiddhivinayak.com.au`.

## SEO & local search

The page is set up for local search discovery (e.g. "Indian grocery near Campsie"):

- `<title>` and meta description name Campsie plus Indian/Nepali/Fiji explicitly.
- `GroceryStore` JSON-LD in `index.html`'s `<head>` gives Google the address, phone, opening
  hours, and an `areaServed` `GeoCircle` with a **7km radius** centred on the store.
- Open Graph / Twitter tags for link-preview cards.
- `robots.txt` + `sitemap.xml` for crawling.
- Body copy on the About section names nearby suburbs (Canterbury, Belmore, Lakemba, Earlwood,
  Ashfield, Croydon Park, Belfield) — on-page text search engines can match, not just metadata.

**Two things to double-check / do next**, since these aren't things I can verify or do for you:

1. **Geo coordinates** — the JSON-LD uses an approximate lat/long for 268 Beamish St, Campsie
   (`-33.9143, 151.1041`). Get the exact coordinates from Google Maps (right-click the pin →
   the lat/long shown at the top) and update the two `"latitude"`/`"longitude"` pairs in the
   `<script type="application/ld+json">` block in `index.html`.
2. **Google Business Profile** — appearing in Google's local "near me" map pack for a 7km radius
   depends far more on a verified [Google Business Profile](https://www.google.com/business/)
   listing (with matching name/address/phone and customer reviews) than on this website alone.
   This site's structured data reinforces that listing once it exists, but doesn't replace it —
   set one up (or verify the existing one) with the same address and phone number used here.

After deploying, submit the site in [Google Search Console](https://search.google.com/search-console)
and submit `sitemap.xml` there so Google indexes it faster.
