<template>
  <div class="loading" :style="{ height: height, width }">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: 'loading'
  },
  height: {
    type: String,
    default: '100px'
  },
  width: {
    type: String,
    default: '100%'
  }
})
defineOptions({
  name: 'LoadingComponent'
})
</script>

<style scoped>
.loading {
  border: 1px solid #c4bbbb;
}
</style>
