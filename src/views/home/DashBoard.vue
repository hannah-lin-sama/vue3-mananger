<template>
  <div class="dashboard">
    <LineChat :domId="id"></LineChat>
    <p>Welcome to the Dashboard</p>
  </div>
</template>

<script setup lang="ts">
import LineChat from '@/components/LineChat.vue'
import { useId } from 'vue'

const id = useId()

console.log('id0-', id)
</script>
