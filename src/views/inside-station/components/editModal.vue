<template>
  <el-dialog v-model="open" :title="data.id + '编辑'">
    <el-card style="margin-bottom: 20px">
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="活动分类名称">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="分类标识">
              <el-input placeholder="搜索字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="排名权重数字越大排名越靠前">
              <el-input-number controls-position="right" placeholder="">
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
      <el-form :label-position="'top'">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="多语言翻译字段1">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段2">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段3">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段4">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段5">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段6">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段7">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段8">
              <el-input placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="多语言翻译字段9">
              <el-input placeholder="请输入文字字段" />
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
