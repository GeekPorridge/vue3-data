<template>
  <!-- 活动列表 -->
  <div class="app-container">
    <el-card>
      <el-form :inline="true" ref="formRef" :model="formInline">
        <el-form-item prop="search">
          <el-input v-model="formInline.search" placeholder="搜索字段" />
        </el-form-item>
        <el-form-item prop="type">
          <el-select style="width: 200px" v-model="formInline.type" placeholder="选择类型字段">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item prop="date">
          <el-date-picker v-model="formInline.date" type="date" placeholder="选择日期范围" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit(formRef)">查询</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>
      <ListTable ref="tableRef" :url="'table'" :columns="columns" :formParams="formInline" />
    </el-card>
    <ApplyModal ref="applylModalRef" :record="listRecord" :type="applyModalType" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { FormInstance } from "element-plus"
import { SuccessFilled, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import ApplyModal from "@/views/finance/components/applyModal.vue"

const tableRef = ref<any>(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})
const listRecord = ref() // 列表数据
const applylModalRef = ref(null) // 申请ref
const applyModalType = ref("") // 类型

// 弹框调用
const handleModalOpen = (ref: any, record: any) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 同意申请
const handleOkApply = (record: any) => {
  handleModalOpen(applylModalRef, record)
  applyModalType.value = "agree"
}

// 拒绝申请
const handleNoApply = (record: any) => {
  handleModalOpen(applylModalRef, record)
  applyModalType.value = "reject"
}

const handleSwitchChange = () => {}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "kg",
    label: "开关字段",
    type: "switch",
    switchModel: "kg",
    switchChange: handleSwitchChange
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
    width: "300px",
    actions: [
      {
        icon: SuccessFilled,
        type: "primary",
        label: "同意申请",
        handler: handleOkApply
      },
      {
        icon: DeleteFilled,
        type: "danger",
        label: "拒绝申请",
        handler: handleNoApply
      }
    ]
  }
]

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped></style>
