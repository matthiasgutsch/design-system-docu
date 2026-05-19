<script setup lang="ts">
import { computed, ref } from "vue";

type Swatch = {
  name: string;
  token: string;
  value: string;
};

const activeTab = ref<"primary" | "semantic">("primary");

const primaryColors: Swatch[] = [
  { name: "Brand 100", token: "--primitive-brand-100", value: "#fce8eb" },
  { name: "Brand 300", token: "--primitive-brand-300", value: "#ef8694" },
  { name: "Brand 500", token: "--primitive-brand-500", value: "#d7192f" },
  { name: "Brand 700", token: "--primitive-brand-700", value: "#880f1b" },
  { name: "Brand 900", token: "--primitive-brand-900", value: "#380609" },
];

const semanticColors: Swatch[] = [
  { name: "Action Primary", token: "--color-action-primary", value: "#d7192f" },
  { name: "Text Primary", token: "--color-text-primary", value: "#0f172a" },
  { name: "Status Success", token: "--color-status-success", value: "#22c55e" },
  { name: "Status Warning", token: "--color-status-warning", value: "#eab308" },
  { name: "Status Error", token: "--color-status-error", value: "#ef4444" },
  { name: "Status Info", token: "--color-status-info", value: "#3b82f6" },
];

const visibleColors = computed(() =>
  activeTab.value === "primary" ? primaryColors : semanticColors,
);
</script>

<template>
  <div class="color-token-tabs">
    <div class="color-token-tabs__header">
      <button
        type="button"
        class="color-token-tabs__tab"
        :class="{ 'is-active': activeTab === 'primary' }"
        @click="activeTab = 'primary'"
      >
        Primary Colors
      </button>
      <button
        type="button"
        class="color-token-tabs__tab"
        :class="{ 'is-active': activeTab === 'semantic' }"
        @click="activeTab = 'semantic'"
      >
        Semantic Colors
      </button>
    </div>

    <div class="color-token-tabs__grid">
      <article
        v-for="swatch in visibleColors"
        :key="swatch.token"
        class="color-token-tabs__card"
      >
        <div
          class="color-token-tabs__preview"
          :style="{ backgroundColor: swatch.value }"
        ></div>
        <p class="color-token-tabs__name">{{ swatch.name }}</p>
        <p class="color-token-tabs__token">{{ swatch.token }}</p>
        <p class="color-token-tabs__value">{{ swatch.value }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.color-token-tabs {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px;
  margin: 16px 0 20px;
  background: var(--vp-c-bg-soft);
}

.color-token-tabs__header {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}

.color-token-tabs__tab {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.color-token-tabs__tab.is-active {
  border-color: #d7192f;
  color: #d7192f;
}

.color-token-tabs__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 10px;
}

.color-token-tabs__card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 10px;
  background: var(--vp-c-bg);
}

.color-token-tabs__preview {
  height: 46px;
  border-radius: 8px;
  border: 1px solid rgb(15 23 42 / 0.08);
  margin-bottom: 8px;
}

.color-token-tabs__name {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 700;
}

.color-token-tabs__token,
.color-token-tabs__value {
  margin: 2px 0 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 12px;
  color: var(--vp-c-text-2);
}
</style>
