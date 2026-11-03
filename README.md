# World Peace Engine Labs – plain Svelte

Port of the Webflow page (`world-peace-engine-labs-a007dc.webflow.io`) to Svelte 4 + Vite.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # -> dist/
npm run preview
```

## Structure

| Path                  | What it is                                                                 |
| --------------------- | -------------------------------------------------------------------------- |
| `src/App.svelte`      | The whole page markup (Webflow class names kept 1:1)                       |
| `src/webflow.css`     | Original Webflow stylesheet, unchanged apart from asset paths              |
| `src/lib/actions.js`  | `reveal` (fade-in on scroll) and `bgvideo` (autoplay background video)     |
| `public/img/`         | All images/videos from the download (flat, hashed Webflow file names)      |
| `index.html`          | Title, meta, favicon, Google Fonts (Exo, Epilogue)                         |

## What changed vs. Webflow

- Webflow JS (jQuery, IX2, webfont loader) removed. Scroll fade-ins now use `use:reveal`.
- The two Embedly YouTube iframes are plain `youtube-nocookie.com` embeds.
- The two background videos are normal `<video>` tags (mp4 + webm, poster images).
- Fonts come from Google Fonts via `index.html` instead of the WebFont loader.
- File names with spaces/parentheses were renamed, e.g. `Waka_final (1).png` -> `Waka_final_1_.png`.

## Replacing media

Overwrite files in `public/img/` (keep the name) or change the path in `App.svelte`.
To rename things properly later, search/replace the hash names in `App.svelte`.
