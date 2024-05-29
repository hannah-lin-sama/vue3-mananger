<script setup>
import { defineEmits } from 'vue'
import { AddIcon } from 'tdesign-icons-vue-next';
const props = defineProps({
  title: String,
})

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};

</script>

<template>
  <t-button theme="primary" size="large" @click="handleClick">
    <template #icon><add-icon /></template>
    {{ props.title }}
  </t-button>
</template>