---
outline: deep
---

# Design Tokens

Design tokens are the single source of truth for all visual decisions in the DC Design System. They are named, platform-agnostic values — stored as CSS custom properties — that represent color, typography, spacing, and more. Consuming a token instead of a raw value means that every downstream component automatically benefits when a token changes.

Tokens are organized into three layers:

| Layer         | Purpose                                       | Example                |
| ------------- | --------------------------------------------- | ---------------------- |
| **Primitive** | Raw, unnamed values — the full palette        | `--primitive-red-500`  |
| **Semantic**  | Purpose-driven aliases that map to primitives | `--color-status-error` |
| **Component** | Scoped tokens for a specific component        | `--tab-item-bg-active` |

Always consume the highest-layer token that makes sense. Use semantic tokens in most cases; fall back to primitives only in custom visual work.

---

## Primitive Tokens

Primitive tokens define every raw value the system can produce. They are not meant to be used directly in components — they exist so semantic tokens have a named source to reference.

### Color Primitives

```css
/* Brand */
--primitive-brand-100: #fce8eb;
--primitive-brand-200: #f7bfc6;
--primitive-brand-300: #ef8694;
--primitive-brand-400: #e54d62;
--primitive-brand-500: #d7192f; /* primary brand red */
--primitive-brand-600: #b01425;
--primitive-brand-700: #880f1b;
--primitive-brand-800: #600a12;
--primitive-brand-900: #380609;

/* Neutral */
--primitive-neutral-0: #ffffff;
--primitive-neutral-50: #f8fafc;
--primitive-neutral-100: #f1f5f9;
--primitive-neutral-200: #e2e8f0;
--primitive-neutral-300: #cbd5e1;
--primitive-neutral-400: #94a3b8;
--primitive-neutral-500: #64748b;
--primitive-neutral-600: #475569;
--primitive-neutral-700: #334155;
--primitive-neutral-800: #1e293b;
--primitive-neutral-900: #0f172a;
--primitive-neutral-1000: #000000;

/* Green */
--primitive-green-100: #dcfce7;
--primitive-green-300: #6ee7b7;
--primitive-green-500: #22c55e;
--primitive-green-700: #15803d;
--primitive-green-900: #052e16;

/* Yellow */
--primitive-yellow-100: #fef9c3;
--primitive-yellow-300: #fde047;
--primitive-yellow-500: #eab308;
--primitive-yellow-700: #a16207;
--primitive-yellow-900: #422006;

/* Blue */
--primitive-blue-100: #dbeafe;
--primitive-blue-300: #93c5fd;
--primitive-blue-500: #3b82f6;
--primitive-blue-700: #1d4ed8;
--primitive-blue-900: #1e3a8a;

/* Red */
--primitive-red-100: #fee2e2;
--primitive-red-300: #fca5a5;
--primitive-red-500: #ef4444;
--primitive-red-700: #b91c1c;
--primitive-red-900: #450a0a;
```

### Spacing Primitives

```css
--primitive-space-0: 0px;
--primitive-space-1: 4px;
--primitive-space-2: 8px;
--primitive-space-3: 12px;
--primitive-space-4: 16px;
--primitive-space-5: 20px;
--primitive-space-6: 24px;
--primitive-space-8: 32px;
--primitive-space-10: 40px;
--primitive-space-12: 48px;
--primitive-space-16: 64px;
--primitive-space-20: 80px;
--primitive-space-24: 96px;
```

### Type Scale Primitives

```css
--primitive-font-size-xs: 0.75rem; /* 12px */
--primitive-font-size-sm: 0.8125rem; /* 13px */
--primitive-font-size-md: 0.875rem; /* 14px */
--primitive-font-size-lg: 1rem; /* 16px */
--primitive-font-size-xl: 1.25rem; /* 20px */
--primitive-font-size-2xl: 1.5rem; /* 24px */
--primitive-font-size-3xl: 2rem; /* 32px */

--primitive-font-weight-regular: 400;
--primitive-font-weight-medium: 500;
--primitive-font-weight-semibold: 600;
--primitive-font-weight-bold: 700;

--primitive-line-height-tight: 1.2;
--primitive-line-height-normal: 1.5;
--primitive-line-height-relaxed: 1.6;
```

### Border Radius Primitives

