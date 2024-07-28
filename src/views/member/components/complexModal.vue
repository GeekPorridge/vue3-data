<template>
  <el-dialog v-model="open" :title="data.id + '加/扣款'">
    <el-card>
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="中心钱包">
              <el-input />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="锁定钱包">
              <el-input />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card style="margin-top: 20px">
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="加款/扣款">
              <el-select placeholder="请选择类型">
                <el-option label="类型1" value="1" />
                <el-option label="类型2" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="操作金额">
              <el-input-number controls-position="right" placeholder="请输入数字字段">
                <template #decrease-icon>
                  <el-icon>
                    <Minus />
                  </el-icon>
                </template>
                <template #increase-icon>
                  <el-icon>
                    <Plus />
                  </el-icon>
                </template>
              </el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="加款/扣款类型">
              <el-select placeholder="请选择类型">
                <el-option label="类型1" value="1" />
                <el-option label="类型2" value="2" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input placeholder="备注" />
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
