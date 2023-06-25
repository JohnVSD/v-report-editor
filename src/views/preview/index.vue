<template>
  <section class="preview-container">
    <div class="preview-main">
      <grid-layout
        :layout="charts"
        :col-num="12"
        :row-height="1"
        auto-size
        vertical-compact
        use-css-transforms
        :margin="[16, 16]"
        :is-draggable="false"
        :is-resizable="false"
      >
        <grid-item
          v-for="item in charts"
          :key="item.id"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :data-chart="item.id"
        >
          <ChartLayout :data="item" />
        </grid-item>
      </grid-layout>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useEditorStore } from '@/store';
import { getReportDetail } from '@/api/report';
import ChartLayout from '@/components/chart-layout/index.vue';

const editorStore = useEditorStore();
const charts = computed(() => {
  return editorStore.charts;
});

const route = useRoute();
const reportHash = computed<string>(() => {
  const { anchor = '' } = route.query;
  if (anchor) {
    return anchor;
  }

  const { reportHash } = route.params;
  return reportHash;
});

watch(
  reportHash,
  (val) => {
    if (val) {
      initCharts();
    }
  },
  { immediate: true }
);

async function initCharts() {
  if (!reportHash.value) return false;

  const { data } = await getReportDetail({ reportHash: reportHash.value });
  const { charts = [], ...rest } = data;
  editorStore.init(rest, charts);
}

onUnmounted(() => {
  editorStore.clearAll();
});
</script>

<style lang="less" scoped>
.preview-container {
  height: 100vh;
  background-color: var(--color-fill-2);
}
</style>