```css
--primitive-radius-none: 0px;
--primitive-radius-sm: 4px;
--primitive-radius-md: 8px;
--primitive-radius-lg: 12px;
--primitive-radius-xl: 16px;
--primitive-radius-full: 9999px;
```

### Shadow Primitives

```css
--primitive-shadow-0: none;
--primitive-shadow-1:
  0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--primitive-shadow-2:
  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--primitive-shadow-3:
  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--primitive-shadow-4:
  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

---

## Semantic Tokens

Semantic tokens map primitives to **intent**. Swap a primitive (e.g. to rebrand or support dark mode) and every semantic token that references it updates automatically.

### Color — Background

```css
--color-bg-page: var(--primitive-neutral-50);
--color-bg-surface: var(--primitive-neutral-0);
--color-bg-subtle: var(--primitive-neutral-100);
--color-bg-muted: var(--primitive-neutral-200);
--color-bg-overlay: var(--primitive-neutral-800);
--color-bg-brand: var(--primitive-brand-500);
--color-bg-brand-subtle: var(--primitive-brand-100);
--color-bg-inverse: var(--primitive-neutral-900);
```

### Color — Text

```css
--color-text-primary: var(--primitive-neutral-900);
--color-text-secondary: var(--primitive-neutral-600);
--color-text-tertiary: var(--primitive-neutral-400);
--color-text-disabled: var(--primitive-neutral-300);
--color-text-inverse: var(--primitive-neutral-0);
--color-text-brand: var(--primitive-brand-500);
--color-text-on-brand: var(--primitive-neutral-0);
--color-text-link: var(--primitive-blue-700);
--color-text-link-hover: var(--primitive-blue-900);
```

### Color — Border

```css
--color-border-default: var(--primitive-neutral-200);
--color-border-strong: var(--primitive-neutral-300);
--color-border-subtle: var(--primitive-neutral-100);
--color-border-focus: var(--primitive-brand-500);
--color-border-disabled: var(--primitive-neutral-200);
--color-border-error: var(--primitive-red-500);
```

### Color — Interactive (Actions)

```css
--color-action-primary: var(--primitive-brand-500);
--color-action-primary-hover: var(--primitive-brand-600);
--color-action-primary-active: var(--primitive-brand-700);
--color-action-primary-disabled: var(--primitive-neutral-300);
--color-action-secondary: var(--primitive-neutral-0);
--color-action-secondary-hover: var(--primitive-neutral-100);
```

### Color — Status

```css
--color-status-success: var(--primitive-green-500);
--color-status-success-subtle: var(--primitive-green-100);
--color-status-success-text: var(--primitive-green-700);

--color-status-warning: var(--primitive-yellow-500);
--color-status-warning-subtle: var(--primitive-yellow-100);
--color-status-warning-text: var(--primitive-yellow-700);

--color-status-error: var(--primitive-red-500);
--color-status-error-subtle: var(--primitive-red-100);
--color-status-error-text: var(--primitive-red-700);

--color-status-info: var(--primitive-blue-500);
--color-status-info-subtle: var(--primitive-blue-100);
--color-status-info-text: var(--primitive-blue-700);
```

### Typography

```css
/* Font family */
--typography-font-family-base: "Inter", system-ui, -apple-system, sans-serif;
--typography-font-family-mono: "JetBrains Mono", "Fira Code", monospace;

/* Display */
--typography-display-size: var(--primitive-font-size-3xl);
--typography-display-weight: var(--primitive-font-weight-bold);
--typography-display-height: var(--primitive-line-height-tight);

/* Heading 1 */
--typography-h1-size: var(--primitive-font-size-2xl);
--typography-h1-weight: var(--primitive-font-weight-semibold);
--typography-h1-height: var(--primitive-line-height-tight);

/* Heading 2 */
--typography-h2-size: var(--primitive-font-size-xl);
--typography-h2-weight: var(--primitive-font-weight-semibold);
--typography-h2-height: var(--primitive-line-height-tight);

/* Heading 3 */
--typography-h3-size: var(--primitive-font-size-lg);
--typography-h3-weight: var(--primitive-font-weight-semibold);
--typography-h3-height: var(--primitive-line-height-normal);

