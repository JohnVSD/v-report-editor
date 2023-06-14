<template>
  <a-card title="报表列表" :bordered="false" :style="{ width: '100%' }">
    <template #extra>
      <ReportAdd @on-create-success="onCreateSuccess" />
    </template>
    <a-table
      :bordered="false"
      :columns="columns"
      :data="reports"
      @cell-click="cellClick"
    />
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getReportList } from '@/api/report';
import { TableColumnData, TableData } from '@arco-design/web-vue';
import ReportAdd from './report-add.vue';

const router = useRouter();

let reports = ref<IReport[]>([]);
async function renderReports() {
  const { data } = await getReportList();
  reports.value = data;
}
renderReports();

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'remark',
  },
  {
    title: '状态', // 已发布、草稿
    dataIndex: 'status',
  },
  {
    title: '创建人',
    dataIndex: 'creator',
  },
  {
    title: '更新时间',
    dataIndex: 'updateAt',
  },
];

function onCreateSuccess() {
  renderReports();
}

function cellClick(record: TableData, column: TableColumnData) {
  console.log('点击行：', column.title, record);
  router.push({ name: 'ReportEditor' });
}
</script>

<style lang="less" scoped></style>
