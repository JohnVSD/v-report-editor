<template>
  <section class="editor-setting">
    <component :is="currentComponent"></component>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useEditorStore } from '@/store';

import { Line, Table } from './charts';
import Report from './report/index.vue';

const componentMap: any = {
  report: Report,
  line: Line,
  table: Table,
};

const editorStore = useEditorStore();
const currentComponent = computed(() => {
  const { type = '' } = editorStore.activeChart || {};

  return componentMap[type];
});
</script>

<style lang="less" scoped></style>
