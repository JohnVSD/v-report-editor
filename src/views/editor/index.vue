<template>
  <section class="editor-workplace">
    <Header @create-chart="createChart" @save="saveReport" />
    <!-- 内容区 -->
    <div class="editor-container">
      <div class="editor-main">
        <div class="editor-report p-14 box-border mb-16">
          <h3>{{ reportInfo?.name }}</h3>
        </div>
        <!-- 图表拖拽区 -->
        <div class="editor-charts">
          <grid-layout
            v-model:layout="charts"
            :col-num="12"
            :row-height="1"
            :margin="[16, 16]"
          >
            <grid-item
              v-for="item in charts"
              :key="item.id"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
              :class="{ 'grid-item__active': item.id === activeChart?.id }"
              @click="setActiveChart(item)"
            >
              <ChartLayout :data="item" />
            </grid-item>
          </grid-layout>
        </div>
      </div>
      <!-- 右侧配置区 -->
      <div class="editor-setting">组件设置区域</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Message } from '@arco-design/web-vue';

import { useEditorStore } from '@/store';
import { getReportDetail, saveReportInfo } from '@/api/report';
import ComponentInstance, {
  ComponentBase,
} from '@/components/editor/component-factory';
import ChartLayout from '@/components/chart-layout/index.vue';
import Header from './components/editor-header.vue';

const route = useRoute();
const reportHash = route.params?.reportHash as string;

const editorStore = useEditorStore();
const reportInfo = computed(() => {
  return editorStore.report;
});
const activeChart = computed(() => {
  return editorStore.activeChart;
});
const charts = computed(() => {
  return editorStore.charts;
});

async function reportDetail() {
  const { data } = await getReportDetail({ reportHash });
  const { charts = [], ...rest } = data;
  editorStore.init(rest, charts);
}
reportDetail();

onUnmounted(() => {
  editorStore.clearAll();
});

const createChart = (type: string) => {
  let entity: ComponentBase | null = null;

  switch (type) {
    case 'line':
      console.log('创建折线图');
      entity = ComponentInstance['line'];
      break;
    case 'bar':
      console.log('创建折线图');
      entity = ComponentInstance['bar'];
      break;
    case 'table':
      console.log('创建表格');
      entity = ComponentInstance['table'];
      break;
    default:
      Message.warning('图表类型未找到' + type);
      return false;
  }
  entity.i = charts.value.length;

  editorStore.createChart(entity);
  setActiveChart(entity);
};

const saveReport = async () => {
  const { report, charts } = editorStore;
  await saveReportInfo({ report, charts });
  Message.success('已保存');
};

function setActiveChart(item: IChart) {
  editorStore.setActiveChart({ id: item.id, type: item.type });
}
</script>

<style lang="less" scoped>
.editor-workplace {
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
  box-sizing: border-box;
}

.editor-report {
  background-color: #fff;

  h3 {
    font-weight: bold;
  }
}

.vue-grid-item {
  border: 1px solid #fff;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 0 6px #5392ff;
  }
}

.editor-charts {
  .grid-item__active {
    border: 1px solid #5392ff;
  }
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
