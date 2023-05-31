<template>
  <a-layout class="layout">
    <a-layout-header class="layout-header">
      <Navbar />
    </a-layout-header>
    <a-layout class="inside-layout">
      <a-layout-sider collapsible breakpoint="xl">
        <a-menu
          :default-open-keys="['1']"
          :default-selected-keys="['0_3']"
          :style="{ width: '100%' }"
          @menu-item-click="onClickMenuItem"
        >
          <a-menu-item key="0_1">
            <IconHome></IconHome>
            报表1
          </a-menu-item>
          <a-menu-item key="0_2">
            <IconCalendar></IconCalendar>
            报表2
          </a-menu-item>
        </a-menu>
        <!-- trigger -->
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>
      <a-layout-content>
        123
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { Message} from '@arco-design/web-vue';
import Navbar from '@/components/navbar/index.vue'

function onClickMenuItem(key: string) {
  Message.info({ content: `You select ${key}`, showIcon: true });
}
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
</style>