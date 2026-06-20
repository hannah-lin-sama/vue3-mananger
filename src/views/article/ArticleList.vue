<template>
  <el-row :gutter="16" class="page-operation">
    <el-col>
      <AccessIconButton title="新增文章" @click="handleAdd"></AccessIconButton>
    </el-col>
  </el-row>
  <CommonTable
    row-key="id"
    :columns="columns"
    :data="articleList"
    actions="actions"
    :pagination="pagination"
  >
    <!-- 操作列 -->
    <template #actions="{ row }">
      <el-space size="small">
        <AccessButton title="编辑" @click="handleEdit(row)"></AccessButton>
        <AccessButton title="删除" @click="handleDel(row)"></AccessButton>
      </el-space>
    </template>
  </CommonTable>
  <!-- <FormArticle
    v-if="visible"
    @onClose="onClose"
    @onSave="onSave"
    :current="currentArticle"
  ></FormArticle> -->
</template>

<script setup lang="ts">
import CommonTable from "@/components/CommonTable.vue";
import AccessIconButton from "@/components/AccessIconButton.vue";
import AccessButton from "@/components/AccessButton.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ARTICLE_DATA as initialData } from "@/constants/data";
import { ElSpace } from "element-plus";

const router = useRouter();
const articleList = ref<any[]>([...initialData]);

let pagination = reactive({
  defaultCurrent: 1,
  defaultPageSize: 10,
  total: articleList.value.length,
});

const handleEdit = (row: any) => {
  console.log("handleEdit", row);
  // 跳转到编辑页面
  router.push(`/article/edit/${row.id}`);
};

const handleDel = (row: any) => {
  console.log("handleDel", row);
  const index = articleList.value.findIndex((item) => item.id === row.id);
  if (index > -1) {
    articleList.value.splice(index, 1);
    pagination.total = articleList.value.length;
  }
};

const columns = [
  { colKey: "id", title: "ID" },
  { colKey: "title", title: "文章标题", ellipsis: true },
  { colKey: "author", title: "作者" },
  { colKey: "category", title: "分类" },
  { colKey: "status", title: "状态" },
  { colKey: "createTime", title: "创建时间" },
  {
    colKey: "actions",
    title: "操作",
  },
];

const handleAdd = () => {
  // 跳转到新增页面
  router.push("/article/add");
};
</script>

<style scoped>
.page-operation {
  margin-bottom: 16px;
}
</style>
