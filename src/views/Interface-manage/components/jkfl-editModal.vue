<template>
  <el-dialog destroy-on-close v-model="open" title="编辑" class="jkgl_jkfl_edite-model__dialog">
    <el-card shadow="never">
      <el-form ref="formRef" :label-position="'top'" :model="formInline">
        <div class="top-card">
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
        </div>

        <div class="bottom-card">
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
        </div>

        <div class="bottom-card">
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="zd1" label="多语言翻译字段1">
                <el-input v-model="formInline.zd1" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd2" label="多语言翻译字段2">
                <el-input v-model="formInline.zd2" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd3" label="多语言翻译字段3">
                <el-input v-model="formInline.zd3" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="zd4" label="多语言翻译字段4">
                <el-input v-model="formInline.zd4" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd5" label="多语言翻译字段5">
                <el-input v-model="formInline.zd5" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd6" label="多语言翻译字段6">
                <el-input v-model="formInline.zd6" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="24">
            <el-col :span="8">
              <el-form-item prop="zd7" label="多语言翻译字段7">
                <el-input v-model="formInline.zd7" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd8" label="多语言翻译字段8">
                <el-input v-model="formInline.zd8" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item prop="zd9" label="多语言翻译字段9">
                <el-input v-model="formInline.zd9" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>

        <div class="bottom-card img-card">
          <el-row :gutter="24">
            <el-col :span="12">
              <el-form-item prop="img">
                <template #label>
                  <div class="tab-title">图标<span>未选中状态</span></div>
                </template>
                <div class="img-box">
                  <el-image :src="formInline.img" fit="contain" />
                </div>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item prop="img">
                <template #label>
                  <div class="tab-title">图标<span>选中状态</span></div>
                </template>
                <div class="img-box">
                  <el-image :src="formInline.img" fit="contain" />
                </div>
              </el-form-item>
            </el-col>
          </el-row>
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
import { ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"

const props = defineProps<{
  record: Object // 编辑的列表数据
}>()

const emit = defineEmits(["updateList"])

const formRef = ref<any>(null) // 表单ref

const open = ref(false)
const data = ref(props.record || {})

// 表单模拟字段
const formInline = reactive<any>({
  jkID: "", // 接口ID
  jkmc: "", // 接口名称
  jkbs: "", // 接口标识
  sfkq: "1", // 是否开启
  pmqz: "", // 排名权重
  zdbt: "",
  zdbs: "",
  bz: "",
  zd1: "",
  zd2: "",
  zd3: "",
  zd4: "",
  zd5: "",
  zd6: "",
  zd7: "",
  zd8: "",
  zd9: "",
  img: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
})

// 清空表单
const clearFrom = () => {
  if (formRef.value) {
    formRef.value.resetFields()
    formRef.value.clearValidate()
  }
}
// 打开弹框
const openModal = () => {
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

<style lang="scss">
.jkgl_jkfl_edite-model__dialog {
  padding: 0 0 16px;
  border-radius: 5px;
  overflow: hidden;

  .el-card {
    border: transparent;

    .el-col {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
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
    padding: 0;
    .bottom-card,
    .top-card {
      padding: 20px;
      border: 1px solid rgba(237, 237, 237, 1);
      border-radius: 10px;

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

    .bottom-card {
      margin-top: 20px;
    }

    .img-card {
      .img-box {
        width: 100px;
        height: 100px;
        .el-image {
          width: 100%;
          height: 100%;
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
}
</style>
