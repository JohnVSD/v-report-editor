<template>
  <section class="navbar">
    <div class="left-side">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        />
        <a-typography-title :style="{ margin: 0, fontSize: '18px' }" :heading="5">
          Arco Pro
        </a-typography-title>
      </a-space>
    </div>
    <ul class="center-side">
      <li v-for="nav in navList">
        <router-link :to="nav.path">{{ nav.meta.title }}</router-link>
      </li>
    </ul>
    <div class="right-side">右侧</div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navList = computed(() => {
  const routes = router.getRoutes()

  return routes.filter(item => {
    return item.meta && item.meta.showInNav
  })
})

</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}
.left-side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.center-side {
  display: flex;
  flex: 1;
  place-items: center;
  margin-left: 10px;

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
}
.right-side {
  display: flex;
  place-items: center;
  padding-right: 20px;
  list-style: none;
}
</style>