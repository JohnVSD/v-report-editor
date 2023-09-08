<template>
  <section class="report-manage">
    123
    <ReportList />
  </section>
</template>

<script lang="ts" setup>
import ReportList from './components/report-list.vue';
import EventHub from '@/utils/event-hub';

const emmitter = EventHub.getInstance();
emmitter.on('event-test', handleTest);
emmitter.on('event-test', handleTest2);

function handleTest(data) {
  console.log('监听事件1：', data);
}

function handleTest2(data) {
  console.log('监听事件2：', data);
}

setTimeout(() => {
  console.log('移除事件1');
  emmitter.off('event-test', handleTest);
}, 2000);
</script>

<style lang="less" scoped></style>
