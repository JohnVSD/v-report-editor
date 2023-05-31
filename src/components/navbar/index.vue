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
    <div class="center-side">
      居中菜单
    </div>
    <div class="right-side">右侧</div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style scoped>
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
  margin-left: 60px;
}
.right-side {
  display: flex;
  place-items: center;
  padding-right: 20px;
  list-style: none;
}
</style>