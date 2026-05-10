<script setup lang="ts">
import { MENU_DATA } from '@/constants'
import { useRouter } from 'vue-router'
import { ElMenu, ElMenuItem } from 'element-plus'

const router = useRouter()

const changeHandler = (path: string) => {
  console.log('changeHandler', path)
  router.push(path)
}

defineOptions({
  name: 'LeftMenu'
})
</script>

<template>
  <el-menu theme="light" @select="changeHandler">
    <el-menu-item v-for="value in MENU_DATA" :key="value.path" :index="value.path">
      {{ value.label }}
    </el-menu-item>
  </el-menu>
</template>
