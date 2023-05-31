<template>
  <!-- 后台数据渲染 -->
  <a-menu
    :default-open-keys="['1']"
    :default-selected-keys="['0_1']"
    :style="{ width: '100%' }"
    @menu-item-click="onClickMenuItem"
  >
    <a-menu-item key="0_1">
      周报
    </a-menu-item>
    <a-menu-item key="0_2">
      月报
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue';

function onClickMenuItem(key: string) {
  Message.info({ content: `You select ${key}`, showIcon: true });
}
</script>

<style lang="less" scoped>

</style>