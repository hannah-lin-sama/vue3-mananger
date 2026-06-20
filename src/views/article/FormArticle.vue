<template>
  <el-form ref="form" label-align="top" @submit="submit">
    <el-form-item label="文章标题" :initial-data="formData.title">
      <el-input v-model="formData.title" placeholder="请输入文章标题" />
    </el-form-item>

    <el-form-item label="作者" :initial-data="formData.author">
      <el-input v-model="formData.author" placeholder="请输入作者" />
    </el-form-item>

    <el-form-item label="分类" :initial-data="formData.category">
      <el-select v-model="formData.category" placeholder="请选择分类" style="width: 100%">
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="状态" :initial-data="formData.status">
      <el-select v-model="formData.status" placeholder="请选择状态" style="width: 100%">
        <el-option
          v-for="item in statusOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="文章内容" :initial-data="formData.content">
      <div style="border: 1px solid #ccc; width: 100%">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          mode="default"
        />
        <Editor
          style="height: 300px; overflow-y: hidden"
          v-model="formData.content"
          :defaultConfig="editorConfig"
          mode="default"
          @onCreated="handleCreated"
          @onChange="handleChange"
        />
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref, shallowRef, onBeforeUnmount } from "vue";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

// 获取父组件传递的props
const props = defineProps({
  current: Object,
});

// 获取父组件传递的函数
const emit = defineEmits(["onClose", "onSave"]);

const form = ref();
const editorRef = shallowRef();

const formData = reactive({
  title: props.current?.title || "",
  author: props.current?.author || "",
  category: props.current?.category || "",
  status: props.current?.status || "草稿",
  content: props.current?.content || "<p>请输入文章内容...</p>",
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
    // 配置上传图片
    uploadImage: {
      fieldName: "file",
      maxFileSize: 10 * 1024 * 1024, // 10M
      allowedFileTypes: ["image/*"],
      customUpload: (file: File, insertFn: any) => {
        // 这里可以自定义上传逻辑
        console.log("上传图片", file);
        // 模拟上传，实际项目中需要调用上传接口
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
  formData.content = editor.getHtml();
};

// 组件销毁时，销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const onClose = () => {
  emit("onClose");
};

const submit = () => {
  console.log("article form data", { ...formData, id: props.current?.id });
  emit("onSave", { ...formData, id: props.current?.id });
  onClose();
};
</script>
