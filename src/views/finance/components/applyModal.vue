<template>
  <el-dialog v-model="open" :title="`demo123${type === 'agree' ? '同意申请确认' : '拒绝申请确认'}`">
    <el-card style="margin-bottom: 20px">
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="中心钱包">
              <el-input placeholder="" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="锁定钱包">
              <el-input placeholder="" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="卡包信息1">
              <el-input placeholder="卡包信息1" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="卡包信息2">
              <el-input placeholder="卡包信息2" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="type === 'reject'" :gutter="24">
          <el-col :span="24">
            <el-form-item label="失败原因">
              <el-input placeholder="失败原因" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeModal">取消</el-button>
        <el-button :type="type === 'agree' ? 'primary' : 'danger'" @click="open = false">
          {{ type === "agree" ? "同意申请" : "拒绝申请" }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from "vue"

const props = defineProps<{
  type: string
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
