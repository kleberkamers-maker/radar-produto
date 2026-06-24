# Avantpro Design System

Canonical design reference for the **Avantpro** family of software products.
This folder is the visual source of truth used to generate well-branded mockups,
slides, prototypes, and real production UI for:

- `avantpro-ml` — Mercado Livre extension
- `avantpro-shp` — Shopee extension
- `avantpro-amz` — Amazon extension

---

## 1. Product context

Avantpro is a family of **browser-extension / injected-UI products** that sit on
top of large e-commerce marketplaces (Mercado Livre, Shopee, Amazon). Each
extension injects Avantpro's own UI into the marketplace's host page to give
sellers analytics, tooling, campaign management, and integration controls without
leaving the marketplace they already work in.

### Three products, one family

All three extensions share:

- one brand name: **Avantpro** (capital A, rest lowercase — never `AvantPro`,
  `Avant Pro`, `Avanti Pro`).
- one visual language: blue-axis palette, Roboto, Lucide outline icons, light
  operational shell, gradient used only as a signature.
- one primitive contract: `Button`, `Input`, `Card`, `Badge`, `Dialog`, `Sheet`,
  `Popover`, `Tooltip`, `Table`, `Alert`, `Toast`.
- one technical stack: **Preact** runtime, `avt-*` utility classes,
  `avantpro-*` semantic classes, `i-lucide-*` icon dialect.

### What varies by product

- **Marketplace accent** — the host marketplace gets a small contextual color
  accent (ML yellow/blue, Amazon navy/orange, Shopee orange/red). Accents only
  appear on integration surfaces — never on the global app shell.
- **Local density** — integration-specific widgets can be denser than the
  base shell when the marketplace surface is tight.
- **i18n** — `shp` ships pt-BR / en / es / id; `amz` ships pt-BR / en-US /
  es-ES / fr-FR / de-DE; `ml` follows the shared family.

### Hierarchy of the source documentation

1. `brandbook.md` — brand, naming, colors, gradients, typography, iconography
2. `avantpro_guidelines.md` — entry point and governance
3. Implementation leaves — `visual-foundations.md`, `shared-ui-primitives.md`,
   `screen-and-interaction-patterns.md`, `ui-state-and-behavior.md`,
   `accessibility.md`, `structure-and-naming.md`,
   `feature-architecture.md`, `injected-feature-lifecycle.md`,
   `frontend-standardization-scope.md`.
4. Per-repo exceptions — `ml-exceptions-and-rules.md`,
   `shp-exceptions-and-rules.md`, `amz-exceptions-and-rules.md`.

When the current state of any repo conflicts with the brandbook, **the brandbook
wins**. Repo divergence is recorded as a tracked exception, not as a new default.

### Sources consulted

The entire set of source documents lives in the attached codebase at `ui/`:

- `ui/brandbook.md`
- `ui/avantpro_guidelines.md`
- `ui/ui-frontend/*.md` (10 files)
- `ui/exceptions-and-rules/*.md` (4 files)

No Figma library, no component source, no screenshots were provided — this
system was built entirely from the written standard. See caveats at the bottom.

---

## 2. Content Fundamentals

How copy is written across Avantpro surfaces.

### Voice and register

- **Operational, not marketing.** Copy explains what a surface is, what the
  user can do, and what just happened. It does not sell or flatter.
- **Restraint over ornament.** "clarity before ornamentation" is the first
  principle of the brand. The same restraint applies to copy: short, factual,
  one idea per sentence.
- **Neutral professional tone.** No exclamation marks in product UI, no
  emoji, no figurative language.

### Grammar and form

- **Title:** answers *"what is this surface?"*
  e.g. `Integration configuration`, `Campaign schedule`, `Linked accounts`.
- **Subtitle:** answers *"what can I do here?"* or *"what is the context?"*
  e.g. `Configure how this integration behaves on the marketplace.`
- **Buttons:** verb-first, present tense.
  e.g. `Save`, `Cancel`, `Reconnect`, `Export`.
- **Labels:** nouns, short, no punctuation.
  e.g. `Account`, `Sync interval`, `Category`.
- **Helper text / placeholders:** lowercase sentence-style, short.
  Placeholder is **never** a substitute for a label (accessibility rule).
- **Errors:** state the problem, not the exception. Offer a next step when
  recoverable. Forbidden: `unexpected error`, `it was not possible`.

### Person and address

- Address the user in **second person** when guidance is needed
  (`You can reconnect this account at any time.`).
- Use **third person** for system state
  (`The integration is syncing in the background.`).
