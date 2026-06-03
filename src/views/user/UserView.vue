<template>
  <div>
    <div class="title">User View</div>
    <p>
      <span class="btn" @click="handleClick">list</span>&nbsp;&nbsp;
      <span class="btn" @click="handleClick2">detail</span>&nbsp;&nbsp;
      <span class="btn" @click="handleClick3">data-view</span>&nbsp;&nbsp;
    </p>
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
import { useRouter, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'
const router = useRouter()

const handleClick = () => {
  // 命名路由
  router.push({
    name: 'user-list'
  })
}

const handleClick2 = () => {
  // 对象路由（path模式）
  router.push({
    path: '/user/123'
  })
}

const handleClick3 = () => {
  // 字符路由
  router.push('/data-view')
}

onBeforeRouteUpdate((to, from) => {
  console.log('user-view-onupdate', to, from)
  return true
})

onBeforeRouteLeave((to, from) => {
  console.log('user-view-onleave', to, from)
  return true
})

defineOptions({
  name: 'UserView',
  // 路由进入守卫
  beforeRouteEnter(to, from) {
    console.log('user-view-enter', to, from)
    return true
  },
  beforeRouteUpdate(to, from) {
    console.log('user-view-update', to, from)
    return true
  },
  // 路由离开守卫
  beforeRouteLeave(to, from) {
    console.log('user-view-leave', to, from)
    return true
  }
})
</script>
<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
}

span {
  cursor: pointer;
}
.btn {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #3b82f6;
  background-color: #3b82f6;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
}
</style>
