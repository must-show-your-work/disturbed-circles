# disturbed-circles

Personal / project blog. Static content via [Zola](https://www.getzola.org/), interactive components via [Svelte](https://svelte.dev/) (built with Vite into `static/svelte/`, embedded by Zola templates).

## Layout

```
content/        — Zola markdown (pages, posts)
templates/      — Tera templates (base.html, index.html, page.html)
templates/partials/   — resume.html, the hand-authored résumé body
templates/shortcodes/ — m.html / mb.html (raw-passthrough math)
sass/           — SCSS, compiled to public/main.css
static/         — assets served verbatim; static/svelte/ is Vite's output
svelte/         — Svelte components (Vite-built)
public/         — Zola build output (gitignored)
config.toml     — Zola config
justfile        — task runner
flake.nix       — devshell (zola, nodejs, pnpm, just)
```

## Run

```
nix develop
just serve           # svelte build → résumé PDF → zola serve --open
just build           # same, ending in a static build to public/
just pdf             # just the résumé PDF
```

Binds `0.0.0.0:1111` and sets `--base-url` to this box's LAN address, so the site is reachable from anywhere on the network.

## Writing

**Section indices are generated.** A section's `_index.md` needs only its prose; `templates/index.html` lists the section's pages from the filesystem. Don't hand-maintain an entry list.

**The sidebar is generated too.** `base.html` walks the top-level sections, so a new `content/<name>/_index.md` appears in the nav on its own. Per-section front matter controls it:

```toml
weight = 30                  # nav order (ascending); ties fall back to title
[extra]
nav_title = "short label"    # link text, defaults to `title`
titles_are_dates = true      # suppress the date stamp where the title IS the date
```

**Math.** KaTeX is bundled into `static/svelte/main.js` and auto-renders on every page — no CDN, works offline.

**Inline maths is `$$…$$`.** A single `$` is deliberately *not* a delimiter, so bare dollars in prose (Lean antiquotations like `` `q($a ∧ $b)` ``, shell vars) stay literal instead of being swallowed as maths. Spaces inside are fine (`$$ x $$`).

Note this inverts the usual convention, where `$$` means *display*. Display maths here comes from the `{% mb() %}` shortcode below — which is also what you want for anything multi-line, since that's exactly where the escaping rule below bites hardest.

`\(…\)` and `\[…\]` are wired up but **cannot be typed in markdown** — see the table. They exist for the shortcodes.

*The one rule:* markdown eats a backslash before **ASCII punctuation**, but leaves a backslash before a **letter** alone. So the entire named vocabulary is safe — `\mathcal{F}`, `\alpha`, `\int`, `\subseteq`, `\frac`, `\begin{…}` all pass through untouched. Underscores and asterisks inside maths are safe too (no stray emphasis).

What gets eaten, and the letter-only spelling to use instead:

| Don't | Becomes | Use |
|---|---|---|
| `\{` `\}` | `{` `}` — braces silently vanish | `\lbrace` `\rbrace` |
| `\\` (row break) | `\` — rows silently collapse | `\cr` |
| `\,` | `,` — literal comma | `\thinspace` |
| `\(` `\)` `\[` `\]` | `(` `)` `[` `]` — no maths at all | `$$…$$` |

The first two fail **silently** — KaTeX reports no error, it just renders the wrong thing. Watch for them in set-builder notation and in `cases` / `aligned` / `pmatrix`.

For anything gnarlier, the shortcodes pass their bodies through raw, so plain LaTeX works verbatim:

```
inline: {% m() %}\int_0^\infty e^{-x^2}\,dx{% end %}

display:

{% mb() %}
\begin{aligned} a &= b \\ c &= d \end{aligned}
{% end %}
```

**The résumé** is hand-authored HTML, not markdown. The single source is `templates/partials/resume.html` — a body fragment with semantic classes and no Tera in it; edit it as plain HTML. It is rendered twice:

- `templates/resume.html` → `/resume/`, inside the normal site chrome. Styled by the `.resume` block in `main.scss`.
- `templates/resume-print.html` → `/resume/print/`, a bare document with no stylesheet link, which `just pdf` hands to weasyprint to produce `static/resume.pdf` (linked from the page, gitignored, rebuilt each run).

Print styling lives in `sass/resume-print.scss` (`@page` size and margins, `break-inside` rules). Both stylesheets `@import "palette"` from `sass/_palette.scss` so screen and print can't drift.

*Elapsed years* ("fifteen years building…") are computed, not typed. `config.toml` holds `extra.career_start` and `extra.number_words`; the templates spell out `now() - career_start` and wrap it in `<span class="years-since" data-since="…">`. `main.ts` re-derives it in the browser on load, so the web copy is right even if a New Year passes without a redeploy. WeasyPrint runs no JS, so the PDF is fixed at `just pdf` time. Add `data-caps="1"` at a sentence start.

*Director's commentary.* The HTML comments in the résumé source are an easter egg for anyone reading view-source. They are **web-only by design** — WeasyPrint discards comments, and surfacing them in the PDF would mean invisible text, which is indistinguishable from ATS keyword-stuffing to a screening tool. Write them freely; they never reach the PDF.

WeasyPrint is not a browser: flexbox works, **CSS grid largely does not**. Keep the résumé's layout to flex and normal flow.

**Code blocks** are highlighted by [giallo](https://github.com/getzola/giallo) (Zola 0.22+, *not* syntect — theme names and config differ from older docs). Theme is `gruvbox-dark-medium`; `lean`, `nix`, `rust`, `toml` and ~220 other grammars are built in.

## Deploy

GH Actions workflow at `.github/workflows/deploy.yml` builds and deploys to GitHub Pages on push to `main`. Configure the repo's Pages source to "GitHub Actions" in repo settings before the first push.

## Stack notes

- Zola 0.21+ (Tera templates, SCSS compilation, RSS feed generation)
- Node 22, pnpm
- Svelte 5 (runes mode: `$state`, `$derived`, etc.) — minimal Vite scaffold, no SvelteKit
- Vite outputs a single ES module entry at `static/svelte/main.js` plus chunks; the template at `templates/index.html` references it via `<script type="module" src="...">`


# Roadmap

## LOG aggregation

each project has a LOG.md, break it into entries, format and display it in a nice way

## Blog

standard blog content, separate from the main content

## Atlas index

self-explanatory, all the atlas pages aggregate down to this.

## Wiki

probably mostly automated
