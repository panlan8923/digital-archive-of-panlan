# PAN LAN — DIGITAL ARCHIVE

**Project Specification · Single Source of Truth**

All design, development, and content decisions must align with this document.
When in doubt, refer here first. Update this file as the project evolves.

---

## Vision

PAN LAN — DIGITAL ARCHIVE is a long-term, continuously updated personal research archive — not a one-time portfolio website.

It documents an ongoing practice spanning design, research, writing, teaching, and experimentation. The site should feel like a living record: structured, precise, and open-ended.

**Formal name:** PAN LAN — DIGITAL ARCHIVE  
**Nature:** Archive · Research record · Personal index  
**Time span:** 2022–Present (and forward)

---

## Concept

The archive organizes work across multiple domains that will grow over time:

- Research
- Publications
- Installations
- Writing
- Teaching
- Experiments
- Future PhD Research

Content is indexed, referenced, and cross-linked — similar to a research library or catalog system, rather than a showcase grid.

The homepage **is** the archive. There is no separate landing page.

### Identity Header (Reference)

The top of the archive index presents identity through typography:

```
PAN LAN

DIGITAL ARCHIVE

2022–PRESENT
```

Three lines. Name → descriptor → time span. Below this, the index list begins.

### Archive Number Format

`PL-YYYY-NNN` — e.g. `PL-2024-001`

---

## Design Principles

1. **Archive over portfolio** — Prioritize indexing, context, and continuity over visual spectacle.
2. **Typography-first** — Text carries hierarchy, identity, and navigation. Layout serves reading.
3. **Restraint** — Every element must earn its place. Whitespace is structural, not empty.
4. **Consistency via tokens** — All visual values come from Design Tokens (`variables.css`). No hardcoded colors, sizes, or spacing in components.
5. **No third-party UI** — All UI, components, and interactions are designed and built in-house. No Tailwind. No UI frameworks.
6. **Centralized styles** — All styles live in `src/lib/styles/`. No inline `style` attributes.
7. **Reusable components** — Components in `src/lib/components/` must be composable and context-agnostic.
8. **No duplication** — Shared logic goes to `utils/`, shared types to `types/`.
9. **Incremental development** — One small feature at a time. Structure before volume.

---

## Interaction Principles

1. **Quiet motion** — Animations clarify state and spatial relationships; they never decorate.
2. **Predictable navigation** — Users should always know where they are in the archive.
3. **Keyboard accessible** — All interactive elements must be reachable and operable via keyboard.
4. **Progressive disclosure** — Show index-level information first; detail on demand.
5. **No surprise** — Avoid auto-playing media, unexpected layout shifts, or hidden interactions.
6. **Touch-friendly** — Minimum interactive target sizes follow token-based spacing rules.

---

## Typography Rules

Typography is defined in `src/lib/styles/typography.css` and powered by tokens in `variables.css`.

### Type Roles

| Role           | Class                  | Usage                                           |
| -------------- | ---------------------- | ----------------------------------------------- |
| Display Title  | `.text-display`        | Site name, major section openers (e.g. PAN LAN) |
| Heading        | `.text-heading`        | Section titles, entry titles                    |
| Body           | `.text-body`           | Primary reading text                            |
| Caption        | `.text-caption`        | Secondary descriptions, metadata                |
| Label          | `.text-label`          | Navigation labels, form labels, tags            |
| Archive Number | `.text-archive-number` | Catalog/index identifiers                       |
| Year           | `.text-year`           | Temporal markers (e.g. 2022–PRESENT)            |

### Rules

- Use semantic HTML elements (`h1`–`h6`, `p`, `span`) with type role classes.
- Font families, sizes, weights, and line heights must reference CSS variables only.
- Do not set font properties directly in component `<style>` blocks — extend typography classes or add new roles to the system.
- Letter-spacing and text-transform for labels and archive numbers are token-driven.

---

## Motion Rules

Motion tokens are defined in `variables.css` under Motion Duration and Transition Timing.

### Duration Scale

| Token                | Value | Usage                       |
| -------------------- | ----- | --------------------------- |
| `--duration-instant` | 0ms   | Immediate state change      |
| `--duration-fast`    | 120ms | Hover, focus feedback       |
| `--duration-normal`  | 240ms | Standard transitions        |
| `--duration-slow`    | 480ms | Page-level reveals          |
| `--duration-glacial` | 800ms | Deliberate, archival pacing |

### Timing Functions

| Token            | Usage               |
| ---------------- | ------------------- |
| `--ease-default` | General transitions |
| `--ease-in`      | Elements exiting    |
| `--ease-out`     | Elements entering   |
| `--ease-in-out`  | State toggles       |

### Rules

- Prefer `opacity` and `transform` for animations (GPU-friendly).
- Respect `prefers-reduced-motion: reduce` — disable or shorten all motion.
- Never animate layout properties (`width`, `height`, `top`) unless absolutely necessary.
- One motion per interaction — do not stack competing animations.

---

## Component Rules

### Directory Structure

```
src/lib/components/
├── ui/       # Primitive, reusable elements (Button, Link, Tag)
└── layout/   # Structural components (Header, Footer, Section)
```

### Conventions

- One component per file. File name matches component name in PascalCase.
- Props are typed with TypeScript interfaces.
- Components accept `class` prop for composition; do not hardcode layout context.
- Styles use CSS classes referencing design tokens — never inline styles.
- Component-scoped `<style>` is allowed only for layout-specific positioning; visual values still use tokens.
- Export shared components through `$lib/components/` paths, not deep relative imports.

---

## Future Roadmap

Phases are developed incrementally. Each phase requires confirmation before starting.

### Phase 0 — Foundation ✅

- SvelteKit project initialization
- Directory structure
- Design token system
- PROJECT_SPEC.md and docs/

### Phase 1 — Archive Index Page

Homepage = archive. Identity Header + flat index list.

- [x] Identity Header typography layout
- [ ] Flat index list (Number, Title, Year)
- [x] Empty index area (no placeholder text)
- [ ] Responsive layout

Fields in Phase 1: Number · Title · Year. Category deferred to Phase 2.

### Phase 2 — Category & Grouping

- Category field on entries
- Optional category grouping in index
- Archive number system refinement

### Phase 3 — Entry Detail

- Individual entry pages
- Metadata display (year, category, tags)

### Phase 4 — Navigation & Structure

- Site-wide navigation
- Category sections (Research, Publications, etc.)

### Phase 5 — Content Expansion

- Add content types as needed
- Cross-referencing between entries

### Phase 6 — Search & Filter

- Archive search
- Filter by category, year, tag

---

## Related Documents

Detailed explorations live in `docs/`:

- [Concept.md](./docs/Concept.md)
- [Interaction.md](./docs/Interaction.md)
- [Roadmap.md](./docs/Roadmap.md)
- [References.md](./docs/References.md)

When `PROJECT_SPEC.md` and a doc conflict, **PROJECT_SPEC.md takes precedence**.
