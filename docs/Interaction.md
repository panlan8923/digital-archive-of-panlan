# Interaction

> Interaction design notes for PAN LAN — DIGITAL ARCHIVE.
> Authoritative rules live in [PROJECT_SPEC.md](../PROJECT_SPEC.md).

## Philosophy

Interactions should feel archival: deliberate, quiet, and functional. The site behaves like a well-organized reading room, not a marketing page.

## Navigation Model (Planned)

- **Index-first** — Users land on a typographic identity, then enter the archive index.
- **Linear reading** — Entry pages support sequential navigation (previous / next).
- **Contextual return** — Always clear how to return to the index or a category.

## Hover & Focus

- Hover states use opacity or underline — no color jumps.
- Focus rings use token-based border colors for accessibility.
- All interactive elements must have visible focus indicators.

## Motion (Planned)

- Page transitions: subtle fade or vertical shift (token-driven duration).
- Index hover: minimal — perhaps a label shift or opacity change.
- Respect `prefers-reduced-motion`.

## Open Questions

- Will the archive support deep-linking to filtered views?
- Should entry navigation be keyboard-driven (j/k)?
- Mobile navigation pattern — bottom bar vs. hamburger vs. index-only?

To be decided during Phase 4.
