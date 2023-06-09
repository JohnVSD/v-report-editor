<template>
  <section class="chart">
    <ChartHeader :title="data.name" :remark="data.remark" />
    <div class="chart-body px-16">
      <component
        :is="currentChart"
        :chart-config="data"
        :data="chartData"
      ></component>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import ChartHeader from './components/chart-header/index.vue';
import Chart from '@/components/chart-layout/components/render/chart.vue';
import Table from '@/components/chart-layout/components/render/table.vue';
import { tableData, lineData, barData } from './chart-data.js';

const props = defineProps<{
  data: IChart;
}>();

const chartType = computed(() => props.data.type || '');

const currentChart = computed(() => {
  switch (chartType.value) {
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
const chartData = computed(() => {
  switch (chartType.value) {
    case 'table':
      return tableData;
    case 'line':
      return lineData;
    case 'bar':
      return barData;
    default:
      return null;
  }
});
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2px;
}
</style>
