<template>
  <el-dialog destroy-on-close v-model="open" title="编辑" class="nrgl_gglb_edite-model__dialog">
    <el-card :shadow="'never'">
      <el-form ref="formRef" :label-position="'top'" :model="formInline">
        <div class="top-card">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="isDialog" label="是否弹窗">
                <el-radio-group v-model="formInline.isDialog" class="ml-4">
                  <el-radio value="1" size="large">是</el-radio>
                  <el-radio value="2" size="large">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="isTop" label="是否置顶">
                <el-radio-group v-model="formInline.isTop" class="ml-4">
                  <el-radio value="1" size="large">是</el-radio>
                  <el-radio value="2" size="large">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="pmqz" label="排名权重数字越大排名越靠前">
                <el-radio-group v-model="formInline.pmqz" class="ml-4">
                  <el-input-number controls-position="right" placeholder="请输入">
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
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>

      <el-form :model="formTabInline">
        <div class="bottom-card">
          <el-tabs type="border-card" class="demo-tabs" @tab-change="tabChange">
            <el-tab-pane v-for="item in tabConfig" :label="item.tab">
              <el-row :gutter="24">
                <el-col>
                  <el-form-item prop="bt" :label="`标题多语言${formTabInline.active}`">
                    <el-input v-model="formInline.bt" placeholder="请输入文字字段" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col>
                  <el-form-item prop="nr" :label="`内容多语言${formTabInline.active}`">
                    <el-input v-model="formInline.nr" placeholder="请输入文字字段" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-form>
    </el-card>

    <template #footer>
      <div class="dialog-footer">
        <el-button class="cancel" @click="closeModal">取消</el-button>
        <el-button class="save" type="primary" @click="saveModel">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"
import { ref, Ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"

const props = defineProps<{
  type: string
  record: Object // 编辑的列表数据
}>()

const emit = defineEmits(["updateList"])
const formRef = ref(null) // 表单ref

const open = ref(false)
const data = ref(props.record || {})

// 表单模拟字段
const formInline = reactive({
  isDialog: "", // 是否弹窗
  isTop: "1", // 是否置顶
  pmqz: "" // 排名权重
})

const formTabInline = reactive({
  active: 1,
  bt: "", // 标题多语言N
  nr: "" // 内容多语言N
})

const tabConfig = [
  {
    key: 1,
    tab: "多语言1"
  },
  {
    key: 2,
    tab: "多语言2"
  },
  {
    key: 3,
    tab: "多语言3"
  },
  {
    key: 4,
    tab: "多语言4"
  },

  {
    key: 5,
    tab: "多语言5"
  },
  {
    key: 6,
    tab: "多语言6"
  }
]

// tab切换
const tabChange = (key: number) => {
  formTabInline.active = ++key
}

// 清空表单
const clearFrom = () => {
  if (formRef.value) {
    formRef.value.resetFields()
    formRef.value.clearValidate()
  }
}
// 打开弹框
const openModal = (type) => {
  open.value = true
}

const saveData = () => {
  console.log(formInline, "保存数据：请求api")

  return {
    success: true,
    data: "响应数据"
  }
}

// 关闭弹框
const closeModal = () => {
  clearFrom()
  open.value = false
}

//  保存
const saveModel = async () => {
  const { success, data } = await saveData()
  if (success) {
    ElMessage({
      message: "编辑成功",
      type: "success"
    })
    emit("updateList", data)
    closeModal()
    return
  }

  ElMessage({
    message: "编辑失败",
    type: "error"
  })
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

<!-- <style lang="scss" scoped>
:deep(.el-dialog) {
  padding: 0;
}
</style> -->

<style lang="scss">
.nrgl_gglb_edite-model__dialog {
  padding: 0 0 16px;
  border-radius: 5px;
  overflow: hidden;
  .el-dialog__header {
    height: 50px;
    background-color: rgba(245, 245, 245, 1);
    display: flex;
    padding: 0 16px;
    align-items: center;
    margin-bottom: 10px;
  }

  .el-dialog__body {
    padding: 0 16px 0;
  }

  .dialog-footer {
    padding: 16px;
    .el-button {
      width: 80px;
      height: 30px;
      font-size: 12px;
    }

    .cancel {
      color: #999;
    }
  }

  .el-card {
    border: transparent;
  }

  .el-card__body {
    margin-top: 20px;
    padding: 0;
    .bottom-card,
    .top-card {
      padding: 20px;
      border: 1px solid rgba(237, 237, 237, 1);
      border-radius: 10px;
    }

    .bottom-card {
      margin-top: 20px;
    }

    .el-form-item__label {
      font-size: 14px;
      color: #666;
      line-height: 28px;
    }

    .el-input__wrapper:hover {
      box-shadow: 0 0 0 1px #409eff inset;
    }

    .el-input__inner {
      height: 40px;
    }

    input::-webkit-input-placeholder {
      /* 使用webkit内核的浏览器 */
      font-size: 14px;
      color: #ccc;
    }
    input:-moz-placeholder {
      /* Firefox版本4-18 */
      font-size: 14px;
      color: #ccc;
    }
    input::-moz-placeholder {
      /* Firefox版本19+ */
      font-size: 14px;
      color: #ccc;
    }
    input:-ms-input-placeholder {
      /* IE浏览器 */
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
