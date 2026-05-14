<script setup lang="ts">
import { computed, ref } from "vue";
import DocsPlayground from "./DocsPlayground.vue";
import TabItemPreview from "./TabItemPreview.vue";

type TabState = "default" | "hover" | "active" | "disabled";

const state = ref<TabState>("default");
const label = ref("Job A - Fabric inspection");
const swatchColor = ref("rgb(215, 25, 47)");
const showSwatch = ref(true);
const showIcon = ref(false);
const showClose = ref(true);

function onSwatchChange() {
  if (showSwatch.value) {
    showIcon.value = false;
  }
}

function onIconChange() {
  if (showIcon.value) {
    showSwatch.value = false;
  }
}

const displayLabel = computed(() => {
  const text = label.value.trim() || "Tab label";
  return text.length > 48 ? `${text.slice(0, 47)}...` : text;
});

const currentVariant = computed(() => {
  if (showSwatch.value && showClose.value) return "Swatch + Label + Close";
  if (showSwatch.value) return "Swatch + Label";
  if (showIcon.value && showClose.value) return "Icon + Label + Close";
  if (showIcon.value) return "Icon + Label";
  if (showClose.value) return "Label + Close";
  return "Label only";
});
</script>

<template>
  <DocsPlayground>
    <template #controls>
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
          Label
          <input v-model="label" type="text" maxlength="120" />
        </label>

        <label>
          Swatch Color (RGB)
          <input v-model="swatchColor" type="text" :disabled="!showSwatch" />
        </label>

        <label class="checkbox-control">
          <span>Show Swatch</span>
          <input
            v-model="showSwatch"
            type="checkbox"
            @change="onSwatchChange"
          />
        </label>

        <label class="checkbox-control">
          <span>Show Icon</span>
          <input v-model="showIcon" type="checkbox" @change="onIconChange" />
        </label>

        <label class="checkbox-control">
          <span>Show Close</span>
          <input v-model="showClose" type="checkbox" />
        </label>
      </div>
    </template>

    <template #summary>
      <div class="properties-summary">
        <div class="properties-summary__item">
          <span class="properties-summary__label">Current Variant</span>
          <strong>{{ currentVariant }}</strong>
        </div>
        <div class="properties-summary__item">
          <span class="properties-summary__label">State</span>
          <strong>{{ state }}</strong>
        </div>
        <div class="properties-summary__item">
          <span class="properties-summary__label">Slots</span>
          <strong>
            {{ showSwatch ? "Swatch" : showIcon ? "Icon" : "None" }} /
            {{ showClose ? "Close" : "No close" }}
          </strong>
        </div>
      </div>
    </template>

    <TabItemPreview
      :label="displayLabel"
      :state="state"
      :swatch-color="swatchColor"
      :show-swatch="showSwatch"
      :show-icon="showIcon"
      :show-close="showClose"
    />
  </DocsPlayground>
</template>

<style scoped>
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

.checkbox-control {
  justify-content: space-between;
}

.checkbox-control input {
  width: 18px;
  height: 18px;
}

.properties-summary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.properties-summary__item {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 12px;
  background: #fff;
}

.properties-summary__label {
  display: block;
  margin-bottom: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #64748b;
}
</style>
