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
