<template>
  <a-form :model="formData" :style="{ width: '600px' }" layout="vertical">
    <a-form-item field="name" label="名称：">
      <a-input v-model="formData.name" placeholder="请输入" />
    </a-form-item>
    <a-form-item field="remark" label="描述：">
      <a-textarea v-model="formData.remark" placeholder="请输入" allow-clear />
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  form: IReport | IChart;
}>();

const emit = defineEmits(['update:form']);

const formData = computed({
  get() {
    return props.form;
  },
  set(value) {
    emit('update:form', value);
  },
});
</script>

<style lang="less" scoped></style>
