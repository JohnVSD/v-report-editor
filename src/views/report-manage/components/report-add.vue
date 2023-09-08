<template>
  <a-button type="primary" @click="handleAdd"> 新建 </a-button>
  <!-- 新建报表弹框表单 -->
  <a-modal
    v-model:visible="visible"
    title="新建报表"
    title-align="start"
    @cancel="handleCancel"
    @before-ok="handleBeforeOk"
    @ok="handleCreateReport"
  >
    <a-form :model="form">
      <a-form-item
        field="name"
        label="名称："
        :rules="[{ required: true, message: 'name is required' }]"
        :validate-trigger="['change', 'input']"
      >
        <a-input v-model="form.name" placeholder="请输入" />
      </a-form-item>
      <a-form-item field="remark" label="描述：">
        <a-textarea v-model="form.remark" placeholder="请输入" allow-clear />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { reactive, ref, defineEmits } from 'vue';
import { Message } from '@arco-design/web-vue';
import { createReport } from '@/api/report';
import EventHub from '@/utils/event-hub';
const emmitter = EventHub.getInstance();

const visible = ref(false);
const emit = defineEmits(['onCreateSuccess']);
const form = reactive({
  name: '',
  remark: '',
});

const handleAdd = () => {
  emmitter.emit('event-test', { name: '新建报表' });
  visible.value = true;

  setTimeout(() => {
    emmitter.emit('event-test', { name: '第二次发布' });
    // console.log('事后监听...');
    // emmitter.on('event-test', (data) => {
    //   console.log('事后监听：', data);
    // });
  }, 4000);
};

const handleCancel = () => {
  visible.value = false;
};
const handleBeforeOk = (done) => {
  // ! 此处之后可以添加校验函数
  window.setTimeout(() => {
    done();
  }, 1000);
};

async function handleCreateReport() {
  const {
    data: { data, code = 0, msg },
  } = await createReport({
    ...form,
    status: 0,
  });

  if (code === 0) {
    Message.success('创建成功');
    emit('onCreateSuccess');
  } else {
    Message.warning('Error：' + msg);
  }
}
</script>

<style lang="less" scoped></style>
