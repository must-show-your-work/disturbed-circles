<script lang="ts">
  // A contribution-graph for a log section: one grid per calendar year,
  // weeks as columns and weekdays as rows. Entries come from the day links
  // the template already renders, so this works for generated and
  // hand-written sections alike and degrades to the plain list without JS.
  type Entry = { date: string; times: number; href: string; title: string; source?: string };

  let { entries, caption = true }: { entries: Entry[]; caption?: boolean } = $props();

  const DAY_MS = 86_400_000;
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const CELL = 11;
  const GAP = 3;
  const STEP = CELL + GAP;

  // Parse as UTC: `new Date('2024-11-15')` is UTC midnight, but
  // `new Date(2024, 10, 15)` is local, and mixing them shifts days across
  // timezones. Everything here stays in UTC.
  const parse = (iso: string) => new Date(iso + 'T00:00:00Z');
  const dayOfYear = (d: Date) =>
    Math.floor((d.getTime() - Date.UTC(d.getUTCFullYear(), 0, 1)) / DAY_MS);

  // Several sources can land on the same day when this is aggregating a whole
  // log tree, so a date maps to a list rather than a single entry.
  const byDate = $derived.by(() => {
    const m = new Map<string, Entry[]>();
    for (const e of entries) {
      const day = m.get(e.date);
      if (day) day.push(e);
      else m.set(e.date, [e]);
    }
    return m;
  });

  const years = $derived.by(() => {
    const present = [...new Set(entries.map((e) => e.date.slice(0, 4)))]
      .map(Number)
      .sort((a, b) => b - a);

    return present.map((year) => {
      const offset = new Date(Date.UTC(year, 0, 1)).getUTCDay();
      const days = (Date.UTC(year + 1, 0, 1) - Date.UTC(year, 0, 1)) / DAY_MS;

      const cells = [];
      for (let i = 0; i < days; i++) {
        const d = new Date(Date.UTC(year, 0, 1 + i));
        const iso = d.toISOString().slice(0, 10);
        const slot = i + offset;
        const day = byDate.get(iso);
        cells.push({
          iso,
          col: Math.floor(slot / 7),
          row: slot % 7,
          day,
          times: day ? day.reduce((n, e) => n + e.times, 0) : 0,
          // Only link when there is one place to go.
          href: day && day.length === 1 ? day[0].href : null
        });
      }

      // Each month's cells form a rectilinear block: a partial first column,
      // full columns between, and a partial last one. Outlining that is enough
      // to group the months without needing labels.
      const bounds = MONTHS.map((name, m) => {
        const s0 = dayOfYear(new Date(Date.UTC(year, m, 1))) + offset;
        const s1 = dayOfYear(new Date(Date.UTC(year, m + 1, 0))) + offset;
        return {
          name,
          c0: Math.floor(s0 / 7), r0: s0 % 7,
          c1: Math.floor(s1 / 7), r1: s1 % 7
        };
      });

      return { year, cells, bounds, weeks: Math.floor((days + offset - 1) / 7) + 1 };
    });
  });

  // Four buckets, so a day with one note reads differently from a day with five.
  const level = (times: number) => (times >= 5 ? 4 : times >= 3 ? 3 : times >= 2 ? 2 : 1);

  // Trace the month block, hugging the middle of the gutter between cells.
  const X = (c: number) => c * STEP - GAP / 2;
  const Y = (r: number) => r * STEP - GAP / 2;

  const outline = ({ c0, r0, c1, r1 }: { c0: number; r0: number; c1: number; r1: number }) => {
    const pts: [number, number][] = [[X(c0), Y(r0)]];
    if (r0 > 0) pts.push([X(c0 + 1), Y(r0)], [X(c0 + 1), Y(0)]);
    pts.push([X(c1 + 1), Y(0)], [X(c1 + 1), Y(r1 + 1)]);
    if (r1 < 6) pts.push([X(c1), Y(r1 + 1)], [X(c1), Y(7)]);
    pts.push([X(c0), Y(7)]);
    return 'M' + pts.map((p) => p.join(',')).join(' L') + ' Z';
  };

  const plural = (n: number) => `${n} ${n === 1 ? 'entry' : 'entries'}`;

  // `times` counts the timestamped headers in a day's log, so the tooltip says
  // how much was written rather than just that something was. When a day has
  // several sources it breaks them out and gives the total.
  const tip = (day: Entry[]) => {
    if (day.length === 1) {
      const [e] = day;
      const who = e.source ? `${e.source}: ` : '';
      return e.times > 0 ? `${who}${e.title} (${plural(e.times)})` : `${who}${e.title}`;
    }
    const parts = day.map((e) => `${e.source ?? e.title} (${e.times})`).join(', ');
    return `${day[0].date}: ${parts}; ${plural(day.reduce((n, e) => n + e.times, 0))} total`;
  };

  // One year on screen at a time; the newest by default.
  let selected = $state<number | null>(null);
  const shown = $derived(years.find((y) => y.year === selected) ?? years[0]);
</script>

{#if shown}
  <figure class="cal">
    {#if years.length > 1}
      <div class="cal-years">
        {#each years as { year } (year)}
          <button
            type="button"
            aria-pressed={year === shown.year}
            onclick={() => (selected = year)}
          >{year}</button>
        {/each}
      </div>
    {/if}

    <svg
      viewBox="-3 -3 {shown.weeks * STEP + 4} {7 * STEP + 4}"
      role="img"
      aria-label="Log entries in {shown.year}"
    >
      {#each shown.bounds as month (month.name)}
        <path class="cal-cartouche" d={outline(month)} />
      {/each}

      {#each shown.cells as cell (cell.iso)}
        {#if cell.day}
          {#if cell.href}
            <a href={cell.href}>
              <rect
                class="on l{level(cell.times)}"
                x={cell.col * STEP}
                y={cell.row * STEP}
                width={CELL}
                height={CELL}
                rx="2"
              >
                <title>{tip(cell.day)}</title>
              </rect>
            </a>
          {:else}
            <rect
              class="on l{level(cell.times)}"
              x={cell.col * STEP}
              y={cell.row * STEP}
              width={CELL}
              height={CELL}
              rx="2"
            >
              <title>{tip(cell.day)}</title>
            </rect>
          {/if}
        {:else}
          <rect
            class="off"
            x={cell.col * STEP}
            y={cell.row * STEP}
            width={CELL}
            height={CELL}
            rx="2"
          />
        {/if}
      {/each}
    </svg>

    {#if caption}
      {@const days = shown.cells.filter((c) => c.day).length}
      <figcaption class="cal-total">
        {days} {days === 1 ? 'day' : 'days'},
        {plural(shown.cells.reduce((n, c) => n + c.times, 0))} in {shown.year}
      </figcaption>
    {/if}
  </figure>
{/if}
