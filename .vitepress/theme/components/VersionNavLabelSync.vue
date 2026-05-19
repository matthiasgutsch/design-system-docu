<script setup lang="ts">
import { nextTick, onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

function resolveVersionFromPath(path: string) {
  const match = path.match(/^\/(v[^/]+)\//);
  return match ? match[1] : "Latest";
}

function syncVersionNavLabel() {
  if (typeof document === "undefined") {
    return;
  }

  const navGroups = Array.from(
    document.querySelectorAll<HTMLElement>(".VPNavBarMenuGroup"),
  );

  const versionGroup = navGroups.find((group) => {
    const linkLabels = Array.from(
      group.querySelectorAll<HTMLElement>(".VPMenuLink .VPLink"),
    ).map((link) => (link.textContent ?? "").trim());

    return (
      linkLabels.includes("Latest") &&
      linkLabels.some((label) => /^v\d/.test(label))
    );
  });

  if (!versionGroup) {
    return;
  }

  const label = versionGroup.querySelector<HTMLElement>(
    ".button .text > span:not(.text-icon)",
  );

  if (!label) {
    return;
  }

  label.textContent = resolveVersionFromPath(route.path);
}

async function scheduleSync() {
  await nextTick();
  syncVersionNavLabel();
  window.setTimeout(syncVersionNavLabel, 0);
}

onMounted(() => {
  void scheduleSync();
});

watch(
  () => route.path,
  () => {
    void scheduleSync();
  },
);
</script>

<template></template>
