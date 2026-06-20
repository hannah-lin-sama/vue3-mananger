<template>
  <div
    class="list-container"
    v-infinite-scroll="load"
    :infinite-scroll-disabled="disabled"
  >
    <div v-for="item in visibleList" :key="item.numId" class="list-item">
      <span class="item-id">{{ item.numId }}</span>
      <div class="item-content">
        <span class="item-title">{{ item.title }}</span>
        <span class="item-desc">{{ item.descript }}</span>
      </div>
    </div>
    <p v-if="loading" class="list-tip">加载中...</p>
    <p v-if="noMore" class="list-tip">没有更多了</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ElInfiniteScroll } from "element-plus";

interface ListItem {
  numId: number;
  title: string;
  descript: string;
}

const vInfiniteScroll = ElInfiniteScroll;

const PAGE_SIZE = 20;
const TOTAL = 200;

const allList: ListItem[] = Array.from({ length: TOTAL }, (_, i) => ({
  numId: i + 1,
  title: `标题 ${i + 1}`,
  descript: `这是第 ${i + 1} 条描述信息`,
}));

const visibleList = ref<ListItem[]>([]);
const currentPage = ref(0);
const loading = ref(false);

const noMore = computed(() => visibleList.value.length >= TOTAL);
const disabled = computed(() => loading.value || noMore.value);

const load = () => {
  if (disabled.value) return;
  loading.value = true;
  setTimeout(() => {
    const start = currentPage.value * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    visibleList.value.push(...allList.slice(start, end));
    currentPage.value++;
    loading.value = false;
  }, 300);
};

load();
</script>

<style scoped>
.list-container {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 12px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #ebeef5;
}

.item-id {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  overflow: hidden;
}

.item-title {
  font-size: 15px;
  font-weight: 500;
  color: #303133;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-desc {
  font-size: 13px;
  color: #909399;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list-tip {
  text-align: center;
  color: #909399;
  font-size: 13px;
  padding: 12px 0;
}
</style>
