<script setup lang="ts">
import TabItemPreview from "./TabItemPreview.vue";

const anatomyItems = [
  {
    number: "1",
    title: "Swatch",
    description:
      "16x16px color dot, radius 4px. Identifies a job or document by color.",
  },
  {
    number: "2",
    title: "Icon",
    description:
      "14x14px outline icon only. Use it as an alternative to the swatch, never together.",
  },
  {
    number: "3",
    title: "Label",
    description:
      "Roboto Bold, 13px / 21px. Truncated with ellipsis when total width exceeds 320px.",
  },
  {
    number: "4",
    title: "Close",
    description:
      "14x14px action. Hidden on pinned tabs or when only one tab is open.",
  },
  {
    number: "5",
    title: "Active indicator",
    description:
      "4px bottom border in color/black/100. Visible only on the current tab.",
  },
];
</script>

<template>
  <section class="tab-anatomy">
    <div class="tab-anatomy__canvas">
      <TabItemPreview
        framed
        state="active"
        label="Tab label"
        :show-swatch="true"
        :show-close="true"
      />
    </div>

    <div class="tab-anatomy__notes">
      <div
        v-for="item in anatomyItems"
        :key="item.number"
        class="tab-anatomy__item"
      >
        <span class="tab-anatomy__badge">{{ item.number }}</span>
        <div>
          <strong>{{ item.title }}</strong>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tab-anatomy {
  background: #f6f8fa;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 24px 0;
}

.tab-anatomy__canvas {
  margin-bottom: 24px;
}

.tab-anatomy__canvas :deep(.tab-preview) {
  margin: 0;
}

.tab-anatomy__canvas :deep(.tab-preview--framed) {
  padding: 0;
  border: 0;
  background: transparent;
}

.tab-anatomy__notes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
  font-family: sans-serif;
  font-size: 13px;
  color: #475569;
}

.tab-anatomy__item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.tab-anatomy__badge {
  background: #6366f1;
  color: #fff;
  border-radius: 999px;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  flex-shrink: 0;
}

.tab-anatomy__item p {
  margin: 4px 0 0;
}
</style>
