<template>
  <div>Role B View</div>
</template>

<script lang="ts">
export default {
  name: 'RoleB',
  setup(props, { emit, slots, expose, attrs }) {
    // console.log("RoleBView setup", props);
    return {
      title: 'Role B View'
    }
  },
  activated() {
    console.log('RoleBView onActivated')
  },
  deactivated() {
    console.log('RoleBView onDeactivated')
  }
}
</script>
