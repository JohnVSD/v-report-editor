<template>
  <icon-font :type="type" :size="size" />
</template>

<script lang="ts">
import { Icon } from '@arco-design/web-vue';

const IconFont = Icon.addFromIconFontCn({
  src: '//at.alicdn.com/t/c/font_3020181_uacndllq149.js',
});

export default {
  components: {
    IconFont,
  },
  props: {
    type: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 20,
    },
  },
};
</script>
