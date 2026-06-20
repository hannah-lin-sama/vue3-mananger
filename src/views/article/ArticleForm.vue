<template>
  <div class="article-form-page">
    <el-page-header @back="handleBack" content="文章编辑" />

    <div class="form-container">
      <el-form ref="form" label-width="120px" @submit="handleSubmit">
        <el-form-item label="文章标题">
          <el-input v-model="formData.title" placeholder="请输入文章标题" />
        </el-form-item>

        <el-form-item label="作者">
          <el-input v-model="formData.author" placeholder="请输入作者" />
        </el-form-item>

        <el-form-item label="分类">
          <el-select
            v-model="formData.category"
            placeholder="请选择分类"
            style="width: 100%"
          >
            <el-option
              v-for="item in categoryOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="状态">
          <el-select
            v-model="formData.status"
            placeholder="请选择状态"
            style="width: 100%"
          >
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="文章内容">
          <div style="border: 1px solid #ccc; width: 100%">
            <Toolbar
              style="border-bottom: 1px solid #ccc"
              :editor="editorRef"
              :defaultConfig="toolbarConfig"
              mode="default"
            />
            <Editor
              style="height: 400px; overflow-y: hidden"
              v-model="formData.content"
              :defaultConfig="editorConfig"
              mode="default"
              @onCreated="handleCreated"
              @onChange="handleChange"
            />
          </div>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">保存</el-button>
          <el-button @click="handleBack">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, onBeforeUnmount, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import "@wangeditor-next/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor-next/editor-for-vue";
import { ARTICLE_DATA } from "@/constants/data";

const router = useRouter();
const route = useRoute();
const form = ref();
const editorRef = shallowRef();

const formData = ref({
  title: "",
  author: "",
  category: "",
  status: "草稿",
  content: "<p>请输入文章内容...</p>",
});

const categoryOptions = [
  { label: "前端开发", value: "前端开发" },
  { label: "后端开发", value: "后端开发" },
  { label: "UI框架", value: "UI框架" },
  { label: "构建工具", value: "构建工具" },
  { label: "状态管理", value: "状态管理" },
];

const statusOptions = [
  { label: "草稿", value: "草稿" },
  { label: "已发布", value: "已发布" },
];

// 编辑器配置
const editorConfig = {
  placeholder: "请输入文章内容...",
  MENU_CONF: {
    uploadImage: {
      fieldName: "file",
      maxFileSize: 10 * 1024 * 1024,
      allowedFileTypes: ["image/*"],
      customUpload: (file: File, insertFn: any) => {
        console.log("上传图片", file);
        const url = URL.createObjectURL(file);
        insertFn(url, file.name, url);
      },
    },
  },
};

// 工具栏配置
const toolbarConfig = {
  toolbarKeys: [
    "headerSelect",
    "bold",
    "italic",
    "underline",
    "through",
    "|",
    "color",
    "bgColor",
    "fontSize",
    "fontFamily",
    "|",
    "bulletedList",
    "numberedList",
    "justifyLeft",
    "justifyCenter",
    "justifyRight",
    "|",
    "insertLink",
    "insertImage",
    "insertTable",
    "|",
    "codeBlock",
    "blockquote",
    "|",
    "undo",
    "redo",
    "fullScreen",
  ],
};

// 编辑器创建
const handleCreated = (editor: any) => {
  editorRef.value = editor;
};

// 编辑器内容变化
const handleChange = (editor: any) => {
  formData.value.content = editor.getHtml();
  console.log("编辑器内容变化", formData.value.content);
};

// 组件销毁时，销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

// 加载文章数据（编辑模式）
onMounted(() => {
  const articleId = route.params.id;
  if (articleId) {
    // 编辑模式，加载文章数据
    const article = ARTICLE_DATA.find((item) => item.id === articleId);
    if (article) {
      formData.value = {
        title: article.title,
        author: article.author,
        category: article.category,
        status: article.status,
        content: article.content || "<p>请输入文章内容...</p>",
      };
    }
  }
});

// 返回列表页
const handleBack = () => {
  router.push("/article/lists");
};

// 提交表单
const handleSubmit = () => {
  console.log("提交文章数据", formData.value);
  // 这里应该调用 API 保存数据
  // 模拟保存成功
  alert("保存成功！");
  handleBack();
};
</script>

<style scoped>
.article-form-page {
  padding: 20px;
}

.form-container {
  margin-top: 20px;
  max-width: 800px;
}
</style>
