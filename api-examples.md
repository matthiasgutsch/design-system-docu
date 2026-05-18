---
outline: deep
---

# Foundation

The DC Design System is built on a small set of design decisions that apply consistently across every product, screen, and component. These decisions — collectively called the **foundation** — are the single source of truth for how things look and behave. Any component, layout, or pattern you build should reference these values rather than introduce ad-hoc alternatives.

## What is a Design System Foundation?

A design system foundation defines the **visual language** of a product. It answers questions like:

- What typefaces and sizes does the product use?
- What shades of red represent danger?
- How much space separates related items?
- What does a focusable element look like when keyboard-navigated?

Getting these answers right — once, centrally — removes guesswork from every future design and engineering decision.

## Color

Colors are organized into semantic roles so that usage is predictable regardless of which specific shade is applied.

| Role                  | Purpose                       | Example usage                   |
| --------------------- | ----------------------------- | ------------------------------- |
| **Brand**             | Primary identity, key actions | Primary buttons, active states  |
| **Neutral**           | Structure and text            | Labels, borders, backgrounds    |
| **Semantic / Status** | Communicate state             | Success, Warning, Error, Info   |
| **Data**              | Encode values in charts       | Series colors in visualizations |

> **Rule:** Always reference a color by its **role token** (e.g. `--color-status-error`) rather than a raw hex value. This keeps theming and accessibility updates centralized.

## Typography

The type scale is based on a modular ratio that ensures harmonious sizing across heading levels, body text, and supporting labels.

| Level     | Usage                     | Size               |
| --------- | ------------------------- | ------------------ |
| Display   | Hero titles, empty states | 32 px / 2 rem      |
| Heading 1 | Page titles               | 24 px / 1.5 rem    |
| Heading 2 | Section titles            | 20 px / 1.25 rem   |
| Heading 3 | Sub-sections              | 16 px / 1 rem      |
| Body      | Default text content      | 14 px / 0.875 rem  |
| Label     | Form labels, captions     | 12 px / 0.75 rem   |
| Code      | Inline and block code     | 13 px / 0.8125 rem |

Line height defaults to `1.6` for body text and `1.2` for headings to maintain comfortable reading rhythm.

## Spacing

Spacing follows an **8-point grid** — every margin, padding, and gap is a multiple of 8 px. A 4-point sub-grid is permitted for fine-grained adjustments within components.

| Token       | Value | Typical use                      |
| ----------- | ----- | -------------------------------- |
| `--space-1` | 4 px  | Icon-to-label gap, tight padding |
| `--space-2` | 8 px  | Inner component padding          |
| `--space-3` | 16 px | Card padding, list item spacing  |
| `--space-4` | 24 px | Section separation               |
| `--space-5` | 32 px | Page section gaps                |
| `--space-6` | 48 px | Major layout sections            |

## Elevation & Shadow

Elevation communicates depth and layering. Higher elevation numbers appear visually closer to the user.

| Level | Usage                           |
| ----- | ------------------------------- |
| 0     | Flat surfaces — cards, panels   |
| 1     | Dropdowns, popovers             |
| 2     | Modals, dialogs                 |
| 3     | Toasts, floating action buttons |

## Border Radius

Consistent corner rounding prevents a mix of sharp and soft shapes within the same UI.

| Token           | Value   | Usage                     |
| --------------- | ------- | ------------------------- |
| `--radius-sm`   | 4 px    | Inputs, tags, small chips |
| `--radius-md`   | 8 px    | Cards, buttons, panels    |
| `--radius-lg`   | 12 px   | Modals, large containers  |
| `--radius-full` | 9999 px | Pills, avatars            |

## Iconography

Icons are sourced from a single icon library to maintain visual consistency. All icons:

- Are provided in SVG format at a base size of **24 × 24 px**
- Scale to `16 px` (small) and `32 px` (large) variants
- Use `currentColor` so they inherit the text color of their container
- Carry an `aria-label` or are wrapped in a visually hidden label when used without accompanying text

See the [Icon component](/components/icon) page for the full icon catalog and usage guidelines.

## Motion

Animation should support the user's understanding of the interface, not decorate it.

| Property                                  | Default                        |
| ----------------------------------------- | ------------------------------ |
| Duration — micro (hover, focus)           | 100 ms                         |
| Duration — standard (panel open, tooltip) | 200 ms                         |
| Duration — expressive (page transition)   | 300 ms                         |
| Easing                                    | `cubic-bezier(0.4, 0, 0.2, 1)` |

Always respect `prefers-reduced-motion`. Disable or minimize animations when that media query matches.

## Accessibility

Every foundation decision is made with WCAG 2.1 AA compliance as a baseline requirement.

- **Color contrast** — body text meets a minimum ratio of 4.5 : 1; large text meets 3 : 1.
- **Focus indicators** — interactive elements display a visible 2 px outline in the brand color.
- **Touch targets** — interactive areas are at least 44 × 44 px.
- **Keyboard navigation** — all interactive elements are reachable and operable via keyboard alone.
