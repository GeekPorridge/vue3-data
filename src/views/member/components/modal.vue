<template>
  <el-dialog v-model="open" :title="modalTitle">
    <div v-if="type === 'CardHolder'">未设计</div>
    <div v-else-if="type === 'Edit'">
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
    </div>
    <div></div>
    <template #footer>
      <div v-if="type === 'CardHolder'" class="dialog-footer">
        <el-button @click="open = false">取消</el-button>
      </div>
      <div v-else-if="type === 'Edit'">
        <el-button @click="open = false">取消</el-button>
        <el-button type="primary" @click="open = false">保存</el-button>
      </div>
      <div v-else-if="type === 'Complex'">
        <el-button @click="open = false">取消</el-button>
        <el-button type="primary" @click="open = false">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, computed } from "vue"

const props = defineProps<{
  type: string
  record: Object
}>()

const open = ref(false)

// 打开弹框
const openModal = () => {
  open.value = true
}

const modalTitle = computed(() => {
  const { type, record } = props
  switch (type) {
    case "CardHolder":
      return record.id + "卡包"
    case "Edit":
      return record.id + "编辑"
    case "Complex":
      return record.id + "加/扣款"
    default:
      return ""
  }
})

defineExpose({ openModal })
</script>

<style lang="scss" scoped></style>
