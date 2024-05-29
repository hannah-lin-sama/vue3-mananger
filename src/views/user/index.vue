<script setup lang="jsx">
import CommonTable from '@/components/CommonTable.vue'
import AccessIconButton from '@/components/AccessIconButton.vue'
import AccessButton from '@/components/AccessButton.vue'
import FromUser from '@/views/user/components/FormUser.vue'
import { ref, reactive } from 'vue'
import { USER_DATA as data } from '@/constants/data'

const visible = ref(false)
let current = reactive({})

let pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: data.length,
})

const handleEdit = (row) => {
  console.log('handleEdit', row);
  visible.value = true;
  current = row;
}

const handleDel = (row) => {
  console.log('handleDel', row);

}

const columns = [
  { colKey: 'id', title: 'code' },
  { colKey: 'userName', title: '用户名称', },
  { colKey: 'email', title: '邮箱', ellipsis: true },
  { colKey: 'roleId', title: '所属角色', },
  { colKey: 'status', title: '用户状态', },
  {
    colKey: 'actions', title: '操作',
  },
]

const handleAdd = () => {
  visible.value = true;
}

const onClose = () => {
  visible.value = false;
  current = {}
}

</script>

<template>

  <div class="page-tile">用户管理</div>

  <t-row :gutter="16" class="page-operation">
    <t-col>
      <AccessIconButton title="新增用户" @click="handleAdd"></AccessIconButton>
    </t-col>
  </t-row>

  <CommonTable row-key="id" :columns="columns" :data="data" actions="actions" :pagination="pagination">
    <template #actions="{ row }">
      <t-space size="4">
        <AccessButton title="编辑" @click="handleEdit(row)"></AccessButton>
        <AccessButton title="删除" @click="handleDel(row)"></AccessButton>
      </t-space>
    </template>
  </CommonTable>
  <FromUser v-if="visible" @onClose="onClose" :current="current"></FromUser>

</template>
