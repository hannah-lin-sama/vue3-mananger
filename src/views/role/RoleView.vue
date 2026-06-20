<template>
  <div>
    <div>{{ title }}</div>
    <div>
      <button @click="handleClick">点击切换</button>
      <KeepAlive ref="keepaliveRef" :include="['RoleA', 'RoleB']">
        <component :is="!!currentView ? 'RoleB' : 'RoleA'" />
      </KeepAlive>
    </div>
    <div>
      <button @click="getInstance">获取组件实例</button>
    </div>
    <p>
      <router-link to="/role/123" v-slot="{ href }"> 角色详情{{ href }} 信息 </router-link>
      &nbsp;
      <router-link to="/role/1212">角色详情</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import RoleA from './components/RoleA.vue'
import RoleB from './components/RoleB.vue'
export default {
  name: 'RoleView',
  components: {
    RoleA,
    RoleB
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit, slots, expose, attrs }) {
    console.log('RoleView setup', props)
    const currentView = ref(false)
    const keepaliveRef = ref()
    const handleClick = () => {
      console.log('keepaliveRef', keepaliveRef.value)
      currentView.value = !currentView.value
    }

    const getInstance = () => {
      const instance = keepaliveRef.value
      console.log('instance', instance)
    }
    return {
      title: 'Role View',
      currentView,
      handleClick,
      getInstance,
      keepaliveRef
    }
  }
}
</script>
