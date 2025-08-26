<script setup lang="ts">
import { ref } from 'vue'
import { parseExcelFile } from 'parseexcelfile';
defineOptions({
  name: 'Popup-Upload'
})
const fileData = ref<File | null>(null)
const handleFileChange =  async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  console.log(file)
  // if (file) {
  //   fileData.value = file
  //   console.log(file)
  // }
  try {
    const result = await parseExcelFile(file);
    console.log(result);
    // 处理解析结果...
    fileData.value = result
  } catch (error) {
    console.error("解析失败:", error);
  }
}
</script>

<template>
  <div class="popup-container">
    <p>拖拽上传excel文件</p>
    <input type="file" @change="handleFileChange" />
    <div class="drop-area" @drop="handleFileChange" @dragover.prevent>
      <div class="drop-area-text">拖拽文件到此处</div>
    </div>
    {{ fileData }}
  </div>
</template>

<style scoped>

</style>
