<template>
  <section class="container">
    <a-card title="报表列表" :bordered="false" :style="{ width: '100%' }">
      <a-table :columns="columns" :data="data" />
    </a-card>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

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
    creator: '张三'
  }
])
</script>

<style lang="less" scoped>

</style>