<template>
  <a-card title="报表列表" :bordered="false" :style="{ width: '100%' }">
    <a-button class="mb-16" type="primary" @click="handleCreateReport"
      >新建</a-button
    >
    <a-table
      :bordered="false"
      :columns="columns"
      :data="data"
      @cell-click="cellClick"
    />
  </a-card>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { createReport, getReportList } from '@/api/report';
import { TableColumnData, TableData, Message } from '@arco-design/web-vue';

const router = useRouter();

async function renderReports() {
  const reports = await getReportList();
  console.log('报表列表：', reports);
}
renderReports();

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '描述',
    dataIndex: 'desc',
  },
  {
    title: '状态', // 已发布、草稿
    dataIndex: 'status',
  },
  {
    title: '更新时间',
    dataIndex: 'updateTime',
  },
  {
    title: '创建人',
    dataIndex: 'creator',
  },
];

const data = reactive([
  {
    name: '智能分析',
    desc: '分析一些东西',
    status: 0,
    updateTime: '2023-04-25',
    creator: '张三',
  },
]);

async function handleCreateReport() {
  const {
    data: { data, code = 0, msg },
  } = await createReport({
    name: '第一个报表',
    remark: '描述一下',
    status: 0,
  });

  if (code === 0) {
    Message.success('创建成功');
    renderReports();
  } else {
    Message.warning('Error：' + msg);
  }
}

function cellClick(record: TableData, column: TableColumnData) {
  console.log('点击行：', column.title, record);
  router.push({ name: 'ReportEditor' });
}
</script>

<style lang="less" scoped></style>
