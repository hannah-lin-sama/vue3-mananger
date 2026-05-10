<script setup>
import { ElButton } from 'element-plus'

const props = defineProps({
  title: String
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <el-button theme="primary" size="large" @click="handleClick">
    <template #icon><add-icon /></template>
    {{ props.title }}
  </el-button>
</template>
