<template>
  <div >
  <p>User Detail View</p>
    <!-- 插槽接收 Component（路由组件VNode）和 route（路由信息） -->
    <RouterView v-slot="{ Component, route }">
      <!-- 过渡动画 -->
      <transition name="fade" mode="out-in">
        <!-- 动态组件渲染 -->
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">

defineOptions({
  name: 'UserDetail',
  beforeRouteLeave (to, from,) {
    console.log('xxchildren-leave', to);
   
   return true
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

