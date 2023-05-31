<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <navbar />
    </a-layout-header>
    <a-layout class="inside-layout">
      <a-layout-sider collapsible breakpoint="xl">
        <Menu v-if="isMyReport" />
        <sidebar v-else ></sidebar>
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Navbar from '@/components/navbar/index.vue'
import Sidebar from './components/sidebar.vue'
import Menu from './components/menu.vue'
import { useRoute } from 'vue-router';
import { computed, watch } from 'vue';

const route = useRoute();
const isMyReport = computed(() => {
  return route.name === 'MyReport';
})

watch(isMyReport, () => {
  console.log('路由名称：', route.name);
  console.log('啦啦啦：', isMyReport, isMyReport.value);
})

</script>

<style lang="less" scoped>
@nav-size-height: 60px;
@layout-max-width: 1100px;
.layout {
  width: 100%;
  height: 100%;
}
.inside-layout {
  padding-top: @nav-size-height;
}

.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-content {
  padding: 16px;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>