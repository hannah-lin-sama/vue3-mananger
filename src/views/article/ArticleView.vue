<template>
  <div>
    <div class="title">Article View</div>
    <RouterView></RouterView>
  </div>
</template>
<script setup lang="ts">
import { onBeforeRouteUpdate, onBeforeRouteLeave } from "vue-router";
// const router = useRouter();

// const handleClick = () => {
//   router.push({
//     name: "article-list",
//   });
// };

onBeforeRouteUpdate((to, from) => {
  console.log("article-view-onupdate", to, from);
  return true;
});

onBeforeRouteLeave((to, from) => {
  console.log("article-view-onleave", to, from);
  return true;
});

defineOptions({
  name: "ArticleView",
  beforeRouteEnter(to, from) {
    console.log("article-view-enter", to, from);
    return true;
  },
  beforeRouteUpdate(to, from) {
    console.log("article-view-update", to, from);
    return true;
  },
  beforeRouteLeave(to, from) {
    console.log("article-view-leave", to, from);
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
