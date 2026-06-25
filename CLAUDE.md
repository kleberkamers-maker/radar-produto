# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static single-page product-demand radar for Avantpro. No build step, no package manager. The entire app lives in `index.html`. To run it, serve the directory over HTTP (fetch calls require an origin):

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then open `http://localhost:8080`.

## Architecture

### dc-runtime (`support.js`)

`support.js` is a generated React 18 wrapper called **dc-runtime** (do not edit it directly — the comment at the top says it's rebuilt from `dc-runtime/src/*.ts` via `bun run build`). It:

- Loads React 18 from unpkg CDN at boot time
- Parses the `<x-dc>` root element in `index.html`
- Reads the `<script type="text/x-dc" data-dc-script>` block and evaluates the `class Component extends DCLogic` it defines
- Compiles the HTML template inside `<x-dc>` into a React render tree
- Re-renders when `this.setState(...)` is called from the logic class

### The `index.html` component

All product logic lives in the single `<script type="text/x-dc" data-dc-script>` block at the bottom of `index.html`. The pattern:

- **`state`** — plain object; mutate via `this.setState({...})` (same semantics as React class components)
- **`renderVals()`** — returns the flat object the template renders against; this is called on every re-render
- **`componentDidMount()`** — fires after mount; used here to fetch data from the Google Apps Script backend
- Template interpolation uses `{{ expr }}`, `<sc-for list="{{ arr }}" as="item">`, `<sc-if value="{{ bool }}">`

### Data source

Demand data comes from a Google Apps Script web app (URL in `SCRIPT_URL` at the top of the component class). The script returns a JSON array; each row maps to the CSV schema in `demandas-radar.csv`:

```
id, bu, temp, title, desc, origem, responsavel, jira, porqueTemp, proximosPassos
```

`proximosPassos` is a `|`-separated list of strings, split in `parseRows()`.

### Design system (`_ds/`)

The `_ds/avantpro-design-system-ea63d63d-.../` folder contains:

- `colors_and_type.css` — canonical CSS custom properties (colors, spacing, typography, shadows, motion tokens). Import this when adding new UI.
- `_ds_bundle.js` — design system component bundle (loaded by index.html via `<helmet>`).
- `_ds_manifest.json` — design system registry metadata; not used at runtime.

### Business units and temperatures

Five BUs are hard-coded in the `BUS` map with their radar sector angle ranges. Three temperatures (`quente`/`morno`/`frio`) control dot color and radial position (`r` factor). These mappings must stay consistent between the BU labels in the template's SVG and the `BUS`/`TEMPS` maps in the logic class.

## Key design tokens (from `_ds/.../colors_and_type.css`)

| Token | Value | Use |
|---|---|---|
| `--color-brand-700` | `#271BEF` | Primary action |
| `--color-brand-500` | `#1278F9` | Hover / focus |
| `--color-surface-base` | `#FBFBFC` | Page background |
| `--color-border-default` | `#D3D4D6` | Card borders |
| `--color-danger` | `#DB0000` | Hot/error states |

Icons use `lucide-static` SVGs from unpkg CDN (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`). Stick to outline dialect only.

## Avantpro brand rules

- Brand name is always `Avantpro` — never `AvantPro`, `Avant Pro`.
- Sentence case everywhere; no title-casing UI labels.
- No emoji in UI copy.
- Gradient (`#00BFFF → #271BEF`) is a brand signature — use only on hero/highlight elements, never on common buttons or card backgrounds.
- Spacing scale: 4 · 8 · 12 · 16 · 20 · 24 · 32 px. Avoid values outside this scale without a clear reason.
