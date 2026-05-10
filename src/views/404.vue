<template>
  <div>
    <h1>404 Not Found</h1>
    <p>Sorry, the page you are looking for could not be found.</p>
    <p>Please check the URL and try again.</p>

    <p @click="handleClick">Or go back to the homepage.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'NotFound',
  beforeRouteEnter(to, from) {
    console.log('not-found-enter', to, from)
    return true
  },
  beforeRouteUpdate(to, from) {
    console.log('not-found-update', to, from)
    return true
  },
  beforeRouteLeave(to, from) {
    console.log('not-found-leave', to, from)
    return true
  },
  setup() {
    const router = useRouter()
    const handleClick = () => {
      router.push('/404?from=not-found').then(() => {
        console.log('push xxx')
      })
      console.log('push result')
    }
    return {
      handleClick
    }
  }
})
</script>
