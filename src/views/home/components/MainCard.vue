<script setup lang="ts">
import { useRouter } from "vue-router";

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
  console.log('item', item);

  router.push(item.path);
};
</script>

<template>
  <div>
    <t-space>
      <li v-for="(value, key) in list">
        <t-card class="info-card" bordered="false" :title="value.title" :subtitle="value.subTitle">
          <template #footer>
            <t-button size="large" @click="handleClick(value)">
              GO Immediately
            </t-button></template>
        </t-card>
      </li>
    </t-space>
  </div>
</template>
<style>
.info-card {
  max-width: 480px;
}
</style>
