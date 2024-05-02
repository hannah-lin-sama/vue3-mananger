<script setup lang="ts">
import { MENU_DATA } from "@/constants";

const changeHandler = (value: string) => {
  console.log("changeHandler", value);
};

</script>
<template>
  <t-menu theme="light" style="margin-right: 40px" @change="changeHandler">
    <li v-for="(value, key) in MENU_DATA" value="value.id">
      <t-menu-item value="value.id">
        {{ value.label }}
      </t-menu-item>
    </li>
  </t-menu>
</template>
