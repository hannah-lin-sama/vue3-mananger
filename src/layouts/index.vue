<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftMenu from './components/LeftMenu/index.vue'
</script>

<template>
  <main>
    <t-layout>
      <t-aside>
        <LeftMenu></LeftMenu>
      </t-aside>
      <t-layout>
        <t-header>Header</t-header>
        <t-content>
          <div class="manage-page">
            <RouterView />

          </div>
        </t-content>
      </t-layout>
    </t-layout>

  </main>
</template>