/* Body */
--typography-body-size: var(--primitive-font-size-md);
--typography-body-weight: var(--primitive-font-weight-regular);
--typography-body-height: var(--primitive-line-height-relaxed);

/* Label */
--typography-label-size: var(--primitive-font-size-xs);
--typography-label-weight: var(--primitive-font-weight-semibold);
--typography-label-height: var(--primitive-line-height-normal);

/* Code */
--typography-code-size: var(--primitive-font-size-sm);
--typography-code-weight: var(--primitive-font-weight-regular);
--typography-code-height: var(--primitive-line-height-relaxed);
```

### Spacing

```css
--space-1: var(--primitive-space-1); /* 4px  */
--space-2: var(--primitive-space-2); /* 8px  */
--space-3: var(--primitive-space-4); /* 16px */
--space-4: var(--primitive-space-6); /* 24px */
--space-5: var(--primitive-space-8); /* 32px */
--space-6: var(--primitive-space-12); /* 48px */
```

### Elevation

```css
--elevation-0: var(--primitive-shadow-0);
--elevation-1: var(--primitive-shadow-1);
--elevation-2: var(--primitive-shadow-2);
--elevation-3: var(--primitive-shadow-3);
--elevation-4: var(--primitive-shadow-4);
```

### Border Radius

```css
--radius-sm: var(--primitive-radius-sm);
--radius-md: var(--primitive-radius-md);
--radius-lg: var(--primitive-radius-lg);
--radius-full: var(--primitive-radius-full);
```

### Motion

```css
--motion-duration-micro: 100ms;
--motion-duration-standard: 200ms;
--motion-duration-expressive: 300ms;
--motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
--motion-easing-decelerate: cubic-bezier(0, 0, 0.2, 1);
--motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
```

### Z-Index

```css
--z-index-base: 0;
--z-index-raised: 10;
--z-index-dropdown: 100;
--z-index-sticky: 200;
--z-index-overlay: 300;
--z-index-modal: 400;
--z-index-toast: 500;
--z-index-tooltip: 600;
```

---

## Component Tokens

Component tokens scope semantic values to a specific component. They inherit from semantic tokens by default, enabling global rebranding without touching every component file.

### Example — Tab Item

```css
--tab-item-bg-default: transparent;
--tab-item-bg-hover: var(--color-bg-subtle);
--tab-item-bg-active: var(--color-bg-surface);
--tab-item-bg-disabled: transparent;

--tab-item-text-default: var(--color-text-secondary);
--tab-item-text-hover: var(--color-text-primary);
--tab-item-text-active: var(--color-text-primary);
--tab-item-text-disabled: var(--color-text-disabled);

--tab-item-border-default: transparent;
--tab-item-border-active: var(--color-action-primary);
--tab-item-border-radius: var(--radius-sm);

--tab-item-padding-x: var(--space-3);
--tab-item-padding-y: var(--space-2);
--tab-item-gap: var(--space-1);
```

### Example — Button (Primary)

```css
--button-primary-bg: var(--color-action-primary);
--button-primary-bg-hover: var(--color-action-primary-hover);
--button-primary-bg-active: var(--color-action-primary-active);
--button-primary-bg-disabled: var(--color-action-primary-disabled);

--button-primary-text: var(--color-text-on-brand);
--button-primary-text-disabled: var(--color-text-disabled);

--button-primary-border-radius: var(--radius-md);
--button-primary-padding-x: var(--space-3);
--button-primary-padding-y: var(--space-2);
--button-primary-font-size: var(--typography-body-size);
--button-primary-font-weight: var(--primitive-font-weight-semibold);
```

---

## Token Naming Convention

All tokens follow a consistent naming pattern:

```
--[layer]-[category]-[property]-[variant]
```

| Segment    | Example values                                                                          |
| ---------- | --------------------------------------------------------------------------------------- |
| `layer`    | `primitive`, `color`, `typography`, `space`, `elevation`, `radius`, `motion`, `z-index` |
| `category` | `bg`, `text`, `border`, `action`, `status`                                              |
| `property` | `size`, `weight`, `height`, `family`                                                    |
| `variant`  | `hover`, `active`, `disabled`, `subtle`, `strong`                                       |

::: tip Token usage rule
Always use the most specific token available. Prefer component tokens → semantic tokens → primitive tokens (last resort only).
:::
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
