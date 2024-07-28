<template>
  <el-dialog destroy-on-close v-model="open" :title="title[dialogType]" class="qxgl_jsgl_edite-model__dialog">
    <el-card :shadow="'never'">
      <el-form ref="formRef" :label-position="'top'" :model="formInline">
        <div class="top-card">
          <el-row :gutter="24">
            <el-col>
              <el-form-item prop="jsmc" label="角色名称">
                <el-input v-model="formInline.jsmc" placeholder="请输入文字字段" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>

        <div class="bottom-card">
          <el-row :gutter="24">
            <el-col>
              <el-form-item prop="streeValue">
                <el-tree
                  style="max-width: 600px"
                  :data="streeMockData"
                  show-checkbox
                  node-key="id"
                  :default-expanded-keys="[2, 3]"
                  :default-checked-keys="[5]"
                  :props="defaultProps"
                  @check-change="checkChange"
              /></el-form-item>
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
/**
 * @record 当前编辑的数据
 */
import { ElMessage } from "element-plus"
import { ref, reactive, watch, defineProps, defineExpose, defineEmits } from "vue"

const props = defineProps<{
  record: Object // 编辑的列表数据
}>()

const emit = defineEmits(["updateList"])
const formRef = ref(null) // 表单ref

const open = ref(false)
const data = ref(props.record || {})
const dialogType = ref("edite") // 弹窗类型  编辑：edite  新增：add
const title = {
  edite: "编辑",
  add: "新增"
}
const streeMockData = [
  {
    id: 1,
    label: "会员管理",
    children: [
      {
        id: 11,
        label: "会员列表1",
        children: [
          {
            id: 111,
            label: "新增"
          },
          {
            id: 112,
            label: "删除"
          }
        ]
      },
      {
        id: 12,
        label: "会员列表2",
        children: [
          {
            id: 121,
            label: "新增"
          },
          {
            id: 122,
            label: "删除"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "系统管理",
    children: [
      {
        id: 21,
        label: "站点配置1",
        children: [
          {
            id: 211,
            label: "编辑"
          }
        ]
      },
      {
        id: 22,
        label: "站点配置2",
        children: [
          {
            id: 221,
            label: "编辑"
          }
        ]
      }
    ]
  }
]
const defaultProps = {
  children: "children",
  label: "label"
}

// 表单模拟字段
const formInline = reactive({
  jsmc: "", // 角色名称
  streeValue: "" // 树结构后选中值
})

// 树结构选中值
const checkChange = (data: Object, checked: boolean, indeterminate: boolean) => {
  console.log(data, checked, indeterminate, formInline.streeValue, "树结构选中值")
}

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
      message: `${title[dialogType.value]}成功`,
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
.qxgl_jsgl_edite-model__dialog {
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
