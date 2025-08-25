<script setup lang="ts">
// 使用Vue 3的Composition API
import { ref, onMounted } from 'vue'

const message = ref('欢迎使用myBuy自动解析excel插件')
const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log('Popup组件已挂载')
})
</script>

<template>
  <div class="popup-container">
    <h1>{{ message }}</h1>
    <p>计数器: {{ count }}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<style scoped>
.popup-container {
  width: 300px;
  padding: 16px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 18px;
  color: #333;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
