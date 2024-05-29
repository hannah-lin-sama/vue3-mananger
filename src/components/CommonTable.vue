<script setup lang="ts">

const props = defineProps({
  rowKey: String,
  data: Array,
  columns: Array,
  pagination: Object,
})
console.log('props', props);



</script>

<template>
  <t-table :rowKey="rowKey" :columns="columns" :data="data" :pagination="pagination">
    <template v-for="(slot, name) in $slots" :key="name" #[name]="{ row }">
      <slot :name="name" :row="row"></slot>
    </template>

  </t-table>
</template>