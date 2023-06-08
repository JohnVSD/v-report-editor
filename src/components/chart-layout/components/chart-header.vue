<template>
  <div class="chart-header">
    <div class="chart-header__left">
      <h3 class="chart-header__left">{{ title }}</h3>
      <!-- 描述文案 -->
      <icon-exclamation-circle />
      <a-tooltip v-if="remark !== ''" :content="remark">
        <icon-exclamation-circle />
      </a-tooltip>
    </div>
    <div class="chart-header__center">中间</div>
    <div class="chart-header__right">右侧</div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '啦啦啦',
  },
  remark: String,
});
</script>

<style lang="less" scoped>
.chart-header {
  padding: 16px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__left h3 {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
