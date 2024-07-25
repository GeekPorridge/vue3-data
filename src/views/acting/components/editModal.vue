<template>
  <el-dialog v-model="open" :title="data.id + '编辑'">
    <el-card>
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="文本字段">
              <el-input placeholder="搜索字段" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文本字段">
              <el-input placeholder="搜索字段" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
import { ref, watch, defineProps, defineExpose } from "vue"

const props = defineProps<{
  type: string
  record: Object
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
