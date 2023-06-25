<template>
  <!-- 后台数据渲染 -->
  <a-menu
    :default-selected-keys="[firstReport]"
    :style="{ width: '100%' }"
    @menu-item-click="switchViews"
  >
    <a-menu-item
      v-for="item in reports"
      :key="item.hash"
      :class="{ 'arco-menu-selected': item.hash === firstReport }"
    >
      {{ item.name }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getReportList } from '@/api/report';

const Router = useRouter();

const reports = ref<IReport[]>([]);
const firstReport = computed(() => {
  if (reports.value.length) {
    const { hash = '' } = reports.value[0] || {};
    return hash;
  }

  return '';
});

initReports();
async function initReports() {
  const { data = [] } = await getReportList();
  reports.value.push(...data);
}

watch(firstReport, (val) => {
  if (val !== '') {
    console.log('当前：', val);
    switchViews(val);
  }
});

function switchViews(key: string) {
  Router.replace({
    query: {
      anchor: key,
    },
  });
}
</script>

<style lang="less" scoped></style>
