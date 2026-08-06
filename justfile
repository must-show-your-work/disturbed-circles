set shell := ["bash", "-euo", "pipefail", "-c"]

# Build the svelte bundle into static/svelte/, then serve the site on the LAN.
# --base-url is pinned to this box's LAN address: zola bakes absolute URLs into
# the output, and the default (the bind interface) would emit unroutable
# http://0.0.0.0/ links to every other machine on the network.
serve: pdf
    zola serve --interface 0.0.0.0 --base-url "$(ip route get 1.1.1.1 | awk '{print $7; exit}')" --open

# Full static build into public/.
build: pdf
    zola build

# Render the résumé to static/resume.pdf, where zola will pick it up as an
# ordinary static asset. This needs a throwaway `zola build` first, because the
# source it renders — /resume/print/ — and the stylesheet it uses are both
# produced by zola. weasyprint gets the CSS via -s rather than a <link> so the
# render stays offline and independent of base_url.
pdf: svelte
    zola build
    weasyprint -s public/resume-print.css public/resume/print/index.html static/resume.pdf

svelte:
    [ -d svelte/node_modules ] || (cd svelte && pnpm install)
    cd svelte && pnpm build
