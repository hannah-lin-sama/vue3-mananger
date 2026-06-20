<template>
  <el-button theme="primary" size="large" @click="handleClick">
    <template #icon><Plus /></template>
    {{ props.title }}
  </el-button>
</template>

<script setup>
import { ElButton } from "element-plus";

const props = defineProps({
  title: String,
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>
