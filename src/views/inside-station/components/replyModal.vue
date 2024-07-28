<template>
  <el-dialog v-model="open" title="回复">
    <el-card>
      <h4>
        {{ `回复${record.id}“关于消息回复BUG问题”` }}
      </h4>
      <div style="border: 1px solid #ccc">
        <Toolbar
          style="border-bottom: 1px solid #ccc"
          :editor="editorRef"
          :defaultConfig="toolbarConfig"
          mode="default"
        />
        <Editor
          style="height: 500px; overflow-y: hidden"
          v-model="valueHtml"
          :defaultConfig="editorConfig"
          @onCreated="handleCreated"
          mode="default"
        />
      </div>
    </el-card>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeModal">取消</el-button>
        <el-button type="primary" @click="open = false">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
import { ref, watch, defineProps, defineExpose, onBeforeUnmount, shallowRef, onMounted } from "vue"

const props = defineProps<{
  record: any
}>()

const open = ref(false)
const data = ref(props.record || {})

// 打开弹框
const openModal = () => {
  open.value = true
}

// 关闭弹框
const closeModal = () => {
  open.value = false
}

const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref("<p></p>")

// 模拟 ajax 异步获取内容
onMounted(() => {
  // setTimeout(() => {
  //   valueHtml.value = "<p>模拟 Ajax 异步设置内容</p>"
  // }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: "请输入内容..." }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

watch(
  () => props.record,
  (newRecord) => {
    data.value = newRecord || {}
  },
  { immediate: true } // 在组件初始化时也调用
)

defineExpose({ openModal })
</script>

<style lang="scss" scoped></style>
