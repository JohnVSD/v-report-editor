<template>
  <div id="echart" ref="echartRef" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as Echarts from 'echarts';

const echartRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const Echart = Echarts.init(echartRef.value);

  Echart.setOption({
    legend: {
      data: ['销量'],
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
});
</script>

<style lang="less" scoped></style>
