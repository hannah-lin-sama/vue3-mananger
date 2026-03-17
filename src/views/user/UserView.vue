<template>
  <div>
    <div class="title">User View</div>
    <p>
      <span class="btn" @click="handleClick">list</span>&nbsp;&nbsp;
      <span class="btn" @click="handleClick2">detail</span>
    </p>
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleClick = () => {
  router.push({
    name: "user-list",
  });
};

const handleClick2 = () => {
  console.log('xx', Promise.resolve())
  // router.push({
  //   path: "/user/123",
  // });
};

defineOptions({
  name: "UserView",
  // 路由进入守卫
  beforeRouteEnter(to, from) {
    console.log("user-view-enter", to);
    return true;
  },
  beforeRouteUpdate(to, from) {
    console.log("user-view-update", to);
    return true;
  },
  // 路由离开守卫
  beforeRouteLeave(to, from) {
    console.log("user-view-leave", to);
    return true;
  },
});
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
