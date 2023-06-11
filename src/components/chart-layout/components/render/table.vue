<template>
  <a-table :bordered="false" :columns="columns" :data="tableData" />
</template>

<script lang="ts" setup>
const props = defineProps({
  chartConfig: Object,
  data: Object,
});

const columns = props.data?.columns || [];
const tableData = props.data?.rows || [];
</script>

<style lang="less" scoped></style>
