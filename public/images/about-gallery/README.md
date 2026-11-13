# About photo gallery

Drop personal photos here. They appear automatically in a horizontal strip at the bottom of the About page.

## How to add photos

1. Add image files to this folder (`public/images/about-gallery/`).
2. Supported formats: **JPG / JPEG / PNG / WebP** (also GIF).
3. Name files clearly, for example:
   - `delhi-family.jpg`
   - `boulder-hike.webp`
   - `tennis-2024.png`
4. Rebuild or redeploy the site. No code changes needed — the About page globs this folder at build time.

## Optional captions

Create `captions.json` in this folder to label photos by filename:

```json
{
  "delhi-family.jpg": "Family in Delhi",
  "boulder-hike.webp": "Trail near Boulder"
}
```

Filenames are matched exactly (including extension). Photos without an entry still show; the alt text falls back to the filename.

## Notes

- Do not put the portrait here — the About page already uses `/images/portrait.jpg`.
- Keep originals reasonably sized (roughly under ~2 MB each) for faster loads.
- This `README.md` and `captions.json` are ignored by the gallery glob.
