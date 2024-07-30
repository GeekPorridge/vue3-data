<template>
  <el-dialog v-model="open" title="VIP2编辑'">
    <el-card style="margin-bottom: 20px">
      <el-form :model="form1" :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="数字字段1">
              <el-input-number :min="0" v-model="form1.sz1" controls-position="right" placeholder="请输入数字字段">
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
          <el-col :span="8">
            <el-form-item label="数字字段2">
              <el-input-number :min="0" v-model="form1.sz2" controls-position="right" placeholder="请输入数字字段">
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
          <el-col :span="8">
            <el-form-item label="数字字段3">
              <el-input-number :min="0" v-model="form1.sz3" controls-position="right" placeholder="请输入数字字段">
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
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-form :model="form2" :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="百分比数字字段1">
              <el-input-number :min="0" v-model="form2.sz1" controls-position="right" placeholder="请输入数字字段">
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
          <el-col :span="8">
            <el-form-item label="百分比数字字段2">
              <el-input-number :min="0" v-model="form2.sz2" controls-position="right" placeholder="请输入数字字段">
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
          <el-col :span="8">
            <el-form-item label="百分比数字字段3">
              <el-input-number :min="0" v-model="form2.sz3" controls-position="right" placeholder="请输入数字字段">
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
import { ref, watch, defineProps, defineExpose, reactive } from "vue"

const props = defineProps<{
  record: any
}>()

const open = ref(false)
const data = ref(props.record || {})
const form1 = reactive({
  sz1: 0,
  sz2: 0,
  sz3: 0
})

const form2 = reactive({
  sz1: 0,
  sz2: 0,
  sz3: 0
})

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
