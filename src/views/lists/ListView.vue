<template>
  <div>
    <p>Welcome to the ListView</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log("route", route);
console.log("router", router);
</script>
