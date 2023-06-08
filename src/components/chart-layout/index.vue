<template>
  <section class="chart">
    <ChartHeader :title="data.name" :remark="data.remark" />
    <div class="chart-body"> {{ data.type || '' }} </div>
  </section>
</template>

<script lang="ts" setup>
import ChartHeader from './components/chart-header.vue';

defineProps<{
  data: IChart;
}>();
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 2px;
}
</style>
