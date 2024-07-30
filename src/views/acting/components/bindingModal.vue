<template>
  <el-dialog
    style="height: 650px; overflow-y: auto"
    v-model="open"
    :title="data.id + '绑定域名'"
    class="dlgl_dllb_edite-model__dialog"
  >
    <el-card>
      <el-form ref="formRef" :label-position="'top'" :model="formInline">
        <div class="top-card" v-if="formInline.length">
          <div v-for="(item, index) in listData" :key="item.id">
            <el-row :gutter="24">
              <el-col :span="4">
                <el-form-item prop="dominType">
                  <el-select v-model="formInline[index]['dominType']" placeholder="请选择">
                    <el-option
                      v-for="ite in item.dominTypeOptions"
                      :key="ite.id"
                      :label="ite.label"
                      :value="ite.value"
                    />
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="20">
                <el-form-item prop="website">
                  <div class="website-box">
                    <el-input v-model="formInline[index]['website']" placeholder="请填写域名自动拼接" />
                    <div class="redirect">
                      {{ item.redirect }}
                    </div>
                    <div @click="handleDelete(item.id)" class="delete-btn">
                      <span />
                    </div>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-form>

      <div class="add" @click="handleAdd"><span>+</span>添加</div>
    </el-card>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeModal">取消</el-button>
        <el-button type="primary" @click="saveModel">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus"

import { ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"

const props = defineProps<{
  record: any
}>()

const emit = defineEmits(["updateList"])

const open = ref(false)
const data = ref(props.record || {})
const formRef = ref<any>(null) // 表单ref

// 打开弹框
const openModal = () => {
  open.value = true
}

// 表单值
const formInline = reactive<any>([
  {
    id: 1,
    dominType: "H5域名",
    website: "https://wap.google.com",
    redirect: "/directAgent=603#/pages/login/login?type=reg"
  },
  {
    id: 2,
    dominType: "PC域名",
    website: "https://wap.google.com",
    redirect: "/directAgent=603#/pages/login/login?type=reg"
  },
  {
    id: 3,
    dominType: "",
    website: "",
    redirect: "/directAgent=603#/pages/login/login?type=reg"
  }
])

// 表单对象值模版
const formInlineTemplateObj = {
  dominType: "",
  website: "",
  redirect: "/directAgent=603#/pages/login/login?type=reg"
}

// 列表模板
const ListTemplateObj = {
  dominTypeOptions: [
    {
      id: 1,
      value: "H5域名",
      label: "H5域名"
    },
    {
      id: 2,
      value: "PC域名",
      label: "PC域名"
    },
    {
      id: 3,
      value: "APP域名",
      label: "APP域名"
    }
  ],
  website: "",
  redirect: "/directAgent=603#/pages/login/login?type=reg"
}

// 列表数据
const listData = reactive([
  {
    id: 1,
    dominTypeOptions: [
      {
        id: 1,
        value: "H5域名",
        label: "H5域名"
      },
      {
        id: 2,
        value: "PC域名",
        label: "PC域名"
      },
      {
        id: 3,
        value: "APP域名",
        label: "APP域名"
      }
    ],
    website: "https://wap.google.com",
    redirect: "/directAgent=603#/pages/login/login?type=reg"
  },
  {
    id: 2,
    dominTypeOptions: [
      {
        id: 1,
        value: "H5域名",
        label: "H5域名"
      },
      {
        id: 2,
        value: "PC域名",
        label: "PC域名"
      },
      {
        id: 3,
        value: "APP域名",
        label: "APP域名"
      }
    ],
    website: "https://wap.google.com",
    redirect: "/directAgent=603#/pages/login/login?type=reg"
  },
  { id: 3, ...JSON.parse(JSON.stringify(ListTemplateObj)) }
])

// 添加
const handleAdd = () => {
  const id = Date.now()
  const Obj1 = Object.assign({ id: id }, JSON.parse(JSON.stringify(formInlineTemplateObj)))

  const Obj2 = Object.assign({ id: id }, JSON.parse(JSON.stringify(ListTemplateObj)))

  formInline.push(Obj1)
  listData.push(Obj2)
}

// 删除
const handleDelete = (id: number) => {
  const index = listData.findIndex((item) => item.id === id)
  listData.splice(index, 1)
  formInline.splice(index, 1)
}

const clearFrom = () => {
  if (formRef.value) {
    formRef.value.resetFields()
    formRef.value.clearValidate()
  }
}
// 关闭弹框
const closeModal = () => {
  clearFrom()
  open.value = false
}

const saveData = () => {
  console.log(formInline, "保存数据：请求api")

  return {
    success: true,
    data: "响应数据"
  }
}

//  保存
const saveModel = async () => {
  const { success, data } = await saveData()
  if (success) {
    ElMessage({
      message: `编辑成功`,
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

<style lang="scss" scoped>
.website-box {
  display: flex;
  align-items: center;
  .redirect {
    background: #f2f2f2;
    padding: 4px 8px;
    font-size: 12px;
    color: #999;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: normal;
    border: 1px solid #dcdfe6;
    border-left: none;
  }
  .delete-btn {
    height: 45px;
    display: flex;
    justify-items: center;
    align-items: center;
    padding-left: 30px;

    &:hover {
      cursor: pointer;
      span {
        border-color: #083be2;
        &::after {
          border-color: #083be2;
        }
      }
    }
    span {
      display: inline-block;
      height: 24px;
      width: 24px;
      border-radius: 4px;
      border: 2px solid #ccc;
      position: relative;

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        width: 16px;
        border: 1px solid #ccc;
        top: 9px;
        left: 2px;
      }
    }
  }
}

.add {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px dashed #999;

  font-size: 14px;
  color: #999;

  span {
    margin-right: 6px;
    padding-bottom: 2px;
  }
  &:hover {
    cursor: pointer;
    color: rgb(102, 102, 102);
    border-color: rgb(102, 102, 102);
  }
}
</style>

<style lang="scss">
.dlgl_dllb_edite-model__dialog {
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

  .el-input__wrapper {
    border-radius: 4px 0px 0 4px;
  }

  .el-select__wrapper {
    height: 45px;
  }
  .el-input__inner {
    height: 43px;
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
