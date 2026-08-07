import { mount } from 'svelte';
import renderMathInElement from 'katex/contrib/auto-render';
import 'katex/dist/katex.min.css';
import App from './App.svelte';

const target = document.getElementById('svelte-root');

if (target) {
  mount(App, { target });
}

renderMathInElement(document.body, {
  delimiters: [
    // $$…$$ is INLINE here, not display — the usual convention is inverted on
    // purpose. Single $ is not a delimiter at all: prose in these notes uses
    // bare dollars (Lean antiquotations, shell vars) that would otherwise get
    // swallowed as math, and nearly all the maths written here is inline.
    { left: '$$', right: '$$', display: false },
    // Emitted by the mb/m shortcodes, which pass their bodies through raw.
    // Unreachable from markdown, where \[ and \( are eaten as escapes — so
    // {% mb() %} is the way to get display maths.
    { left: '\\[', right: '\\]', display: true },
    { left: '\\(', right: '\\)', display: false }
  ],
  throwOnError: false
});

// Re-derive the résumé's "N years" figures against the visitor's clock. Zola
// already rendered the correct value at build time — this only matters when a
// New Year passes without a redeploy, and it is why the PDF (no JS) is pinned
// to whatever `just pdf` saw. Keep in step with `number_words` in config.toml.
const NUMBER_WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one',
  'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six',
  'twenty-seven', 'twenty-eight', 'twenty-nine', 'thirty'
];

for (const el of document.querySelectorAll<HTMLElement>('.years-since')) {
  const since = Number(el.dataset.since);
  if (!Number.isFinite(since)) continue;

  const elapsed = new Date().getFullYear() - since;
  const word = NUMBER_WORDS[elapsed] ?? String(elapsed);

  el.textContent = el.dataset.caps ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}
