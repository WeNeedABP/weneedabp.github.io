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
- `prompt-kinetic-krylov-safonov.html`: kinetic result prompt and research-procedure download.
- `prompt-pucci-conjecture.html`: Pucci conjecture prompt and research-procedure downloads.
- `prompt-adjoint-llogl.html`: adjoint L log L prompt and research-procedure downloads.
- `assets/style.css`: shared styling.
- `assets/mathjax-config.js`: shared formula-rendering configuration.
- `assets/files/`: original source ZIPs, a test PDF at the exposition link, research-procedure Markdown files, and plain-text prompts.

The source ZIPs and research-procedure Markdown files are preserved byte for byte. `assets/files/NewABP2.pdf` is currently a one-page test placeholder containing only “test”. The research-procedure files are published as `mathematical_research_goal.md` to match their names in the prompts. The prompt pages preserve the text, LaTeX, and literal backslash escapes from the supplied prompts. The Heisenberg entry uses a different research-procedure version, stored at `assets/files/heisenberg/mathematical_research_goal.md` with the uploaded `01-` filename prefix removed. The Pucci entry’s supplied procedure is stored at `assets/files/pucci/mathematical_research_goal.md`, renamed from `attached_research_procedure.md`.

Source ZIP SHA-256 checksums:

| File | SHA-256 |
| --- | --- |
| `kinetic_holder_general_source.zip` | `0d219e420e6d5b1a55eac8f22cd9bbb1fdd8bc978f0941a7b986491921896518` |
| `elliptic_maximum_estimates_tex.zip` | `022b05692ecff0fef1a7cdc711760699a0f3503b31686ca0dc0c61aafd359966` |
| `adjoint_entropy_tex_manuscripts.zip` | `2ee2faf15d5bf621f9862dc5825c8d6d8833fafd5383186a9569c285e42d34f9` |

## Updating the collection

Copy an existing `<article class="entry">` in `ai.html` or `human.html`, give it a unique `id`, and update its content. Use that ID in links from the corresponding entry on the other page. Put supporting files in `assets/files/`. Add a separate prompt page when prompt text is available for a new AI result.

To preview locally, run `python3 -m http.server 8000` from the repository root and visit http://localhost:8000/.

## Writing mathematics

All pages load MathJax 4 from jsDelivr. Use `\( ... \)` or `$ ... $` for inline mathematics, and `\[ ... \]` or `$$ ... $$` for displayed equations in the HTML content. Escape HTML-sensitive characters, such as writing `&lt;` for `<` and `&amp;` for `&`.

The shared configuration loads before MathJax using ordered `defer` scripts. MathJax skips `pre` and `code` blocks, preserving the original prompt and downloadable source text. Formula rendering requires JavaScript and access to the MathJax CDN.
