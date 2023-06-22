<template>
  <section class="editor-workplace">
    <Header @create-chart="createChart" @save="saveReport" />
    <!-- 内容区 -->
    <div class="editor-container">
      <div class="editor-main">
        <div
          class="editor-report p-14 box-border"
          :class="{
            'editor-report__active': activeChart?.id === 'report',
          }"
          @click="selectReport"
        >
          <h3>{{ reportInfo?.name }}</h3>
        </div>
        <!-- 图表拖拽区 -->
        <div class="editor-charts" @click.capture="selectChart">
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
              :data-chart="item.id"
              :class="{ 'grid-item__active': item.id === activeChart?.id }"
            >
              <ChartLayout :data="item" />
            </grid-item>
          </grid-layout>
        </div>
      </div>
      <!-- 右侧配置区 -->
      <EditorSetting />
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
import EditorSetting from './editor-setting/index.vue';

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
      entity = ComponentInstance['line'];
      break;
    case 'bar':
      entity = ComponentInstance['bar'];
      break;
    case 'table':
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

const selectReport = () => {
  setActiveChart({ id: 'report', type: 'report' });
};

function setActiveChart(item: { id: string; type: string }) {
  editorStore.setActiveChart({ id: item.id, type: item.type });
}

function selectChart(event: any) {
  console.log(event);
  const path = event.path as HTMLElement[];
  let targetIndex = -1;

  const isIncludeGrid = path.some((item, index) => {
    if (!item.className) return false;

    if (item.className.includes('vue-grid-item')) {
      targetIndex = index;
    }
    return item.className.includes('vue-grid-item');
  });

  if (isIncludeGrid) {
    const target = path[targetIndex];
    const chartId = target.dataset.chart;
    const { id = '', type = '' } = charts.value.find(
      (item) => item.id === chartId
    ) as IChart;
    setActiveChart({ id, type });
  } else {
    selectReport();
  }
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

  &__active {
    border-bottom: 1px solid #5392ff;
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
