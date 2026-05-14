<script setup lang="ts">
import { computed } from "vue";

type TabState = "default" | "hover" | "active" | "disabled";
type TabVariant =
  | "label-only"
  | "swatch-label"
  | "swatch-label-close"
  | "icon-label-close";

const props = withDefaults(
  defineProps<{
    state?: TabState;
    variant?: TabVariant;
    showSwatch?: boolean;
    showIcon?: boolean;
    showClose?: boolean;
    label?: string;
    swatchColor?: string;
    framed?: boolean;
    title?: string;
  }>(),
  {
    state: "default",
    variant: "swatch-label-close",
    label: "Tab label",
    swatchColor: "rgb(215, 25, 47)",
    showSwatch: undefined,
    showIcon: undefined,
    showClose: undefined,
    framed: false,
    title: "",
  },
);

const variantDefaults = computed(() => ({
  showSwatch:
    props.variant === "swatch-label" || props.variant === "swatch-label-close",
  showIcon: props.variant === "icon-label-close",
  showClose:
    props.variant === "swatch-label-close" ||
    props.variant === "icon-label-close",
}));

const resolvedSlots = computed(() => {
  const swatch = props.showSwatch ?? variantDefaults.value.showSwatch;
  let icon = props.showIcon ?? variantDefaults.value.showIcon;
  const close = props.showClose ?? variantDefaults.value.showClose;

  if (swatch && icon) {
    icon = false;
  }

  return {
    swatch,
    icon,
    close,
  };
});

const hasSwatch = computed(() => resolvedSlots.value.swatch);
const hasIcon = computed(() => resolvedSlots.value.icon);
const hasClose = computed(() => resolvedSlots.value.close);
const isDisabled = computed(() => props.state === "disabled");
const isActive = computed(() => props.state === "active");
const isHover = computed(() => props.state === "hover");

const displayLabel = computed(() => {
  const text = props.label.trim() || "Tab label";
  return text.length > 48 ? `${text.slice(0, 47)}...` : text;
});

const tabStyle = computed(() => ({
  borderBottom: isActive.value
    ? "4px solid rgb(0, 0, 0)"
    : "4px solid transparent",
  background: isHover.value ? "rgba(0, 0, 0, 0.04)" : "rgb(255, 255, 255)",
  opacity: isDisabled.value ? 0.4 : 1,
  pointerEvents: isDisabled.value ? "none" : "auto",
}));

const textStyle = computed(() => ({
  color: props.state === "active" ? "rgb(0, 0, 0)" : "rgb(151, 153, 155)",
}));
</script>

<template>
  <div class="tab-preview" :class="{ 'tab-preview--framed': framed }">
    <p v-if="title" class="tab-preview__title">{{ title }}</p>
    <div class="tab-preview__tab" :style="tabStyle">
      <span
        v-if="hasSwatch"
        class="tab-preview__swatch"
        :style="{ background: swatchColor }"
      ></span>
      <span v-if="hasIcon" class="tab-preview__icon">i</span>
      <span class="tab-preview__label" :style="textStyle">{{
        displayLabel
      }}</span>
      <span v-if="hasClose" class="tab-preview__close" :style="textStyle"
        >x</span
      >
    </div>
  </div>
</template>

<style scoped>
.tab-preview {
  font-family: Roboto, sans-serif;
  margin: 12px 0 20px;
}

.tab-preview--framed {
  background: #f6f8fa;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 20px;
}

.tab-preview__title {
  margin: 0 0 10px;
  font-size: 12px;
  font-weight: 700;
  color: #334155;
}

.tab-preview__tab {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  width: fit-content;
  max-width: 320px;
  min-width: 0;
  padding: 0 16px;
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
}

.tab-preview__swatch {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  flex-shrink: 0;
}

.tab-preview__icon {
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
  color: rgb(0, 0, 0);
}

.tab-preview__label {
  font-size: 13px;
  line-height: 21px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
}

.tab-preview__close {
  margin-left: auto;
  width: 14px;
  height: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 1;
  flex-shrink: 0;
}
</style>
