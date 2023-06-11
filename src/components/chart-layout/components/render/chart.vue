<template>
  <div id="echart" ref="echart" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import * as Echarts from 'echarts';

onMounted(() => {
  const echartRef = ref<HTMLElement | null>(null);
  const Echart = Echarts.init(echartRef.value);

  Echart.setOption({
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
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
