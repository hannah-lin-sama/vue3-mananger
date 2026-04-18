<template>
  <div>
    <h3>点击事件 DOM 修饰符</h3>
    <div @click="handleDivClick">
      <!-- 点击事件1 -->
      <button @click="handleClick">点击我</button>
      <!-- 点击事件2 -->
      <button v-on:click="handleClick">点击我</button>
      <!-- 点击事件 阻止冒泡 -->
      <a target="_blank" href="https://baidu.com" @click.stop="handleClick2">点击我</a>
      <!-- 点击事件4 -->
      <a target="_blank" href="https://baidu.com" @click.prevent="handleClick3">点击我</a>

      <!-- 点击事件5 -->
      <button v-on:click.once="handleClick4">点击我</button>
      <!-- 点击事件6 -->
      <button @click.passive="handleClick5">点击我</button>
    </div>

    <h3>点击事件 带参数</h3>
    <div @click.self="handleDivClick">
      <button @click="handleClick1(item)">点击我1</button>
      <button @click="handleClick2(item)">点击我2</button>
      <button @click="handleClick3(item)">点击我3</button>
      <button @click="handleClick4(item)">点击我4</button>
      <button @click="handleClick5(item)">点击我5</button>
    </div>

    <h3>点击事件 带参数</h3>
    <div @click.capture="handleDivClick"></div>

    <h3>鼠标修饰符</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
console.log("ListView mounted");

const list = ref([
  {
    id: 1,
    name: "张三",
    age: 18,
    sex: "男",
  },
  {
    id: 2,
    name: "李四",
    age: 19,
    sex: "女",
  },
  {
    id: 3,
    name: "王五",
    age: 20,
    sex: "男",
  },
]);

const handleDivClick = (event: PointerEvent) => {
  console.log("点击了div", event);
};

const handleClick = (event: PointerEvent) => {
  console.log("点击了按钮", event);
};

const handleClick2 = (event: PointerEvent) => {
  // 修饰符 stop 阻止冒泡
  // 上层 div 点击事件 不会触发
  console.log("点击了按钮2", event);
};

const handleClick3 = () => {
  // 修饰符 prevent 阻止默认事件 链接不会触发打开新窗口
  console.log("点击了按钮3");
};

const handleClick4 = (event: PointerEvent) => {
  // 修饰符 once 只能点击一次
  console.log("点击了按钮once", event);
};

const handleClick5 = () => {
  console.log("点击了按钮5");
};

const handleClick6 = () => {
  console.log("点击了按钮6");
};
</script>
<style scoped>
/* 容器样式 */
div {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* 标题样式 */
h3 {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

/* 按钮容器 */
div > div {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* 基础按钮样式 */
button {
  position: relative;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

/* 按钮悬停效果 */
button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 按钮点击效果 */
button:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* 按钮1 - 主按钮 */
button:nth-child(1) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

button:nth-child(1):hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

/* 按钮2 - 成功按钮 */
button:nth-child(2) {
  background: linear-gradient(135deg, #48bb78 0%, #2f855a 100%);
  color: white;
}

button:nth-child(2):hover {
  background: linear-gradient(135deg, #38a169 0%, #276749 100%);
}

/* 按钮3 - 警告按钮 */
button:nth-child(3) {
  background: linear-gradient(135deg, #ed8936 0%, #c05621 100%);
  color: white;
}

button:nth-child(3):hover {
  background: linear-gradient(135deg, #dd6b20 0%, #9c4221 100%);
}

/* 按钮4 - 危险按钮 */
button:nth-child(4) {
  background: linear-gradient(135deg, #f56565 0%, #c53030 100%);
  color: white;
}

button:nth-child(4):hover {
  background: linear-gradient(135deg, #e53e3e 0%, #9b2c2c 100%);
}

/* 按钮5 - 信息按钮 */
button:nth-child(5) {
  background: linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%);
  color: white;
}

button:nth-child(5):hover {
  background: linear-gradient(135deg, #3182ce 0%, #2c5282 100%);
}

/* 按钮6 - 次要按钮 */
button:nth-child(6) {
  background: linear-gradient(135deg, #a0aec0 0%, #718096 100%);
  color: white;
}

button:nth-child(6):hover {
  background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
}

/* 按钮动画效果 */
button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  transition: left 0.5s ease;
  z-index: -1;
}

button:hover::before {
  left: 100%;
}

/* 响应式设计 */
@media (max-width: 768px) {
  div > div {
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100%;
    max-width: 200px;
  }
}

/* 按钮焦点样式 */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}
</style>
