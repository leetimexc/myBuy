<script setup lang="ts">
import { ref } from 'vue'

const title = ref('myBuy 设置页面')
</script>

<template>
  <div class="options-container">
    <h1>{{ title }}</h1>
    <div class="settings">
      <p>这里是插件的设置选项</p>
    </div>
  </div>
</template>

<style scoped>
.options-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.settings {
  margin-top: 20px;
}
</style>
