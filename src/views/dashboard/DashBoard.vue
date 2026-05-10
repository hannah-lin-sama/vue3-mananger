<template>
  <div class="dashboard">
    <div>title</div>

    <LineChat :domId="id" :height="280" width="100%" />

    <p>pie</p>
    <PieChart :domId="pieChartId" :height="280" width="100%" />
  </div>
</template>
<script lang="ts" setup>
import { useId, computed, defineAsyncComponent, h } from 'vue'
import Loading from '@/components/Loading.vue'

const LineChat = defineAsyncComponent({
  loader: () => import('@/components/LineChat.vue'),
  loadingComponent: () => h(Loading, { text: 'loading line chat', height: '280px' }),
  errorComponent: () => h('div', {}, 'error')
})
const PieChart = defineAsyncComponent({
  loader: () => import('@/components/PieChart.vue'),
  loadingComponent: () => h(Loading, { text: 'loading pie chart', height: '280px' }),
  errorComponent: () => h('div', {}, 'error')
})
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
