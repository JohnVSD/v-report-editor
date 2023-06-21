<template>
  <BaseSetting :form="report" />
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store';
import BaseSetting from '../components/base-setting.vue';
import { computed, ComputedRef } from 'vue';

const editorStore = useEditorStore();
const report = computed(() => {
  return editorStore.getReport;
}) as ComputedRef<IReport>;
</script>

<style lang="less" scoped></style>
