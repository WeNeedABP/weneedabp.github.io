# WeNeedABP

A minimal academic website collecting AI-generated results and human digestions in Krylov–Safonov theory.

## GitHub Pages

Intended repository: `WeNeedABP/weneedabp.github.io`.
Intended public URL: https://weneedabp.github.io/

In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**. The site is plain HTML and CSS; it requires no build step, JavaScript, package installation, or external fonts. `.nojekyll` tells GitHub Pages to serve these static files directly.

All internal links are relative, so the same files also work at a project-site URL before the repository is renamed.

## Pages

- `index.html`: project, team, and invitation to collaborate.
- `ai.html`: AI result entries, separated by horizontal rules.
- `human.html`: human digestions, linked to their corresponding AI results.
- `future.html`: future-work introduction.
- `prompt-kinetic-krylov-safonov.html`: original prompt and research-procedure download.
- `assets/style.css`: shared styling.
- `assets/files/`: original source ZIP, PDF, research-procedure Markdown, original RTF, and a plain-text transcription of the prompt.

The original uploads are preserved byte for byte. The research-procedure file was renamed to `mathematical_research_goal.md` to match its name in the prompt. The prompt page preserves the text, LaTeX, and literal backslash escapes from the supplied RTF.

Source ZIP SHA-256:

```text
0d219e420e6d5b1a55eac8f22cd9bbb1fdd8bc978f0941a7b986491921896518
```

## Updating the collection

Copy an existing `<article class="entry">` in `ai.html` or `human.html`, give it a unique `id`, and update its content. Use that ID in links from the corresponding entry on the other page. Put supporting files in `assets/files/`. Add a separate prompt page when publishing a new AI result.

To preview locally, run `python3 -m http.server 8000` from the repository root and visit http://localhost:8000/.

## Visual references

The white background and restrained academic layout follow https://lukasniebel.github.io/. Muted red accents adapt the maroon palette at https://math.uchicago.edu/~luis/. The implementation is original, with system fonts, responsive layouts, keyboard focus indicators, and a skip link.
