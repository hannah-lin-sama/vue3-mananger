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

<template>
  <el-button variant="text" theme="primary" size="small" @click="handleClick">
    {{ props.title }}
  </el-button>
</template>
