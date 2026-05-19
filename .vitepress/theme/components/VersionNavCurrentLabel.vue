<script setup lang="ts">
import { nextTick, onMounted, watch } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

function getCurrentVersion(path: string) {
  const match = path.match(/^\/(v[^/]+)\//);
  return match ? match[1] : "Latest";
}

function syncVersionButtonLabel(path: string) {
  if (typeof document === "undefined") {
    return;
  }

  const groups = Array.from(
    document.querySelectorAll<HTMLElement>(".VPNavBarMenuGroup"),
  );

  const versionGroup = groups.find((group) => {
    const labels = Array.from(
      group.querySelectorAll<HTMLElement>(".VPMenuLink .VPLink"),
    ).map((link) => (link.textContent ?? "").trim());

    return (
      labels.includes("Latest") && labels.some((label) => /^v\d/.test(label))
    );
  });

  if (!versionGroup) {
    return;
  }

  const buttonLabel = versionGroup.querySelector<HTMLElement>(
    ".button .text > span:not(.text-icon)",
  );

  if (!buttonLabel) {
    return;
  }

  buttonLabel.textContent = getCurrentVersion(path);
}

async function updateLabel(path: string) {
  await nextTick();
  syncVersionButtonLabel(path);
  window.setTimeout(() => syncVersionButtonLabel(path), 0);
}

onMounted(() => {
  void updateLabel(route.path);
});

watch(
  () => route.path,
  (path) => {
    void updateLabel(path);
  },
);
</script>

<template></template>
