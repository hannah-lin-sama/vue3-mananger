<template>
  <main>
    <el-container>
      <el-aside> <LeftMenu></LeftMenu></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="manage-page">
            <RouterView v-slot="{ Component, route }">
              <component :is="Component" :key="route.path" />
            </RouterView></div
        ></el-main>
      </el-container>
    </el-container>
  </main>
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import LeftMenu from "./components/LeftMenu/index.vue";
import { ElContainer, ElAside, ElHeader, ElMain } from "element-plus";
window.addEventListener("popstate", () => {
  console.log("popstate---");
});
</script>
