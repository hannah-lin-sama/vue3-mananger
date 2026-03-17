<script setup lang="ts">
import { useRouter  } from "vue-router";

const router = useRouter();
const list = [
  {
    title: "用户管理",
    subTitle:
      "用户管理是指对系统内的用户进行创建、管理、授权和权限管理的过程。这包括但不限于用户的添加、删除、编辑等操作",
    path: "/user",
  },
  {
    title: "角色管理",
    subTitle:
      "允许管理员查看和编辑每个角色的权限设置，这包括但不限于角色的添加、删除、编辑、邀请、同步等操作",
    path: "/role",
  },
];

const handleClick = (item: any) => {
  console.log("item", item);
  // debugger
  router.push(item.path);
};

defineOptions({
  name: "MainCard",

  // beforeRouteLeave (to, from, next) {
  //   console.log("beforeRouteLeave-to", to);
  //   console.log("beforeRouteLeave-from", from);
  //   next();
  // },
  // beforeRouteEnter (to, from, next) {
  //   console.log("beforeRouteEnter-to", to);
  //   console.log("beforeRouteEnter-from", from);
  //   // 无法访问 setup 中的变量  
  //   next(vm => {
  //     console.log("beforeRouteEnter-vm", vm);
  //   });
  // },
  // beforeRouteUpdate (to, from, next) {
  //   console.log("beforeRouteUpdate-to", to);
  //   console.log("beforeRouteUpdate-from", from);
  //   next();
  // }
})

// 暴露变量/方法，让守卫能访问（关键！）
defineExpose({
  
})
</script>

<template>
  <div>
    <t-space>
      <li v-for="value in list" :key="value.path">
        <t-card
          class="info-card"
          :bordered="false"
          :title="value.title"
          :subtitle="value.subTitle"
        >
          <template #footer>
            <t-button size="large" @click="handleClick(value)">
              GO Immediately
            </t-button></template
          >
        </t-card>
      </li>
    </t-space>

    <router-view name="dashboard"></router-view>
  </div>
</template>

<style scoped>
.info-card {
  max-width: 480px;
}
</style>
