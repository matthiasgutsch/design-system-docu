<script setup lang="ts">
import { computed, ref } from "vue";

type TabState = "default" | "hover" | "active" | "disabled";
type ContentVariant =
  | "label-only"
  | "swatch-label"
  | "swatch-label-close"
  | "icon-label-close";

const state = ref<TabState>("default");
const variant = ref<ContentVariant>("swatch-label-close");
const label = ref("Job A - Fabric inspection");
const swatchColor = ref("rgb(215, 25, 47)");

const hasSwatch = computed(
  () =>
    variant.value === "swatch-label" || variant.value === "swatch-label-close",
);
const hasIcon = computed(() => variant.value === "icon-label-close");
const hasClose = computed(
  () =>
    variant.value === "swatch-label-close" ||
    variant.value === "icon-label-close",
);
const isDisabled = computed(() => state.value === "disabled");
const isActive = computed(() => state.value === "active");

const tabStyle = computed(() => {
  const borderBottom = isActive.value
    ? "4px solid rgb(0, 0, 0)"
    : "4px solid transparent";
  const opacity = isDisabled.value ? 0.5 : 1;
  const cursor = isDisabled.value ? "not-allowed" : "pointer";
  const bg =
    state.value === "hover" ? "rgb(248, 250, 252)" : "rgb(255, 255, 255)";

  return {
    borderBottom,
    opacity,
    cursor,
    background: bg,
  };
});

const displayLabel = computed(() => {
  const text = label.value.trim() || "Tab label";
  return text.length > 48 ? `${text.slice(0, 47)}...` : text;
});
</script>

<template>
  <section class="tab-playground">
    <div class="controls">
      <label>
        State
        <select v-model="state">
          <option value="default">Default</option>
          <option value="hover">Hover</option>
          <option value="active">Active</option>
          <option value="disabled">Disabled</option>
        </select>
      </label>

      <label>
        Variant
        <select v-model="variant">
          <option value="label-only">Label only</option>
          <option value="swatch-label">Swatch + label</option>
          <option value="swatch-label-close">Swatch + label + close</option>
          <option value="icon-label-close">Icon + label + close</option>
        </select>
      </label>

      <label>
        Label
        <input v-model="label" type="text" maxlength="120" />
      </label>

      <label>
        Swatch Color (RGB)
        <input v-model="swatchColor" type="text" :disabled="!hasSwatch" />
      </label>
    </div>

    <div class="preview-shell">
      <div class="tab" :style="tabStyle">
        <span
          v-if="hasSwatch"
          class="swatch"
          :style="{ background: swatchColor }"
        ></span>
        <span v-if="hasIcon" class="icon">i</span>
        <span class="text">{{ displayLabel }}</span>
        <span v-if="hasClose" class="close">x</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab-playground {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0 24px;
}

.controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #334155;
}

input,
select {
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  background: #fff;
}

.preview-shell {
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
  padding: 16px;
  overflow-x: auto;
  background: #f8fafc;
}

.tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  max-width: 320px;
  min-width: 120px;
  padding: 0 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
}

.swatch {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  flex-shrink: 0;
}

.icon {
  width: 14px;
  height: 14px;
  border: 1px solid currentColor;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  flex-shrink: 0;
}

.text {
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.close {
  margin-left: auto;
  font-size: 11px;
  line-height: 1;
  flex-shrink: 0;
}
</style>
