<template>
  <el-dialog
    style="max-height: 650px; overflow-y: auto"
    destroy-on-close
    v-model="open"
    :title="title[dialogType]"
    class="nrgl_banner_edite-model__dialog"
  >
    <el-form ref="formRef" :label-position="'top'" :model="formInline">
      <el-card class="top-card">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item prop="bannerBT" :label="`${textConfig[from]}标题`">
              <el-input v-model="formInline.bannerBT" placeholder="请输入文字标题" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="sbfl" label="设备分类">
              <template #label>
                <div class="tab-title">设备分类<span>H5/PC/APP分类</span></div>
              </template>
              <el-select v-model="formInline.sbfl" placeholder="请选择类型">
                <el-option label="H5" value="H5" />
                <el-option label="PC" value="PC" />
                <el-option label="APP" value="APP" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item prop="qz">
              <template #label>
                <div class="tab-title">权重<span>数字越大排名越靠前</span></div>
              </template>
              <el-input-number
                v-model="formInline.qz"
                :step="10"
                :min="0"
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
          <el-col :span="12">
            <el-form-item prop="bannerYX">
              <template #label>
                <div class="tab-title">
                  {{ `${textConfig[from]}语系` }}<span>根据前端语言显示</span><span class="tip">可多选</span>
                </div>
              </template>

              <el-select
                v-model="formInline.bannerYX"
                multiple
                collapse-tags
                collapse-tags-tooltip
                placeholder="请选择类型"
              >
                <el-option v-for="item in bannerYXOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item prop="newWindow" label="是否弹窗">
              <template #label>
                <div class="tab-title">是否新弹窗打开URL链接<span>默认关闭</span></div>
              </template>
              <el-radio-group v-model="formInline.newWindow" class="ml-4">
                <el-radio value="1" size="large">开启</el-radio>
                <el-radio value="2" size="large">关闭</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="url" label="是否置顶">
              <template #label>
                <div class="tab-title">URL链接<span>可不填</span></div>
              </template>
              <el-input v-model="formInline.url" placeholder="请输入文字字段" />
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

      <el-card class="bottom-card">
        <el-row :gutter="24">
          <el-col v-if="from === 'banner'">
            <div class="img-title">banner图片<span>尺寸说明</span></div>
            <uploaded></uploaded>
          </el-col>

          <el-col v-if="from === 'pmd'">
            <el-form-item prop="pmdnr" label="跑马灯内容">
              <el-input v-model="formInline.pmdnr" type="textarea" placeholder="内容" />
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
 * banner 和 跑马灯 弹窗
 * @from 来自字段 banner/pmd
 * @record 当前编辑的数据
 */

import { ElMessage } from "element-plus"
import { ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"
import uploaded from "@/components/uploadPhoto/index.vue"

const props = defineProps<{
  record: Object // 编辑的列表数据
  from: string
}>()

const emit = defineEmits(["updateList"])

const formRef = ref<any>(null) // 表单ref

const open = ref(false)
const data = ref(props.record || {})
const dialogType = ref("edite") // 弹窗类型  编辑：edite  新增：add
const title = ref<any>({
  edite: "编辑",
  add: "新增"
})
const textConfig = ref<any>({
  banner: "banner",
  pmd: "跑马灯"
})

// 表单模拟字段
const formInline = reactive<any>({
  bannerBT: "", // banner标题
  sbfl: "", // 设备分类
  qz: "", // 权重
  bannerYX: [], // 语系
  newWindow: "2", // 是否打开新窗口
  url: "",
  bz: "", // 备注
  pmdnr: "" // 跑马灯内容
})

// 可选语系列表
const bannerYXOptions = [
  {
    value: "1",
    label: "语系1"
  },
  {
    value: "2",
    label: "语系2"
  },
  {
    value: "3",
    label: "语系3"
  },
  {
    value: "4",
    label: "语系4"
  }
]

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
.nrgl_banner_edite-model__dialog {
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

  .bottom-card,
  .top-card {
    .tab-title {
      span {
        font-size: 12px;
        color: #999;
      }

      .tip {
        white-space: nowrap;
        color: #d9001b;
      }
    }
  }

  .bottom-card {
    margin-top: 20px;

    .img-title {
      font-size: 14px;
      color: #666;
      line-height: 28px;
      margin-bottom: 8px;
    }

    .img-box {
      width: 200px;
      height: 200px;
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

  .el-input-number,
  .el-select {
    width: 100%;
  }
  .el-input__inner {
    // height: 38px;
  }

  .el-select__wrapper {
    // height: 40px;
  }

  .el-textarea__inner {
    min-height: 80px !important;
  }

  .el-textarea__inner:hover,
  .el-select__wrapper:hover,
  .el-input__wrapper:hover {
    box-shadow: 0 0 0 1px #409eff inset;
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
</style>
