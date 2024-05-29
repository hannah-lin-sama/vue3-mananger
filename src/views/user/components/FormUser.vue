<script setup lang="ts">
import type { FormProps, FormInstanceFunctions } from 'tdesign-vue-next';

import { reactive, ref } from 'vue'

// 获取父组件传递的props
const props = defineProps({
  current: Object,
})

// 获取父组件传递的函数
const emit = defineEmits(['onClose']);

const form = ref<FormInstanceFunctions>();

const formData: FormProps['data'] = reactive({
  ...props.current,
});



const onClose = () => {
  emit('onClose');
}

const onConfirm = () => {
  // 执行表单实例的submit方法
  form.value && form.value.submit()

}

const submit = () => {
  console.log('context', { ...formData });

}


</script>
<template>
  <t-dialog :visible="true" :closeOnOverlayClick="false" header="用户信息" :on-close="onClose" :on-confirm="onConfirm">
    <t-form ref="form" label-align="top" @submit="submit">
      <t-form-item label="用户名称" :initial-data="formData.userName">
        <t-input v-model="formData.userName" />
      </t-form-item>

      <t-form-item label="用户邮箱" :initial-data="formData.email">
        <t-input v-model="formData.email" />
      </t-form-item>

      <t-form-item label="所属角色" :initial-data="formData.roleId">
        <t-input v-model="formData.roleId" />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>