- Never use first-person plural (`we`, `our`) in product UI.

### Casing

- **Sentence case** for titles, buttons, labels, menu items.
  `Linked accounts`, not `Linked Accounts`.
- **Brand name is always `Avantpro`** — title-casing it as `AvantPro`,
  `Avant Pro`, or `Avantepro` is a documented error.

### Disabled state copy

The reason the control is disabled must live next to it. Concrete examples
from the standard:

- loading: `Saving...`
- rule: `Available only to subscribers`
- context: `Available only on the product page`

### Feedback states

- **Loading:** verb-in-progress, same button width. `Saving...`, `Sending...`.
- **Empty state:** explain *what is empty, why, what to do next*.
- **Success:** update the UI itself; toast only as secondary reinforcement.
  Never rely on a toast alone for lasting state.
- **Destructive confirmation:** objective title + short impact description +
  explicit destructive CTA + clear cancel.

### Emoji and special characters

- **No emoji** in product UI. None of the source docs use emoji as UI signal.
- **No unicode decoration** (⭐, ✨, →, ✓ as ticks, etc.).
- Icon meaning comes from **Lucide outline** glyphs, not from unicode.
- Ellipsis in loading states is spelled `...` (three periods), not `…`.

### Examples of correct vs incorrect copy

| ✅ Correct                                     | ❌ Incorrect                              |
|------------------------------------------------|-------------------------------------------|
| `Linked accounts`                              | `Your Linked Accounts ✨`                 |
| `Reconnect`                                    | `Click here to reconnect!`                |
| `Available only to subscribers`                | `Premium only 🔒`                          |
| `Integration configuration`                    | `Let's configure your integration`        |
| `Avantpro Mercado Livre`                       | `AvantPro ML`                             |
| `Saving...`                                    | `Please wait…`                            |

---

## 3. Visual Foundations

### 3.1 Color

- **Blue is the axis.** Interaction, focus, recognition. All other color is
  either neutral (shell) or functional (success/danger) or marketplace accent.
