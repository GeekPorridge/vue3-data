<template>
  <el-dialog destroy-on-close v-model="open" :title="title[dialogType]" class="zztd_wx_edite-model__dialog">
    <el-form ref="formRef" :label-position="'top'" :model="formInline">
      <el-card class="top-card">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="btmc" label="标题名称">
              <el-input v-model="formTabInline.btmc" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="sfqy">
              <template #label>
                <div class="tab-title">是否启用<span>是为启用否为关闭</span></div>
              </template>
              <el-radio-group v-model="formInline.sfqy" class="ml-4">
                <el-radio value="1" size="large">是</el-radio>
                <el-radio value="2" size="large">否</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="pmqz">
              <template #label>
                <div class="tab-title">排名权重<span>数字越大排名越靠前</span></div>
              </template>
              <el-input-number v-model="formInline.pmqz" controls-position="right" placeholder="请输入数字字段">
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
          <el-col :span="8">
            <el-form-item prop="shh" label="第三方商户号">
              <el-input v-model="formTabInline.shh" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="my" label="第三方秘钥">
              <el-input v-model="formTabInline.my" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="zfURL" label="第三方支付URL">
              <el-input v-model="formTabInline.zfURL" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="zfbs" label="第三方支付标识">
              <el-input v-model="formTabInline.zfbs" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="zflxdm" label="第三方支付类型代码">
              <el-input v-model="formTabInline.zflxdm" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item prop="bz" label="备注">
              <el-input v-model="formTabInline.bz" placeholder="请输入文字字段" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="bottom-card">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="zdcz">
              <template #label>
                <div class="tab-title">最低充值<span>默认最低1元</span></div>
              </template>
              <el-input-number
                v-model="formInline.zdcz"
                :min="1"
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

          <el-col :span="8">
            <el-form-item prop="zgcz">
              <template #label>
                <div class="tab-title">最高充值<span>默认0无限制</span></div>
              </template>
              <el-input-number
                v-model="formInline.zgcz"
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

          <el-col :span="8">
            <el-form-item prop="zsbl">
              <template #label>
                <div class="tab-title">赠送比例<span>默认不开启,开启百分比则显示百分比输入框</span></div>
              </template>
              <el-radio-group v-model="formInline.zsbl" class="ml-4">
                <el-radio value="1">无</el-radio>
                <el-radio value="2">按百分比</el-radio>
                <el-radio value="3">按固定</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col>
            <el-form-item prop="bfb">
              <template #label>
                <div class="tab-title">按百分比输入框<span /></div>
              </template>
              <el-input-number v-model="formInline.bfb" controls-position="right" placeholder="请输入数字字段">
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
      </el-card>
    </el-form>

    <el-form ref="formTabRef" :model="formTabInline">
      <el-card class="bottom-card">
        <el-tabs type="border-card" class="demo-tabs" @tab-change="tabChange">
          <el-tab-pane v-for="item in tabConfig" :key="item.key" :label="item.tab">
            <el-row :gutter="24">
              <el-col>
                <el-form-item prop="zfbt" label="支付标题">
                  <el-input v-model="formTabInline.zfbt" placeholder="请输入支付标题" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col>
                <el-form-item prop="zysx">
                  <template #label>
                    <div class="tab-title">注意事项<span>显示用户在支付页面的注意的信息</span></div>
                  </template>
                  <el-input v-model="formTabInline.zysx" placeholder="注意" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
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
  // from: string
  record: Object // 编辑的列表数据
}>()

const emit = defineEmits(["updateList"])

const formRef = ref<any>(null) // 表单ref
const formTabRef = ref<any>(null) // 底部表单ref
const open = ref(false)
const data = ref(props.record || {})
const dialogType = ref<any>("edite") // 弹窗类型  编辑：edite  新增：add
const title = ref<any>({
  edite: "编辑",
  add: "新增"
})

// 表单模拟字段
const formInline = reactive<any>({
  btmc: "", // 标题名称
  sfqy: "", // 是否启用
  pmqz: "", // 排名权重
  shh: "", // 第三方商户号
  my: "", // 第三方秘钥
  zfURL: "", // 第三方支付URL
  zfbs: "", // 第三方支付标识
  zflxdm: "", // 第三方支付类型代码
  bz: "", // 备注
  zdcz: "", // 最低充值
  zgcz: "", // 最高充值
  zsbl: "", // 赠送比例
  bfb: "" // 按百分百输入框
})

const formTabInline = reactive<any>({
  active: 1,
  zfbt: "", // 支付标题
  zysx: "" // 注意事项
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
const tabChange = (key: any) => {
  if (formTabRef.value) {
    formTabRef.value.resetFields()
    formTabRef.value.clearValidate()
  }
  formTabInline.active = ++key
}

// 清空表单
const clearFrom = () => {
  if (formRef.value) {
    formRef.value.resetFields()
    formRef.value.clearValidate()
  }

  if (formTabRef.value) {
    formTabRef.value.resetFields()
    formTabRef.value.clearValidate()
  }
}

// 打开弹框
const openModal = (type = "edite") => {
  dialogType.value = type
  open.value = true
}

const saveData = () => {
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
.zztd_wx_edite-model__dialog {
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

  .top-card,
  .bottom-card {
    .tab-title {
      font-size: 14px;
      color: #666;
      line-height: 28px;
      span {
        font-size: 12px;
        color: #999;
      }
    }
  }

  .bottom-card {
    margin-top: 20px;
    .el-form-item {
      flex-direction: column;
      .el-form-item__label {
        justify-content: flex-start;
      }
    }
  }

  .editor-card {
    overflow: hidden;
    border: 1px solid rgba(237, 237, 237, 1);
    border-radius: 10px;
  }

  .el-form-item__label {
    font-size: 14px;
    color: #666;
    line-height: 28px;
  }

  .el-input__wrapper:hover {
    box-shadow: 0 0 0 1px #409eff inset;
  }

  .el-input-number {
    width: auto;
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
