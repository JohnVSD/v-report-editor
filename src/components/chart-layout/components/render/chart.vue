<template>
  <div id="echart" ref="echartRef" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import * as Echarts from 'echarts';
import { LineOptions, BarOptions } from '../chart-options';

const props = defineProps<{
  chartConfig: IChart;
  data: {
    categories: any[];
    series: any[];
  };
}>();

const echartRef = ref<HTMLElement | null>(null);
const getOptions: any = computed(() => {
  const { type } = props.chartConfig;
  const { categories, series } = props.data;

  switch (type) {
    case 'line':
      return LineOptions(series, categories);
    case 'bar':
      return BarOptions(series, categories);
    default:
      return LineOptions(series, categories);
  }
});

onMounted(() => {
  const Echart = Echarts.init(echartRef.value as HTMLElement);

  Echart.setOption(getOptions.value);
});
</script>

<style lang="less" scoped></style>
