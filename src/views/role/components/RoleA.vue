<template>
  <div>
    <h3>Role A View</h3>
    <p>{{ count }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script lang="ts">
import { ref, onBeforeUnmount } from 'vue'
export default {
  name: 'RoleA',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit, slots, expose, attrs }) {
    // console.log("RoleAView setup", props);
    const handleClick = () => {
      console.log('RoleAView handleClick')
      count.value++
    }
    const count = ref(0)

    onBeforeUnmount(() => {
      console.log('RoleAView onBeforeUnmount')
    })
    return {
      count,
      handleClick
    }
  },
  activated() {
    console.log('RoleAView onActivated')
  },
  deactivated() {
    console.log('RoleAView onDeactivated')
  }
}
</script>
