<template>
  <div>
    <p>User View</p>
    <p>
      <span @click="handleClick">list</span>&nbsp;&nbsp;
      <span @click="handleClick2">detail</span>
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
  router.push({
    path: "/user/123",
  });
};

defineOptions({
  name: "UserView",
  beforeRouteLeave(to, from) {
    console.log("xx view-leave", to);
    return true;
  },
});
</script>
<style scoped>
span {
  cursor: pointer;
}
</style>
