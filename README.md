# We need ABP

A minimal academic website collecting expositions, source material, and open problems in Krylov–Safonov theory.

## GitHub Pages

Intended repository: `WeNeedABP/weneedabp.github.io`.
Intended public URL: https://weneedabp.github.io/

In **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**. The site is static HTML and CSS with MathJax for formulas; it requires no build step or package installation. `.nojekyll` tells GitHub Pages to serve these static files directly.

All internal links are relative, so the same files also work at a project-site URL before the repository is renamed.

## Pages

- `index.html`: project, team, and invitation to collaborate.
- `human.html`: expositions, linked to their corresponding source material.
- `ai.html`: source material, currently AI-generated results, separated by horizontal rules.
- `future.html`: open problems and research directions.
- `prompt-kinetic-krylov-safonov.html`: original prompt and research-procedure download.
- `assets/style.css`: shared styling.
- `assets/mathjax-config.js`: shared formula-rendering configuration.
- `assets/files/`: original source ZIP, a test PDF at the exposition link, research-procedure Markdown, and a plain-text transcription of the prompt.

The source ZIP and research-procedure Markdown are preserved byte for byte. `assets/files/NewABP2.pdf` is currently a one-page test placeholder containing only “test”. The research-procedure file was renamed to `mathematical_research_goal.md` to match its name in the prompt. The prompt page preserves the text, LaTeX, and literal backslash escapes from the supplied prompt.

Source ZIP SHA-256:

```text
0d219e420e6d5b1a55eac8f22cd9bbb1fdd8bc978f0941a7b986491921896518
```

## Updating the collection

Copy an existing `<article class="entry">` in `ai.html` or `human.html`, give it a unique `id`, and update its content. Use that ID in links from the corresponding entry on the other page. Put supporting files in `assets/files/`. Add a separate prompt page when publishing a new AI result.

To preview locally, run `python3 -m http.server 8000` from the repository root and visit http://localhost:8000/.

## Writing mathematics

All pages load MathJax 4 from jsDelivr. Use `\( ... \)` or `$ ... $` for inline mathematics, and `\[ ... \]` or `$$ ... $$` for displayed equations in the HTML content. Escape HTML-sensitive characters, such as writing `&lt;` for `<` and `&amp;` for `&`.

The shared configuration loads before MathJax using ordered `defer` scripts. MathJax skips `pre` and `code` blocks, preserving the original prompt and downloadable source text. Formula rendering requires JavaScript and access to the MathJax CDN.

## Visual references

The restrained academic layout follows https://lukasniebel.github.io/, with a `#FAF9F9` background. Muted red accents adapt the maroon palette at https://math.uchicago.edu/~luis/. The implementation is original, with system fonts, responsive layouts, keyboard focus indicators, and a skip link.
