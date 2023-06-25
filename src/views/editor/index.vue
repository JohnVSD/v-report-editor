<template>
  <section class="editor-workplace">
    <Header @create-chart="createChart" @save="saveReport" @exit="handleExit" />
    <!-- 内容区 -->
    <div class="editor-container">
      <div class="editor-main">
        <div
          class="editor-report p-14 box-border"
          :class="{
            'editor-report__active': activeChart?.id === 'report',
          }"
          @click="selectedReport"
        >
          <h3>{{ reportInfo?.name }}</h3>
        </div>
        <!-- 图表拖拽区 -->
        <div
          class="editor-charts"
          @click.capture="selectedChart"
          @Keydown="deleteChart"
        >
          <grid-layout
            v-model:layout="charts"
            :col-num="colNum"
            :row-height="1"
            :margin="[16, 16]"
            :vertical-compact="true"
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
import { ref, onUnmounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { useEditorStore } from '@/store';
import { getReportDetail, saveReportInfo } from '@/api/report';
import { getChartInstance } from '@/components/editor/component-factory';
import ChartLayout from '@/components/chart-layout/index.vue';
import Header from './components/editor-header.vue';
import EditorSetting from './editor-setting/index.vue';

const colNum = ref(12);

const router = useRouter();
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

async function initCharts() {
  const { data } = await getReportDetail({ reportHash });
  const { charts = [], ...rest } = data;
  editorStore.init(rest, charts);
}
initCharts();

onUnmounted(() => {
  editorStore.clearAll();
});

const createChart = (type: string) => {
  let entity = getChartInstance(type);

  if (entity) {
    // 动态添加防重叠算法
    entity.x = (charts.value.length * 4) % (colNum.value || 12);
    entity.y = charts.value.length + (colNum.value || 12);
    entity.i = charts.value.length;
    console.log(`${entity.name} 配置：`, [entity.x, entity.y, entity.i]);

    editorStore.createChart(entity);
    setActiveChart(entity);
  }
};

const deleteChart = (e) => {
  // ! 事件不生效，不知为何
  console.log('按下按键：', e);
};

const saveReport = async () => {
  const { report, charts } = editorStore;
  await saveReportInfo({ report, charts });
  Message.success('已保存');
};

const handleExit = () => {
  router.back();
};

const selectedReport = () => {
  setActiveChart({ id: 'report', type: 'report' });
};

function setActiveChart(item: { id: string; type: string }) {
  editorStore.setActiveChart({ id: item.id, type: item.type });
}

function selectedChart(event: any) {
  const path = event.path as HTMLElement[];
  let targetIndex = -1;

  const isIncludeGrid = path.some((item, index) => {
    if (!item.className || typeof item.className !== 'string') return false;

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
    selectedReport();
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
