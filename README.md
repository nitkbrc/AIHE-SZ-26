# AIHE-SZ-26

Static website for the NITK & AIU South Zone Conference on AI in Higher
Education, 18 September 2026.

## Preview locally

The website has no build step. Run a small local server from the repository
root:

```bash
python3 -m http.server 8000 --directory docs
```

Open `http://localhost:8000`.

## Editing conference content

Most routine updates are made in one file:

```text
docs/js/content.js
```

The `window.SITE` object contains:

- Event title, date, venue and registration link
- Navigation and brochure links
- About text, institutions, highlights and themes
- Speakers and their photographs
- Coordinators and organizing committees
- Sponsorship tiers, benefits, payment and contact details
- Footer and assistance details

### Add or update a speaker

1. Place the photograph in `docs/assets/photos/`.
2. Add an entry to the `speakers` array in `docs/js/content.js`:

```js
{
  name: "Dr. Speaker Name",
  role: "Keynote Speaker",
  organisation: "University or organisation",
  photo: "assets/photos/speaker-name.jpg",
}
```

The Speakers section is automatically hidden while the array is empty and
appears as soon as a speaker is added.

### Update a coordinator photograph

Place the image in `docs/assets/photos/`, then set the person's `photo` value:

```js
photo: "assets/photos/coordinator-name.jpg",
```

An initials-based placeholder is shown when the value is empty.

## GitHub Pages

The site is deployed from the `docs/` folder by GitHub Actions on every push to
`main` (see `.github/workflows/deploy-pages.yml`).

1. Open repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab).

The live site will be available at:

```text
https://nitkbrc.github.io/AIHE-SZ-26/
```
