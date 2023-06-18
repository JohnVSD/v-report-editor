<template>
  <section class="editor-workplace">
    <Header @create-chart="createChart" @save="saveReport" />
    <div class="editor-container">
      <div class="editor-main">
        <div class="editor-report p-14 box-border mb-16">
          <h3>{{ reportInfo?.name }}</h3>
        </div>
        <!--  -->
        <div class="editor-charts">
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
      </div>
      <div class="editor-setting">组件设置区域</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useEditorStore } from '@/store';
import { getReportDetail, saveReportInfo } from '@/api/report';
import { Message } from '@arco-design/web-vue';
import ChartLayout from '@/components/chart-layout/index.vue';
import Header from './components/editor-header.vue';

const route = useRoute();
const reportHash = route.params?.reportHash as string;
const editorStore = useEditorStore();
const layout = ref<IChart[]>([]);

const reportInfo = computed(() => {
  return editorStore.report;
});

async function reportDetail() {
  const { data } = await getReportDetail({ reportHash });
  const { charts = [], ...rest } = data;
  layout.value = charts;
  editorStore.init(rest, charts);
}
reportDetail();

onUnmounted(() => {
  editorStore.clearAll();
});

const createChart = (type: string) => {
  switch (type) {
    case 'line':
      console.log('创建折线图');
      break;
    case 'table':
      console.log('创建表格');
      break;
    default:
      console.warn('创建图表失败：type is empty');
      break;
  }
};

const saveReport = async () => {
  const { report, charts } = editorStore;
  await saveReportInfo({ report, charts });
  Message.success('已保存');
};
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

.editor-setting {
  background-color: #fff;
  width: 360px;
  border-left: 1px solid #f0f3f4;
  overflow-x: hidden;
  padding: 16px;
  box-sizing: border-box;
}
</style>
