---
title: Tab Item (v1.1.0)
---

::: warning You are viewing the archived v1.1.0 documentation.
[View the latest version ->](/components/tab-item)
:::

# Tab Item (v1.1.0)

Version: v1.1.0 (archived)

A single tab within a Tab Bar. Represents one view or document the user can switch to. Width is hug (content-driven) with a hard **320px maximum** — labels beyond that are truncated with an ellipsis (…). Height is always **48px**.

## Playground

Try all variants and states interactively.

<TabItemPlayground />

## States

<TabItemStateGrid />

---

## Anatomy

<TabItemAnatomy />

---

## Properties

| Property       | Values                              | Default            | Description                                       |
| -------------- | ----------------------------------- | ------------------ | ------------------------------------------------- |
| `State`        | Default · Hover · Active · Disabled | Default            | Visual interaction state                          |
| `Label`        | string                              | "Tab label"        | Editable text; truncated at 320px total width     |
| `Show Swatch`  | true · false                        | true               | Shows a 16×16px color dot                         |
| `Swatch Color` | RGB                                 | `rgb(215, 25, 47)` | Color of the swatch in `rgb(r, g, b)` format only |
| `Show Icon`    | true · false                        | true               | Shows a 14×14px Outline icon                      |
| `Show Close`   | true · false                        | true               | Shows the × close button                          |

> ⚠ `Show Swatch` and `Show Icon` are mutually exclusive. Never enable both at the same time.

---

## Content Variants

Four official variants. Optional slots (Swatch, Icon, Close) collapse automatically when hidden.

### 1 · Label only

Simple navigation tab. No color identity or category. Use for fixed views.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <TabItemPreview variant="label-only" label="Overview" state="active" />
</div>

### 2 · Swatch + Label

Color dot paired with a label. Use when the tab represents a job or document with a unique color identity.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <TabItemPreview variant="swatch-label" label="Job A - Fabric inspection" state="active" />
</div>

### 3 · Swatch + Label + Close _(most common)_

Closeable job or document tab. The most frequently used variant in the product.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <TabItemPreview variant="swatch-label-close" label="Job A - Fabric inspection" state="active" />
</div>

### 4 · Icon + Label + Close

Categorized, closeable tab. Use when the content type has semantic meaning (info, warning, error) that an icon can communicate.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <TabItemPreview variant="icon-label-close" label="Calibration report" state="active" />
</div>

---

## States (Detailed)

### Default

Base state. Label uses `color/text/tertiary`. No background, no border indicator.

<TabItemPreview framed state="default" />

### Hover

Triggered on pointer over. Background becomes `rgba(0,0,0,0.04)`. Label color stays tertiary.

<TabItemPreview framed state="hover" />

### Active

Currently selected tab. Label switches to `color/text/primary`. A 4px bottom border in `color/black/100` marks the active position. **Only one tab can be Active at a time.**

<TabItemPreview framed state="active" />

### Disabled

Not interactive. The entire tab item is rendered at 40% opacity. Cannot be clicked or focused.

<TabItemPreview framed state="disabled" />

### State summary

| State    | Background               | Label color           | Border-bottom         | Interaction     |
| -------- | ------------------------ | --------------------- | --------------------- | --------------- |
| Default  | Transparent              | `color/text/tertiary` | None                  | Clickable       |
| Hover    | `rgba(0,0,0,0.04)`       | `color/text/tertiary` | None                  | Clickable       |
| Active   | Transparent              | `color/text/primary`  | 4px `color/black/100` | Current view    |
| Disabled | Transparent, opacity 0.4 | `color/text/tertiary` | None                  | Not interactive |

---

## Sizing & Spacing

| Property                | Value   | Token        |
| ----------------------- | ------- | ------------ |
| Height                  | 48px    | `spacing/12` |
| Max width               | 320px   | —            |
| Horizontal padding      | 16px    | `spacing/4`  |
| Gap between elements    | 8px     | `spacing/2`  |
| Gap in Disabled state   | 8px     | `radius/md`  |
| Swatch size             | 16×16px | —            |
| Swatch border radius    | 4px     | —            |
| Icon size               | 14×14px | —            |
| Close button size       | 14×14px | —            |
| Active indicator height | 4px     | —            |

---

## Typography

| Property       | Value        |
| -------------- | ------------ |
| Font           | Roboto Bold  |
| Font size      | 13px         |
| Line height    | 21px         |
| Font variation | `wdth 100`   |
| Overflow       | Ellipsis (…) |

---

## Design Tokens

| Token                  | Value                | Usage                            |
| ---------------------- | -------------------- | -------------------------------- |
| `color/brand/200`      | `rgb(215, 25, 47)`   | Default swatch color             |
| `color/border/default` | `rgb(230, 230, 230)` | Swatch border                    |
| `color/text/primary`   | `rgb(0, 0, 0)`       | Active label                     |
| `color/text/tertiary`  | `rgb(151, 153, 155)` | Default / Hover / Disabled label |
| `color/black/100`      | `rgb(0, 0, 0)`       | Active border-bottom indicator   |
| `color/icon/primary`   | `rgb(0, 0, 0)`       | Icon color                       |
| `spacing/2`            | `8px`                | Element gap                      |
| `spacing/4`            | `16px`               | Horizontal padding               |
| `spacing/12`           | `48px`               | Tab height                       |
| `radius/md`            | `8px`                | Gap value in Disabled state      |

> Swatch color must always be in **RGB format** — `rgb(r, g, b)` with values 0–255. Never use hex or HSL.

---

## Usage guidelines

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0;font-family:sans-serif;font-size:14px;">
  <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;">
    <p style="font-weight:700;color:#15803d;margin:0 0 8px;">✓ Do</p>
    <ul style="margin:0;padding-left:16px;color:#166534;line-height:1.7;">
      <li>Use one of the 4 official content variants</li>
      <li>Keep only one tab Active per Tab Bar</li>
      <li>Express swatch color as <code>rgb(r, g, b)</code></li>
      <li>Abbreviate long labels — the 320px cap is fixed</li>
      <li>Hide Close on pinned tabs or when it's the only tab open</li>
    </ul>
  </div>
  <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;">
    <p style="font-weight:700;color:#b91c1c;margin:0 0 8px;">✕ Don't</p>
    <ul style="margin:0;padding-left:16px;color:#991b1b;line-height:1.7;">
      <li>Combine Swatch + Icon in the same tab</li>
      <li>Exceed 320px width or 48px height</li>
      <li>Use hex or HSL for swatch color — only RGB</li>
      <li>Use Filled icons — only Outline 14×14</li>
      <li>Change the color of the Active border-bottom</li>
    </ul>
  </div>
</div>

---

## Accessibility notes _(for designers)_

- The entire header row is the click target — not just the label text
- Active state is communicated by both the bottom border (shape) and label color — not color alone
- Disabled tabs must not be reachable by keyboard and must not show a hover state
- The Close button needs a visible focus ring; its accessible name should read "Close [tab label]"
- Truncated labels must expose the full text in a tooltip on hover

---

## Version history

<ComponentVersion
  :current="{ component: '1.1', system: '1.1.0', date: '2026-05-14', status: 'Stable' }"
  :history="[
    { component: '1.1', system: '1.1.0', systemLink: '/changelog#v110', date: '2026-05-14', change: 'Added Icon + Label variant (without Close button)' },
    { component: '1.0', system: '1.0.0', systemLink: '/v1.0.0/components/tab-item', date: '2026-05-14', change: 'Initial release — 4 variants, 4 states, full token set' },
  ]"
/>
