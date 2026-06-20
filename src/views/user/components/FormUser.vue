<script setup lang="ts">
import { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

// 获取父组件传递的props
const props = defineProps({
  current: Object
})

// 获取父组件传递的函数
const emit = defineEmits(['onClose'])

const form = ref()

const formData = reactive({
  ...props.current
})

const onClose = () => {
  emit('onClose')
}

const onConfirm = () => {
  // 执行表单实例的submit方法
  form.value && form.value.submit()
}

const submit = () => {
  console.log('context', { ...formData })
}
</script>
<template>
  <el-dialog
    :visible="true"
    :closeOnOverlayClick="false"
    header="用户信息"
    :on-close="onClose"
    :on-confirm="onConfirm"
  >
    <el-form ref="form" label-align="top" @submit="submit">
      <el-form-item label="用户名称" :initial-data="formData.userName">
        <el-input v-model="formData.userName" />
      </el-form-item>

      <el-form-item label="用户邮箱" :initial-data="formData.email">
        <el-input v-model="formData.email" />
      </el-form-item>

      <el-form-item label="所属角色" :initial-data="formData.roleId">
        <el-input v-model="formData.roleId" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
