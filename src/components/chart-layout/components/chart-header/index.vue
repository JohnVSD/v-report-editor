<template>
  <div class="chart-header">
    <div class="chart-header__left">
      <h3 class="chart-header__left">{{ title }}</h3>
      <!-- 描述文案 -->
      <a-tooltip v-if="remark !== ''" :content="remark">
        <icon-exclamation-circle :size="16" class="mx-10" />
      </a-tooltip>
    </div>
    <div class="chart-header__center"></div>
    <div class="chart-header__right">
      <a-dropdown trigger="click" @select="handleDropdown">
        <span class="inline-block px-10 cursor-pointer">
          <icon-more />
        </span>
        <template #content>
          <a-doption v-if="!hideDelBtn" value="delete">删除</a-doption>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '啦啦啦',
  },
  remark: String,
  hideDelBtn: Boolean,
});

const emit = defineEmits(['handleDropdown']);
const handleDropdown = (value: any) => {
  emit('handleDropdown', value);
};
</script>

<style lang="less" scoped>
.chart-header {
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-neutral-3);

  &__left {
    display: flex;
    place-items: center;
  }

  &__left h3 {
    font-size: 16px;
    font-weight: bold;
  }
}
</style>
