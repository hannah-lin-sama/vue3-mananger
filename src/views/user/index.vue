<script setup lang="jsx">
import CommonTable from '@/components/CommonTable.vue'
import AccessButton from '@/components/AccessButton.vue'

const handleEdit = (row) => {
  console.log('row', row);
}

const handleDel = () => {

}

const columns = [
  { colKey: 'id', title: 'code' },
  { colKey: 'useName', title: '用户名称', },
  { colKey: 'roleId', title: '所属角色', },
  { colKey: 'status', title: '用户状态', },
  {
    colKey: 'actions', title: '操作',
  },
]


const data = [
  {
    id: 'u123452',
    useName: 'user104',
    roleId: 'r10001',
    roleName: '系统管理员'
  },
  {
    id: 'u123451',
    useName: 'user103',
    roleId: 'r10001',
    roleName: '系统管理员'
  },
  {
    id: 'u123450',
    useName: 'user102',
    roleId: 'r10001',
    roleName: '系统管理员'
  }, {
    id: 'u123456',
    useName: 'user101',
    roleId: 'r10001',
    roleName: '系统管理员'
  }
]

</script>

<template>

  <div class="page-tile">用户管理</div>

  <CommonTable row-key="id" :columns="columns" :data="data" actions="actions">
    <template #actions="{ row }">
      <t-space>
        <AccessButton title="编辑" @click="handleEdit(row)"></AccessButton>
        <AccessButton title="删除" @click="handleDel"></AccessButton>
      </t-space>
    </template>
  </CommonTable>

</template>
