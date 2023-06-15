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
    >
      <template #optional="{ record }">
        <a-popconfirm
          :content="'确认删除' + record.name + '吗？'"
          position="right"
          @before-ok="(done) => done(true)"
          @ok="deleteReport(record.hash)"
        >
          <a-button type="primary"> 删除 </a-button>
        </a-popconfirm>
      </template>
    </a-table>
  </a-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getReportList, delReport } from '@/api/report';
import { TableData } from '@arco-design/web-vue';
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
  {
    title: '操作',
    slotName: 'optional',
  },
];

function onCreateSuccess() {
  renderReports();
}

async function deleteReport(hash: string) {
  await delReport({ reportHash: hash });
  renderReports();
}

function cellClick(record: TableData) {
  router.push(`/report-editor/${record.hash}`);
}
</script>

<style lang="less" scoped></style>