- **Primary action is `brand.700` (#271BEF).** Never gradient on a common
  button — gradient is a signature, not a button fill.
- **Focus / hover / active reinforcement is `brand.500` (#1278F9).**
- **Support and links use `brand.400` (#00BFFF).**
- **Soft contextual backgrounds use `brand.050` (#E7F5FC).**
- **Shell is neutral:** `surface.base` (#FBFBFC) for app background,
  `surface.raised` (#FFFFFF) for cards/dialogs, `border.default` (#D3D4D6) for
  borders.
- **Feedback colors carry semantics** — success (#16A34A) only for success,
  danger (#DB0000) only for errors or destructive actions.

### 3.2 Gradient

Two official gradients:

- `gradient.brand` — `#00BFFF → #271BEF` — hero, special CTA, onboarding,
  highlight cards.
- `gradient.brand-dark` — `#271BEF → #1C1F26` — dark banners, institutional
  panels.

**Allowed on:** hero banners, login, onboarding, institutional empty states,
strategic module headers.
**Forbidden on:** buttons (except hero-level special CTA), dense tables, forms,
operational lists, general screen background. Gradient is a signature, not a
texture.

### 3.3 Typography

- **Family: `Roboto`.** One font across the whole family. Do not mix other
  type families without a documented institutional exception.
- **Weights:** 300 light (hero/titles) · 400 regular (body) · 500 medium
  (labels) · 700 bold (CTA/emphasis) · 800 extrabold (hero emphasis only).
  Weight 600 is **not** an official family weight.
- **Scale:** 64 display · 40 h1 · 32 h2 · 24 h3 · 20 body-lg · 16 body-md ·
  14 body-sm.
- **Composition rules:** left-align by default · `letter-spacing: 0` always ·
  140% line-height on body · bold only for emphasis · never center-align
  operational screens · never bold an entire block without reason.

### 3.4 Spacing

Short, repeatable scale: **4 · 8 · 12 · 16 · 20 · 24 · 32**. Broken values
like `7px`, `13px`, `22px` are forbidden without documented reason.

### 3.5 Control heights

- **sm: 32px** — compact actions
- **md: 40px** — standard buttons, standard inputs
- **lg: 48px** — main action, onboarding, login focus
- **table row: 44px** — operational reading

### 3.6 Radius

- **Default medium radius (~8px)** for `Button`, `Input`, `Card`, `Dialog`,
  `Popover`. One consistent feel across controls.
- **`rounded-full` (pill)** for badges, chips.
- **Larger radius (~12px+)** only for explicit highlight cards, not the default.

### 3.7 Border

- Neutral border is the baseline (`border.default` = `#D3D4D6`).
- **Do not use a colored border as the base of a neutral component.** Color
  comes through state (focus, error), semantics (success/danger), or real
  emphasis — not decoration.

### 3.8 Shadow

Shadows are **discreet**. Light shadows for cards, dialogs, sheets, elevated
surfaces. Heavy shadow is never the standard interface signature. The shadow
tokens (`--shadow-xs → --shadow-lg` in `colors_and_type.css`) are the complete
set — do not invent new elevations.

### 3.9 Focus

Focus is part of the visual system, not only an accessibility detail.

- Use `:focus-visible` everywhere (set globally in `colors_and_type.css`).
- Focus ring is `brand.500` at 25% opacity, 3px outer glow — `var(--shadow-focus)`.
- Never remove the focus outline without providing a visible replacement.
- Layout must not shift between focused and unfocused states.

### 3.10 Backgrounds and imagery

- Default screen background is **neutral `surface.base`** — flat, no
  pattern, no full-bleed illustration.
- Hero/onboarding/login may use `gradient.brand` as a full-bleed background.
- Repeating patterns, textures, noise, grain — **not part of the system.**
- Photographic imagery — not part of the documented standard. If introduced,
  use the monochrome logo on photographic backgrounds (brandbook §5).

### 3.11 Animation and motion

- **Minimal, operational, no bounce.** Durations: 120ms (fast) / 180ms (base) /
  240ms (slow). Easing: `cubic-bezier(0.2, 0, 0, 1)` — ease-out, never spring.
- No parallax, no elastic animations, no decorative transitions.
- Permitted: hover color transitions, focus ring fade-in, dialog/sheet open
  (fade + short slide), skeleton shimmer, toast slide-in.

### 3.12 Hover and press states

- **Hover:** swap to `brand.500` for brand elements; on neutral controls, a
  slight darker neutral (`rgba(28,31,38,0.04)` on `surface.raised`). Never an
  opacity change on primary CTAs — the button must still look affordable.
- **Active / pressed:** `brand.700` on brand elements; scale and translate
  effects are **not** used.
- **Disabled:** reduced opacity (~50%), neutral tone, and — when the reason
  isn't obvious — an explanation in the surrounding copy or a tooltip. Opacity
  alone is not enough.

### 3.13 Transparency, blur, and protection gradients

- **Blur / glassmorphism is not part of the system.** The ecosystem targets
  injected extension UI where `backdrop-filter` is unreliable.
- **Protection gradients** (e.g. behind white text on photography) are
  acceptable only on hero/login/onboarding surfaces that actually use imagery.
  The primary motif is solid surface + clear contrast, not translucent overlays.
- **Capsule pills** (`border-radius: 9999px`) are used for **badges and chips**
  only — not for buttons, cards, or modals.

### 3.14 Layout rules

- **Left-aligned** content and text by default; centering is reserved for
  hero/onboarding and empty states.
- **Fixed elements** — header, footer/action bar, sticky table headers — are
  allowed when there is a clear final action or when long content would hide
  it. Otherwise keep layout scrollable without pinned chrome.
- One primary action per decision block. Two primaries side-by-side is a
  documented anti-pattern.

### 3.15 Cards

- **Light surface** (`surface.raised`), **neutral border** (1px
  `border.default`), **medium radius** (8px), **light or no shadow**
  (`--shadow-sm`). No gradient by default.
- Hierarchy comes from space and type, not stacked effects.
- Sibling cards in the same group must share structure, alignment, density.

### 3.16 Marketplace extensions

Host-marketplace colors (yellow/blue for ML, orange/navy for Amazon,
orange/red for Shopee, plus TikTok/Shein/Magalu) are **contextual accents
only**. They appear on:

- integration connection pages,
- channel-segmented dashboards,
- integration badges,
- campaigns/modules associated with that partner.

They **never** replace the Avantpro shell, never color the global navigation,
never compete with Avantpro brand identity.

---

## 4. Iconography

### 4.1 Official library

**Lucide** — outline language, single library across the whole family.
No mixed icon systems without a strong technical reason.

### 4.2 Delivery and availability

No in-repo icon sprite or icon font was provided with this design system.
Avantpro ships Lucide in production via the `i-lucide-*` Iconify/UnoCSS
dialect; for design artifacts that run outside the product build chain (slides,
mocks, prototypes), **link Lucide directly from CDN** using the `lucide`
web-font package or the `lucide-static` SVGs:

```html
<!-- Browser-global Lucide, renders any <i data-lucide="name"></i> -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
```

Or as inline SVG (better for static slides):

```html
<img src="https://unpkg.com/lucide-static@latest/icons/check.svg" width="20" height="20" alt="" aria-hidden="true">
```

This matches the production icon vocabulary exactly — the Iconify name
`i-lucide-check` and the Lucide SVG `check.svg` are the same icon.

### 4.3 Usage rules

- **Outline dialect only.** Do not mix outline and filled in the same flow
  without clear semantics.
- **Stroke weight should match typography weight** — default is Lucide's
  stock 2px stroke, which pairs with Roboto 400/500.
- Icon size follows role, not arbitrary case-by-case tweaking:
  - **16** → helper text, table, inline actions
  - **20** → forms, menus, lists
  - **24** → headers, cards, shortcuts
  - **32** → empty states, onboarding
- **Icon-only buttons must have `aria-label`.** The icon itself gets
  `aria-hidden="true"` (accessibility rule §5.2).
- Decorative icons always get `aria-hidden="true"`.

### 4.4 Emoji and unicode

- **No emoji** anywhere in product UI.
- **No unicode glyphs** used as icons (no ★ ✓ ✗ → arrows, etc.).
- If a checkmark is needed, it's the Lucide `check` icon; if an arrow is
  needed, it's `arrow-right`. Unicode as iconography is a documented
  anti-pattern.

### 4.5 Substitution flagged

No local icon SVGs existed in the source to copy in. Lucide is a pixel-match
for what the production codebase actually renders (`i-lucide-*`), so no
substitution penalty — the visual is identical. Flag raised only to be
transparent: **if you have a proprietary icon set or custom Lucide overrides,
drop them into `assets/icons/` and update this section.**

---

## 5. Root manifest

| Path                           | What it is                                                      |
|--------------------------------|-----------------------------------------------------------------|
| `README.md`                    | This file — context, content rules, visual foundations, icons.  |
| `SKILL.md`                     | Agent-Skills-compatible entry for reuse in Claude Code.         |
| `colors_and_type.css`          | Canonical CSS variables for color, type, spacing, radius, shadow. |
| `assets/`                      | Logos (primary / mono / white / symbol / ML sub-brand) + accents. |
| `preview/`                     | HTML cards for the Design System review tab.                    |
| `ui_kits/avantpro-app/`        | Hi-fi React/JSX UI kit — Avantpro shell + primitives (interactive). |
| `ui_kits/avantpro-ml/`         | Injected-UI example — Avantpro panel on a Mercado Livre product page. |

### UI kits available

- **`ui_kits/avantpro-app/`** — the neutral Avantpro shell used across all
  three products. Header, sidebar, cards, buttons, inputs, badges, table,
  dialog, toast, empty states. Interactive click-through demo at
  `ui_kits/avantpro-app/index.html`.
- **`ui_kits/avantpro-ml/`** — the same shell with a Mercado Livre integration
  accent applied per §3.16. Demonstrates what "marketplace as contextual
  accent" looks like in practice.

---

## 6. Caveats & ask for iteration

Be honest about what this system does **not** yet cover:

1. **No component source code was provided.** The UI kits are visual
   recreations built strictly from the written standard in `ui/`. If there is a
   `shared/components/ui/` folder in a real Avantpro repo, we should mine it:
   the kits will get tighter (exact padding, exact variant names, real
   `data-slot` hooks, real `cva()` matrices) once we can read the primitives.
2. **No Figma library was provided.** A Figma link would unlock exact radii,
   shadow stops, hero compositions, empty-state illustrations, and the real
   logo artwork.
3. **Roboto loads from Google Fonts CDN.** No `.ttf` / `.woff2` files were
   attached. If Avantpro self-hosts Roboto in production, attach the files
   and we'll swap the `@import` for local `@font-face` rules.
4. **Lucide from CDN.** No in-repo icon sprite exists. If there is a custom
   Iconify collection or Avantpro-specific overrides, attach them.
5. **No sample slide template was provided**, so no `slides/` folder was
   created. If there is an institutional deck template, share it.
6. **Marketplace accent illustrations** (integration hero, partner logos as
   used inside the product) were not provided. The current accent tiles are
   functional placeholders.

### 🔴 What would help most right now

The UI kits in `ui_kits/` are built from the written standard and the shared
primitive contract — correct *in principle* but not pixel-matched to a
running build. Attach **(a)** any `shared/components/ui` source from
`avantpro-ml`, and **(b)** a Figma link if one exists, and the kits will go
from "correct in principle" to "pixel-accurate to production."
