---
title: Icon
---

# Icon

A container that renders any icon at a fixed, consistent size. The icon itself is swappable — the component enforces correct dimensions and alignment across all 10 size steps.

<div style="background:#FFFFFF;border-radius:12px;padding:24px;margin:24px 0;display:flex;align-items:center;justify-content:center;">
  <img src="/images/icon/overview.png" alt="All icon sizes" style="max-width:100%;height:auto;image-rendering:crisp-edges;" />
</div>

---

## Size scale

Ten sizes are available. Each size is a strict token — do not use intermediate values.

<div style="font-family:sans-serif;margin:24px 0;overflow-x:auto;">
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    <thead>
      <tr style="border-bottom:2px solid #e2e8f0;">
        <th style="text-align:left;padding:10px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;font-weight:600;">Size</th>
        <th style="text-align:left;padding:10px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;font-weight:600;">Preview</th>
        <th style="text-align:left;padding:10px 16px;font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;font-weight:600;">Typical use</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">16px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-16.png" style="width:16px;height:16px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Inline with dense text, table cells, compact UI</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">20px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-20.png" style="width:20px;height:20px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Default for most UI contexts — buttons, inputs, labels</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">24px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-24.png" style="width:24px;height:24px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Navigation items, list rows, form fields</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">28px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-28.png" style="width:28px;height:28px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Section headers, medium-emphasis actions</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">32px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-32.png" style="width:32px;height:32px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Card headers, toolbar primary actions</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">36px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-36.png" style="width:36px;height:36px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Feature callouts, onboarding steps</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">40px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-40.png" style="width:40px;height:40px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Empty states, large action buttons</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">44px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-44.png" style="width:44px;height:44px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Hero sections, prominent status indicators</td>
      </tr>
      <tr style="border-bottom:1px solid #f1f5f9;">
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">48px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-48.png" style="width:48px;height:48px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Full-page empty states, splash screens</td>
      </tr>
      <tr>
        <td style="padding:12px 16px;font-family:monospace;font-weight:600;">52px</td>
        <td style="padding:12px 16px;background:#FFFFFF;width:60px;text-align:center;"><img src="/images/icon/size-52.png" style="width:52px;height:52px;display:block;margin:auto;" /></td>
        <td style="padding:12px 16px;color:#64748b;">Maximum size — landing pages, large illustrations</td>
      </tr>
    </tbody>
  </table>
</div>

---

## Properties

| Property | Values                                          | Default     | Description                            |
| -------- | ----------------------------------------------- | ----------- | -------------------------------------- |
| `size`   | 16 · 20 · 24 · 28 · 32 · 36 · 40 · 44 · 48 · 52 | 16          | The icon bounding box in pixels        |
| `icon`   | any icon node                                   | specrometer | The icon rendered inside the container |

---

## Usage guidelines

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0;font-family:sans-serif;font-size:14px;">
  <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:16px;">
    <p style="font-weight:700;color:#15803d;margin:0 0 8px;">✓ Do</p>
    <ul style="margin:0;padding-left:16px;color:#166534;line-height:1.7;">
      <li>Use only the 10 defined size steps</li>
      <li>Match icon size to surrounding text size — 16px with 12–13px text, 20px with 14–16px text</li>
      <li>Use 20px as the default when no specific context dictates otherwise</li>
      <li>Keep icons optically aligned to adjacent text baselines</li>
    </ul>
  </div>
  <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:8px;padding:16px;">
    <p style="font-weight:700;color:#b91c1c;margin:0 0 8px;">✕ Don't</p>
    <ul style="margin:0;padding-left:16px;color:#991b1b;line-height:1.7;">
      <li>Use intermediate sizes (e.g. 18px, 22px) — always snap to the scale</li>
      <li>Scale icons with CSS transforms — use the correct size property instead</li>
      <li>Mix more than two different icon sizes in the same UI region</li>
      <li>Use icons smaller than 16px — they become illegible</li>
    </ul>
  </div>
</div>

---

## Accessibility notes _(for designers)_

- Icons used without a visible label must have an accessible text alternative
- Decorative icons (purely visual, no semantic meaning) should be hidden from assistive technology
- Minimum touch target for interactive icons is 44×44px — use a larger hit area even if the visual icon is smaller
- Do not rely on icon color alone to convey meaning — pair with a label or tooltip

---

## Version history

<ComponentVersion
  :current="{ component: '1.0', system: '1.0.0', date: '2026-05-14', status: 'Stable' }"
  :history="[
    { component: '1.0', system: '1.0.0', systemLink: '/changelog#v100', date: '2026-05-14', change: 'Initial release — 10 size steps, swappable icon slot' },
  ]"
/>
