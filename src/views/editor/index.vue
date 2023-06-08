<template>
  <section class="container editor-workplace">
    <Header />
    <div class="editor-container">
      <div class="editor-main">
        <grid-layout
          v-model:layout="layout"
          :col-num="12"
          :row-height="1"
          :margin="[16, 16]"
        >
          <grid-item
            v-for="item in layout"
            :key="item.i"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <ChartLayout :data="item" />
          </grid-item>
        </grid-layout>
      </div>
      <div class="editor-setting">组件设置区域</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';

import ChartLayout from '@/components/chart-layout/index.vue';
import Header from './components/editor-header.vue';

const layout: Ref<IChart[]> = ref([
  {
    x: 0,
    y: 0,
    w: 2,
    h: 7,
    i: '0',
    name: '折线',
    remark: '我是一个折线图',
    type: 'line',
  },
  { x: 2, y: 0, w: 2, h: 7, i: '1', name: '柱状', type: 'bar' },
  { x: 4, y: 0, w: 2, h: 7, i: '2', name: 'table', type: 'table' },
]);
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.editor-container {
  height: calc(100% - 60px);
  width: 100%;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  background-color: var(--color-fill-2);
}

.editor-main {
  height: 100%;
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}

.editor-setting {
  background-color: #fff;
  width: 360px;
  border-left: 1px solid #f0f3f4;
  overflow-x: hidden;
  padding: 16px;
  box-sizing: border-box;
}
</style>
