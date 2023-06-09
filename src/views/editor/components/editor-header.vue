<template>
  <section class="editor-header">
    <div class="left-side">logo</div>
    <div class="center-side">table chart 组件选择</div>
    <div class="right-side">
      <ul>
        <li>预览</li>
        <li>保存并预览</li>
        <li>退出</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.editor-header {
  height: 60px;
  width: 100%;
  background-color: var(--color-text-1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
}
</style>
