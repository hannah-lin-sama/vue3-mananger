<script setup lang="ts">
import { MENU_DATA } from "@/constants";
import { useRouter } from 'vue-router'

const router = useRouter()

const changeHandler = (path: string) => {
  console.log("changeHandler", path);
  router.push(path)
};

</script>
<template>
  <t-menu theme="light" style="margin-right: 40px" @change="changeHandler">
    <li v-for="(value) in MENU_DATA" :key="value.path">
      <t-menu-item :value="value.path">
        {{ value.label }}
      </t-menu-item>
    </li>
  </t-menu>
</template>
