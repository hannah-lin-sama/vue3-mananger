<template>
  <div class="dashboard">
    <div>title</div>
    <LineChat :domId="id" :height="280" width="100%" />

    <p>pie</p>
    <PieChart :domId="pieChartId" :height="280" width="100%" />
  </div>
</template>
<script lang="ts" setup>
import { useId, computed } from 'vue'
import LineChat from '@/components/LineChat.vue'
import PieChart from '@/components/PieChart.vue'

const id = useId()

const pieChartId = computed(() => id + '-pie')

defineOptions({
  name: 'DashBoard',
  // 组件实例创建前调用
  beforeRouteEnter(to, from) {
    console.log('DashBoard-beforeRouteEnter', to, from)
    return true
  },
  // 路由参数更新时调用
  beforeRouteUpdate(to, from) {
    console.log('DashBoard-beforeRouteUpdate', to, from)
    return true
  },
  // 组件实例销毁前调用
  beforeRouteLeave(to, from) {
    console.log('DashBoard-beforeRouteLeave', to, from)
    return true
  }
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f5f5;
  height: calc(100vh - 100px);
}
</style>
