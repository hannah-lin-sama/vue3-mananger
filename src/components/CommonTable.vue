<template>
  <div>
    <el-table :data="data" :row-key="rowKey" style="width: 100%">
      <el-table-column
        v-for="column in columns"
        :key="column.colKey"
        :prop="column.colKey !== 'actions' ? column.colKey : undefined"
        :label="column.title"
        :show-overflow-tooltip="column.ellipsis"
      >
        <template #default="scope">
          <slot v-if="$slots[column.colKey]" :name="column.colKey" :row="scope.row">
          </slot>
          <span v-else>{{ scope.row[column.colKey] }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="pagination"
      :current-page="pagination.defaultCurrent"
      :page-size="pagination.defaultPageSize"
      :page-sizes="[10, 20, 30, 50]"
      :total="pagination.total"
      layout="total, sizes, prev, pager, next, jumper"
      background
      style="margin-top: 16px; justify-content: flex-end"
    />
  </div>
</template>

<script setup lang="ts">
import { ElTable, ElTableColumn, ElPagination } from "element-plus";

interface Column {
  colKey: string;
  title: string;
  ellipsis?: boolean;
}

const props = defineProps<{
  rowKey?: string;
  data?: any[];
  columns?: Column[];
  pagination?: any;
  actions?: string;
}>();
console.log("props", props);
</script>
