---
name: Pastel Bento Student Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#544249'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#87717a'
  outline-variant: '#dac0c9'
  surface-tint: '#a43073'
  primary: '#a43073'
  on-primary: '#ffffff'
  primary-container: '#f472b6'
  on-primary-container: '#6d0047'
  inverse-primary: '#ffafd3'
  secondary: '#00668a'
  on-secondary: '#ffffff'
  secondary-container: '#40c2fd'
  on-secondary-container: '#004d6a'
  tertiary: '#765469'
  on-tertiary: '#ffffff'
  tertiary-container: '#bb94ab'
  on-tertiary-container: '#4a2d40'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e7'
  primary-fixed-dim: '#ffafd3'
  on-primary-fixed: '#3d0026'
  on-primary-fixed-variant: '#85145a'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#ffd8ed'
  tertiary-fixed-dim: '#e5bad3'
  on-tertiary-fixed: '#2c1325'
  on-tertiary-fixed-variant: '#5c3d51'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system crafts a fresh, polished, and youthful professional identity for a software engineering vocational student (SMK PPLG) entering industry internships (PKL). It balances student vibrancy with career readiness and engineering capability.

The aesthetic fuses modern minimalism with soft glassmorphism and bento-grid modularity. It avoids overly corporate heaviness while steering clear of toy-like aesthetics through clean micro-interactions, subtle pastel glow accents, crisp typographic structure, and airy white space. 

Key attributes:
- **Clean & Contemporary:** Crisp white bases highlighted with balanced soft pink and baby blue gradients.
- **Approachable & Energetic:** Friendly rounded geometry combined with clear technical competence.
- **Curated Bento Hierarchy:** Information chunking into self-contained, soft-edged cards for showcase-ready storytelling.

## Colors

The color palette is built upon a bright, airy foundation grounded by gentle pastel accents and high-legibility slate neutrals.

- **Primary (`#f472b6`):** Vibrant rose pink used for key call-to-actions, active indicators, and prominent visual gradients.
- **Secondary (`#38bdf8`):** Sky baby blue representing technology, calm confidence, and engineering logic; used for status indicators, secondary interactive states, and accent badges.
- **Tertiary (`#fbcfe8`):** Gentle blush tone used for subtle pill fills, highlight states, and background gradient blends.
- **Background & Canvas:** Crisp pure white (`#ffffff`) as the primary card foundation, backed by soft neutral canvas wash (`#f8fafc`).
- **Text & Borders:** Deep slate (`#0f172a`) for display headlines and high-contrast text, medium slate (`#64748b`) for descriptive copy, and ultralight slate/pink tint (`#f1f5f9` / `#fce7f3`) for hairline container borders.

## Typography

Typography prioritizes a friendly, optimistic, yet technical voice. 

- **Display & Headings:** `Plus Jakarta Sans` provides geometric balance and soft curves that complement the rounded cards and pastel accents. Bold and extra-bold weights give student projects an assertive, confident visual anchor.
- **Body:** `Plus Jakarta Sans` regular and medium weights maintain readability in project summaries, experience logs, and educational background descriptions.
- **Labels & Microcopy:** `Inter` is chosen for tags, status indicators (e.g., "SIAP PKL"), tech stack badges, and interactive controls to provide precise legibility at smaller scales.

## Layout & Spacing

The layout is grounded in a flexible 12-column responsive grid specifically engineered for bento-card arrangements:

- **Desktop (>= 1024px):** 12-column grid, 24px gutters, max container width of 1200px. Bento modules span 4, 6, 8, or 12 columns to create an asymmetric narrative flow.
- **Tablet (768px - 1023px):** 6-column grid with 20px gutters. Multi-column cards compress into balanced 2-column or full-width configurations.
- **Mobile (< 768px):** 1-column stack layout with 16px margins, allowing bento cards to transform into sequential story cards with full horizontal touch targets.

Component padding uses generous breathing room (`space-lg` to `space-xl`) inside cards to keep the visual composition airy and uncrowded.

## Elevation & Depth

Visual depth is achieved through layered glass surfaces and soft, colored ambient glows rather than harsh drop shadows.

- **Base Cards (Bento Boxes):** Solid white surface (`#ffffff`) or semi-transparent milky white (`rgba(255, 255, 255, 0.85)`) over subtle gradient meshes. Layered with an ultralight border (`rgba(244, 114, 182, 0.15)` or `rgba(226, 232, 240, 0.8)`).
- **Glow Accents:** Soft radial ambient shadows tinted with soft pink (`rgba(244, 114, 182, 0.2)`) and sky blue (`rgba(56, 189, 248, 0.18)`), diffused with blur radii of 32px to 48px behind key callouts and hero badges.
- **Card Hover States:** Micro-elevation with a 4px upward translation accompanied by a combined pink-blue bloom: `0 12px 30px -10px rgba(244, 114, 182, 0.25), 0 4px 12px -4px rgba(56, 189, 248, 0.2)`.

## Shapes

The interface embraces high-radius geometric smoothness (`rounded-2xl` and `rounded-3xl`) to project friendliness and modernity:

- **Bento Modules & Feature Panels:** 24px to 32px corner radius (`rounded-3xl`), creating a warm, organic visual rhythm.
- **Buttons, Badges, and Chips:** Full pill shape (9999px corner radius) to contrast neatly with rectangular bento containers.
- **Images & Project Thumbnails:** 16px to 20px corner radius (`rounded-2xl`) recessed inside card padding.

## Components

### Status Badge: "SIAP PKL"
- **Style:** Pill container with a pulsing live status dot.
- **Visuals:** Background in soft blue tint (`#f0f9ff`), subtle border in `#bae6fd`. Text set in `Inter` semi-bold (`#0284c7`).
- **Indicator:** 8px glowing circular beacon in `#38bdf8` with an infinite subtle radial ping animation.

### Skill Chips & Tech Tags
- **Style:** Compact pill chips (`space-xs` vertical, `space-sm` horizontal padding).
- **Variants:**
  - *Front-End / Core:* Soft pink fill (`#fdf2f8`), pink border (`#fbcfe8`), text in `#db2777`.
  - *Back-End / Tooling:* Soft baby blue fill (`#f0f9ff`), blue border (`#bae6fd`), text in `#0284c7`.
- **States:** Interactive hover lightens tint and adds a 2px upward shift.

### Bento Project Cards
- **Structure:** Crisp white card base with `rounded-3xl`, interior `space-lg` padding, featuring title, subtitle, brief context, and responsive technology tag cluster.
- **Visuals:** 1px hairline border (`#f1f5f9`) transitioning on hover to a dual pink-to-sky gradient stroke (`linear-gradient(135deg, #f472b6, #38bdf8)`).
- **Thumbnail:** Recessed media frame with 16px radius and smooth zoom on parent card hover.

### Buttons
- **Primary Action (e.g., "Hubungi Saya", "Unduh CV"):** Dual pastel gradient (`linear-gradient(135deg, #f472b6, #38bdf8)`), crisp white text, pill shape, soft colored drop-glow (`box-shadow: 0 8px 20px -6px rgba(244, 114, 182, 0.45)`).
- **Secondary Action (e.g., "Lihat GitHub"):** Translucent white base with hairline border (`#e2e8f0`), text in `#0f172a`, transitioning to pastel pink border on focus/hover.

### Input Fields & Contact Form
- **Fields:** Clean white background, 16px corner radius, hairline border in `#e2e8f0`.
- **Focus State:** Glow halo in soft pink (`0 0 0 4px rgba(244, 114, 182, 0.15)`) with active border `#f472b6`.