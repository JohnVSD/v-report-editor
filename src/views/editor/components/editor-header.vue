<template>
  <section class="editor-header">
    <div class="left-side">logo</div>
    <ul class="center-side btn-group">
      <li @click="createChart('line')">
        <icon-bar-chart class="icon" />
        <p>图表</p>
      </li>
      <li @click="createChart('table')">
        <icon-drag-dot class="icon" />
        <p>表格</p>
      </li>
    </ul>
    <ul class="right-side btn-group">
      <li>
        <icon-eye class="icon" />
        <p>保存并预览</p>
      </li>
      <li @click="save">
        <icon-save class="icon" />
        <p>保存</p>
      </li>
      <li @click="exit">
        <icon-export class="icon" />
        <p>退出</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
const emit = defineEmits(['createChart', 'save', 'exit']);

const createChart = (type: string) => {
  emit('createChart', type);
};

const save = () => {
  emit('save');
};

const exit = () => {
  emit('exit');
};
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

.center-side {
  display: flex;
}

.right-side {
  width: 220px;
  display: flex;
  justify-content: space-between;
}

.btn-group {
  li {
    margin-right: 16px;
    transition: all 0.2s;
    font-size: 12px;
    padding: 4px 8px;
    text-align: center;
    cursor: pointer;

    .icon {
      font-size: 24px;
    }
  }

  li:hover {
    background-color: #000;
  }
}
</style>
