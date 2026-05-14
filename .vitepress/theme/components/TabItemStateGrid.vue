<template>
  <div class="tab-state-grid">
    <TabItemPreview title="Default" state="default" framed />
    <TabItemPreview title="Hover" state="hover" framed />
    <TabItemPreview title="Active" state="active" framed />
    <TabItemPreview title="Disabled" state="disabled" framed />
  </div>
</template>

<script setup lang="ts">
import TabItemPreview from "./TabItemPreview.vue";
</script>

<style scoped>
.tab-state-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 16px 0 8px;
}

.tab-state-grid :deep(.tab-preview) {
  margin: 0;
}

.tab-state-grid :deep(.tab-preview--framed) {
  padding: 12px;
  background: #f8fafc;
  border-radius: 10px;
}
</style>
