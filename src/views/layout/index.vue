<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <navbar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="layout-sider" collapsible breakpoint="xl">
        <Menu v-if="isMyReport" />
        <sidebar v-else></sidebar>
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import Navbar from '@/components/navbar/index.vue';
import Sidebar from './components/sidebar.vue';
import Menu from './components/menu.vue';

const route = useRoute();
const isMyReport = computed(() => {
  return route.name === 'MyReportList';
});
</script>

<style lang="less" scoped>
@nav-size-height: 60px;
@layout-max-width: 1100px;

.layout {
  width: 100%;
  height: 100%;
}

.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: @nav-size-height;
}

.layout-sider {
  padding-top: @nav-size-height;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}

.layout-content {
  padding-top: 76px;
  padding-left: 220px;
  padding-right: 16px;
  min-height: 100vh;
  overflow-y: hidden;
  background-color: var(--color-fill-2);
  transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>
