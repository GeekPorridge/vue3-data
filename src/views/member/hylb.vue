<template>
  <!-- 会员列表 -->
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
    <Modal ref="modalRef" :type="modalType" :record="records" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { EditPen, SuccessFilled, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import Modal from "./components/modal.vue"

let modalType
const tableRef = ref(null)
const formRef = ref()
const modalRef = ref(null)
const records = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

const handleModalOpen = (record) => {
  if (modalRef.value) {
    records.value = record
    modalRef.value.openModal()
  }
}

// 打开卡包
const handleCardHolder = (record) => {
  modalType = "CardHolder"
  handleModalOpen(record)
}

// 编辑弹框
const handleEdit = (record) => {
  modalType = "Edit"
  handleModalOpen(record)
}

// 加/减弹框
const handleComplex = (record) => {
  modalType = "Complex"
  handleModalOpen(record)
}

const handleSwitchChange = (record) => {}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "url",
    label: "图片头像字段"
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
    name: "email",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    width: "500px",
    fixed: "right",
    actions: [
      {
        icon: EditPen,
        label: "卡包",
        handler: handleCardHolder
      },
      {
        icon: EditPen,
        label: "编辑",
        handler: handleEdit
      },
      {
        icon: SuccessFilled,
        label: "加/扣款",
        handler: handleComplex
      },
      {
        icon: SuccessFilled,
        label: "额度管理",
        handler: () => {}
      },
      {
        icon: SuccessFilled,
        label: "升为代理",
        handler: () => {}
      },
      {
        icon: DeleteFilled,
        label: "删除",
        handler: () => {}
      }
    ]
  }
]

const handleSubmit = (formEl) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped></style>
