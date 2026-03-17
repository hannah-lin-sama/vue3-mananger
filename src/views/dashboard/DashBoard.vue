<template>
  <div class="page-tile">
    <ProjectList />
  </div>
</template>
<script lang="ts" setup>
import ProjectList from "./components/ProjectList.vue";

defineOptions({
  name: "DashBoard",
  // 组件实例创建前调用
  beforeRouteEnter(to, from) {
    console.log("DashBoard-beforeRouteEnter", to, from);
    return true;
  },
  // 路由参数更新时调用
  beforeRouteUpdate(to, from) {
    console.log("DashBoard-beforeRouteUpdate", to, from);
    return true;
  },
  // 组件实例销毁前调用
  beforeRouteLeave(to, from) {
    console.log("DashBoard-beforeRouteLeave", to, from);
    return true;
  },
});
</script>
