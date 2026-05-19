<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

const currentVersion = computed(() => {
  const match = route.path.match(/^\/(v[^/]+)\//);
  return match ? match[1] : "Latest";
});

const isArchived = computed(() => currentVersion.value !== "Latest");
const shouldShowBanner = computed(
  () => route.path !== "/" && route.path !== "/index.html",
);
</script>

<template>
  <div
    v-if="shouldShowBanner"
    class="version-banner"
    :data-archived="isArchived"
  >
    <span class="version-banner__label">Viewing:</span>
    <strong class="version-banner__value">{{ currentVersion }}</strong>
    <span v-if="isArchived" class="version-banner__hint">(archived docs)</span>
  </div>
</template>
