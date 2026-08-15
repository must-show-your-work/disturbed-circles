set shell := ["bash", "-euo", "pipefail", "-c"]

serve: build
    zola --root .build/site serve --interface 0.0.0.0 --base-url "$(ip route get 1.1.1.1 | awk '{print $7; exit}')" --open --extra-watch-path ../../content --extra-watch-path ../../templates --extra-watch-path ../../sass --extra-watch-path ../../config.toml

build: pdf logs stage
    zola --root .build/site build --output-dir public --force

pdf: svelte logs stage
    zola --root .build/site build --output-dir public --force
    weasyprint -s public/resume-print.css public/about/resume/print/index.html static/resume.pdf

check: stage
    zola --root .build/site check

new-log slug title="" section="":
    bin/new-log "{{slug}}" "{{title}}" "{{section}}"

logs:
    bin/build-logs --prefer "${LOGS_PREFER:-path}"

stage: logs
    bin/stage-site

svelte:
    [ -d svelte/node_modules ] || (cd svelte && pnpm install)
    cd svelte && pnpm build
