<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  title: String,
})

const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};

</script>

<template>
  <t-button variant="text" theme="primary" size="small" @click="handleClick">
    {{ props.title }}
  </t-button>
</template>