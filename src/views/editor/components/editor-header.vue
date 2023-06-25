<template>
  <section class="editor-header">
    <div class="left-side">logo</div>
    <!--  -->
    <ul class="center-side btn-group">
      <!-- <li @click="createChart('line')"> -->
      <li
        v-for="(plugin, index) in PluginList"
        :key="`${plugin.type}-${index}`"
        class="btn-item"
        @click="togglePlugin(plugin)"
      >
        <IconFont :type="plugin.icon" />
        <p>{{ plugin.name }}</p>
        <div v-if="avtivePlugin === plugin.type" class="charts-btn-group">
          <div
            v-for="item in plugin.plugins"
            :key="item.type"
            class="charts-btn-item"
            @click="createChart(item.type)"
          >
            <IconFont :type="item.icon" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </li>
    </ul>
    <!--  -->
    <ul class="right-side btn-group">
      <li @click="saveAndPreview">
        <icon-eye class="icon" />
        <p>保存并预览</p>
      </li>
      <li @click="save">
        <icon-save class="icon" />
        <p>保存</p>
      </li>
      <li @click="handleExit">
        <icon-export class="icon" />
        <p>退出</p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { IconFont } from '@/components/tools';
import PluginList from './plugin-list';

const emit = defineEmits(['createChart', 'saveAndPreview', 'save', 'exit']);

const avtivePlugin = ref('');

const togglePlugin = (plugin: any) => {
  avtivePlugin.value = plugin.type;
};

const createChart = (type: string) => {
  emit('createChart', type);
};

const saveAndPreview = () => {
  emit('saveAndPreview');
};

const save = () => {
  emit('save');
};

const handleExit = () => {
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

  .btn-item {
    position: relative;
  }

  .charts-btn-group {
    position: absolute;
    background-color: var(--color-text-1);
    top: 60px;
    left: -50px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    z-index: 1;
    border-radius: 4px;
    overflow: hidden;
  }

  .charts-btn-item {
    width: 70px;
    height: 70px;
    padding: 16px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #000;
    }
  }
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
