<template>
  <a-menu
    :default-open-keys="['1']"
    :default-selected-keys="['0_1']"
    :style="{ width: '100%' }"
  >
    <a-menu-item v-for="(item, index) in subMenuList" :key="`0_${index}`" @click="goto(item)">
      {{ item?.meta?.title || '' }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter, useRoute, RouteRecordRaw } from 'vue-router';

const router = useRouter();
const route = useRoute();
const routes = router.getRoutes();

const subMenuList = computed(() => {
  const curRoute = route.name;
  const curRoutes = routes.find(item => {
    return item.name === curRoute
  })
  return curRoutes?.children || []
})

function goto(item: RouteRecordRaw) {
  router.push({
    name: item.name
  })
}
</script>

<style lang="less" scoped>

</style>