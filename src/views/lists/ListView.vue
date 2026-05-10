<template>
  <button :title="title">点击我</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('这是一段话题')
</script>
