<template>
  <section class="editor-header">
    <div class="left-side">logo</div>
    <div class="center-side">table chart 组件选择</div>
    <ul class="right-side">
      <li>保存并预览</li>
      <li>
        <a-button type="text" @click="save">保存</a-button>
      </li>
      <li>
        <a-button type="text" @click="exit">退出</a-button>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['save', 'exit']);

function save() {
  emits('save');
}

function exit() {
  emits('exit');
}
</script>

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

.right-side {
  width: 200px;
  display: flex;
  justify-content: space-between;
}
</style>
