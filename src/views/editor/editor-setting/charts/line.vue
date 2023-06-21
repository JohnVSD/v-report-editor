<template>
  <BaseSetting :form="currentChart" />
</template>

<script lang="ts" setup>
import { useEditorStore } from '@/store';
import BaseSetting from '../components/base-setting.vue';

const editorStore = useEditorStore();
const currentChart = editorStore.findCurrentChart() as IChart;
</script>

<style lang="less" scoped></style>
