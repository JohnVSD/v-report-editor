<template>
  <section class="container editor-workplace">
    <Header />
    <div class="editor-container">
      <div class="editor-main">
        组件编排区域
      </div>
      <div class="editor-setting">
        组件设置区域
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Header from "./components/editor-header.vue"
</script>

<style lang="less" scoped>
.container {
  width: 100vw;
  height: 100vh;
}
.editor-container {
  height: calc(100% - 60px);
  width: 100%;
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  background-color: var(--color-fill-2);
}
.editor-main {
  height: 100%;
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  position: relative;
  padding: 16px;
  box-sizing: border-box;
}
.editor-setting {
  background-color: #fff;
  width: 360px;
  border-left: 1px solid #f0f3f4;
  overflow-x: hidden;
  padding: 16px;
  box-sizing: border-box;
}
</style>