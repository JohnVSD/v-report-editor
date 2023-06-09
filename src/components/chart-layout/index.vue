<template>
  <section class="chart">
    <ChartHeader :title="data.name" :remark="data.remark" />
    <div class="chart-body px-16">
      <component :is="currentChart"></component>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import ChartHeader from './components/chart-header/index.vue';
import Chart from '@/components/chart-layout/components/render/chart.vue';
import Table from '@/components/chart-layout/components/render/table.vue';

const props = defineProps<{
  data: IChart;
}>();

const currentChart = computed(() => {
  switch (props.data.type) {
    case 'table':
      return Table;
    case 'line':
    case 'bar':
      return Chart;
    default:
      return null;
  }
});

// 获取 chartData 数据
// ! ...
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2px;
}
</style>
