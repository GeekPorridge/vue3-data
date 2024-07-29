<template>
  <el-dialog destroy-on-close v-model="open" :title="title[dialogType]" class="jkgl_jkKey_edite-model__dialog">
    <el-form ref="formRef" :label-position="'top'" :model="formInline">
      <el-card class="top-card">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="jkID" label="接口ID">
              <el-input v-model="formInline.jkID" placeholder="请输入数字字段" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="jkbs" label="接口标识">
              <el-input v-model="formInline.jkbs" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="jkmc" label="接口名称">
              <el-input v-model="formInline.jkmc" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="bottom-card">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item prop="sfkq">
              <template #label>
                <div class="tab-title">是否开启<span>默认开启</span></div>
              </template>
              <el-radio-group v-model="formInline.sfkq" class="ml-4">
                <el-radio value="1" size="large">开启</el-radio>
                <el-radio value="2" size="large">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="pmqz">
              <template #label>
                <div class="tab-title">排名权重<span>数字越大排名越靠前</span></div>
              </template>
              <el-input-number
                v-model="formInline.pmqz"
                :step="10"
                controls-position="right"
                placeholder="请输入数字字段"
              >
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
        <el-row :gutter="24">
          <el-col>
            <el-form-item prop="bz" label="备注">
              <el-input v-model="formInline.bz" placeholder="备注" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button class="cancel" @click="closeModal">取消</el-button>
        <el-button class="save" type="primary" @click="saveModel">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
/**
 * @record 当前编辑的数据
 */
import { ElMessage } from "element-plus"
import { ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"

const props = defineProps<{
  record: Object // 编辑的列表数据
}>()

const emit = defineEmits(["updateList"])
const formRef = ref<any>(null) // 表单ref

const open = ref(false)
const data = ref(props.record || {})
const dialogType = ref<any>("edite") // 弹窗类型  编辑：edite  新增：add
const title = ref<any>({
  edite: "编辑",
  add: "新增"
})

// 表单模拟字段
const formInline = reactive<any>({
  jkID: "", // 接口ID
  jkmc: "", // 接口名称
  jkbs: "", // 接口标识
  sfkq: "1", // 是否开启
  pmqz: "", // 排名权重
  bz: "" // 备注
})

// 清空表单
const clearFrom = () => {
  if (formRef.value) {
    formRef.value.resetFields()
    formRef.value.clearValidate()
  }
}
// 打开弹框
const openModal = (type = "edite") => {
  dialogType.value = type
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
      message: `操作成功`,
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

<style lang="scss">
.jkgl_jkKey_edite-model__dialog {
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
      // width: 80px;
      // height: 30px;
      font-size: 12px;
    }

    .cancel {
      color: #999;
    }
  }

  .el-card__body {
    margin-top: 20px;

    .bottom-card,
    .top-card {
      .tab-title {
        font-size: 14px;
        color: #666;
        line-height: 28px;
        span {
          font-size: 11px;
          color: #999;
        }
      }
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
      // height: 40px;
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

  .bottom-card {
    margin-top: 20px;
  }

  .el-tabs {
    border: transparent;
    .el-tabs__header {
      background: none;
      border: transparent;
      margin-bottom: 20px;
      .el-tabs__item {
        border: none;
      }
    }
    .el-tabs__content {
      padding: 0;
    }
  }
}
</style>
