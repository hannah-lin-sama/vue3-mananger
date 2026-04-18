<script setup lang="ts">
import { MENU_DATA } from "@/constants";
import { useRouter } from "vue-router";
import { ElMenu, ElMenuItem } from "element-plus";

const router = useRouter();

const changeHandler = (path: string) => {
  console.log("changeHandler", path);
  router.push(path);
};

defineOptions({
  name: "LeftMenu",
});
</script>

<template>
  <el-menu theme="light" @select="changeHandler">
    <li v-for="value in MENU_DATA" :key="value.path">
      <el-menu-item :index="value.path" :value="value.path">
        {{ value.label }}
      </el-menu-item>
    </li>
  </el-menu>
</template>
