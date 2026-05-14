<template>
  <section class="docs-playground">
    <div v-if="$slots.controls" class="docs-playground__controls">
      <slot name="controls" />
    </div>

    <div v-if="$slots.summary" class="docs-playground__summary">
      <slot name="summary" />
    </div>

    <div class="preview-shell">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.docs-playground {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  margin: 16px 0 24px;
}

.docs-playground__controls,
.docs-playground__summary {
  margin-bottom: 16px;
}

.preview-shell {
  border: 1px dashed #cbd5e1;
  border-radius: 10px;
  padding: 16px;
  overflow-x: auto;
  background: #fff;
}
</style>
