<template>
  <a-menu
    :default-open-keys="['1']"
    :default-selected-keys="['0_1']"
    :style="{ width: '100%' }"
    @menu-item-click="onClickMenuItem"
  >
    <a-menu-item v-for="(item, index) in subMenuList" :key="`0_${index}`">
      {{ item?.meta?.title || '' }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Message} from '@arco-design/web-vue';
// import {
//   IconHome,
//   IconCalendar,
// } from '@arco-design/web-vue/es/icon';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function onClickMenuItem(key: string) {
  Message.info({ content: `You select ${key}`, showIcon: true });
}

const subMenuList = computed(() => {
  const curRoute = route.name;
  const routes = router.getRoutes().find(item => {
    return item.name === curRoute
  })
  return routes?.children || []
})
</script>

<style lang="less" scoped>

</style>