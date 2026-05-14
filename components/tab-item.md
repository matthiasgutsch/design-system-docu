---
title: Tab Item
---

# Tab Item

A single tab within a Tab Bar. Represents one view or document the user can switch to. Width is hug (content-driven) with a hard **320px maximum** — labels beyond that are truncated with an ellipsis (…). Height is always **48px**.

## Playground

Try all variants and states interactively.

<TabItemPlayground />

## States

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin:16px 0 8px;font-family:sans-serif;">
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;background:#f8fafc;">
    <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#334155;">Default</p>
    <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:6px 6px 0 0;background:#fff;">
      <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
      <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
      <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
    </div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;background:#f8fafc;">
    <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#334155;">Hover</p>
    <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:6px 6px 0 0;background:rgba(0,0,0,0.04);">
      <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
      <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
      <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
    </div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;background:#f8fafc;">
    <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#334155;">Active</p>
    <div style="display:inline-flex;border-bottom:4px solid rgb(0,0,0);height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:6px 6px 0 0;background:#fff;">
      <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
      <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);white-space:nowrap;">Tab label</span>
      <span style="font-size:11px;color:rgb(0,0,0);">✕</span>
    </div>
  </div>
  <div style="border:1px solid #e2e8f0;border-radius:10px;padding:12px;background:#f8fafc;">
    <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#334155;">Disabled</p>
    <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:6px 6px 0 0;background:#fff;opacity:0.4;pointer-events:none;">
      <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
      <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
      <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
    </div>
  </div>
</div>

---

## Anatomy

<div style="background:#f6f8fa;border:1px solid #e2e8f0;border-radius:12px;padding:32px 24px;margin:24px 0;font-family:sans-serif;">
  <div style="display:inline-flex;border-bottom:4px solid rgb(0,0,0);height:48px;align-items:center;padding:0 16px;gap:8px;background:#fff;border-radius:4px 4px 0 0;border:1px solid #e2e8f0;border-bottom:4px solid #000;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:12px;color:#000;border:1px solid currentColor;border-radius:50%;width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:700;">i</span>
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);">Tab label</span>
    <span style="font-size:11px;color:rgb(0,0,0);">✕</span>
  </div>
  <div style="margin-top:28px;display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:13px;color:#475569;">
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">1</span>
      <div><strong>Swatch</strong><br>16×16px color dot, radius 4px. Identifies a job or document by color. Mutually exclusive with Icon.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">2</span>
      <div><strong>Icon</strong><br>14×14px Outline icon only. Communicates content category (info, warning, etc.). Mutually exclusive with Swatch.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">3</span>
      <div><strong>Label</strong><br>Roboto Bold, 13px / 21px. Truncated with ellipsis when total tab width exceeds 320px.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">4</span>
      <div><strong>Close ×</strong><br>14×14px. Removes the tab. Hidden on pinned tabs or when only one tab is open.</div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="background:#6366f1;color:#fff;border-radius:50%;width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;">5</span>
      <div><strong>Active indicator</strong><br>4px bottom border in <code>color/black/100</code>. Visible only on the currently active tab.</div>
    </div>
  </div>
</div>

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
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:4px 4px 0 0;">
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);">Overview</span>
  </div>
</div>

### 2 · Swatch + Label

Color dot paired with a label. Use when the tab represents a job or document with a unique color identity.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:4px 4px 0 0;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);">Job A — Fabric inspection</span>
  </div>
</div>

### 3 · Swatch + Label + Close _(most common)_

Closeable job or document tab. The most frequently used variant in the product.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <div style="display:inline-flex;border-bottom:4px solid rgb(0,0,0);height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:4px 4px 0 0;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);">Job A — Fabric inspection</span>
    <span style="font-size:11px;color:rgb(0,0,0);cursor:pointer;">✕</span>
  </div>
</div>

### 4 · Icon + Label + Close

Categorized, closeable tab. Use when the content type has semantic meaning (info, warning, error) that an icon can communicate.

<div style="font-family:sans-serif;margin:12px 0 20px;">
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;border:1px solid #e2e8f0;border-radius:4px 4px 0 0;">
    <span style="font-size:12px;color:rgb(0,0,0);border:1px solid currentColor;border-radius:50%;width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:700;">i</span>
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);">Calibration report</span>
    <span style="font-size:11px;color:rgb(0,0,0);cursor:pointer;">✕</span>
  </div>
</div>

---

## States (Detailed)

### Default

Base state. Label uses `color/text/tertiary`. No background, no border indicator.

<div style="font-family:sans-serif;margin:12px 0 20px;background:#f6f8fa;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
    <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
  </div>
</div>

### Hover

Triggered on pointer over. Background becomes `rgba(0,0,0,0.04)`. Label color stays tertiary.

<div style="font-family:sans-serif;margin:12px 0 20px;background:#f6f8fa;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;background:rgba(0,0,0,0.04);">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
    <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
  </div>
</div>

### Active

Currently selected tab. Label switches to `color/text/primary`. A 4px bottom border in `color/black/100` marks the active position. **Only one tab can be Active at a time.**

<div style="font-family:sans-serif;margin:12px 0 20px;background:#f6f8fa;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
  <div style="display:inline-flex;border-bottom:4px solid rgb(0,0,0);height:48px;align-items:center;padding:0 16px;gap:8px;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(0,0,0);white-space:nowrap;">Tab label</span>
    <span style="font-size:11px;color:rgb(0,0,0);">✕</span>
  </div>
</div>

### Disabled

Not interactive. The entire tab item is rendered at 40% opacity. Cannot be clicked or focused.

<div style="font-family:sans-serif;margin:12px 0 20px;background:#f6f8fa;border:1px solid #e2e8f0;border-radius:8px;padding:20px;">
  <div style="display:inline-flex;border-bottom:4px solid transparent;height:48px;align-items:center;padding:0 16px;gap:8px;opacity:0.4;pointer-events:none;">
    <div style="width:16px;height:16px;border-radius:4px;background:rgb(215,25,47);border:1px solid rgb(230,230,230);flex-shrink:0;"></div>
    <span style="font-size:13px;font-weight:700;color:rgb(151,153,155);white-space:nowrap;">Tab label</span>
    <span style="font-size:11px;color:rgb(151,153,155);">✕</span>
  </div>
</div>

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
