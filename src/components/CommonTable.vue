<script setup lang="ts">
// 使用 <script setup>
const props = defineProps({
  rowKey: String,
  data: Array,
  columns: Array,
})
console.log('props', props);



</script>

<template>
  <t-table :rowKey="rowKey" :columns="columns" :data="data">
    <template v-for="(slot, name) in $slots" :key="name" #[name]="{ row }">
      <slot :name="name" :row="row"></slot>
    </template>

  </t-table>
</template>