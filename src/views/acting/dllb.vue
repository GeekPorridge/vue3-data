<template>
  <!-- 代理列表 -->
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
    <EditModal ref="editModalRef" :record="listRecord" />
    <ComplexModal ref="complexModalRef" :record="listRecord" />
    <BindingModal ref="bindingModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { SuccessFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/editModal.vue"
import ComplexModal from "./components/complexModal.vue"
import BindingModal from "./components/bindingModal.vue"
import { FormInstance } from "element-plus"

const tableRef = ref<any>(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 列表数据
const complexModalRef = ref(null) // 加减ref
const bindingModalRef = ref(null) // 绑定ref

// 更新表格数据
const updateList = () => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
}
// 弹框调用
const handleModalOpen = (ref: any, record: any) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 编辑弹框
const handleEdit = (record: any) => {
  handleModalOpen(editModalRef, record)
}

// 加/减弹框
const handleComplex = (record: any) => {
  handleModalOpen(complexModalRef, record)
}

// 绑定弹框
const handleBinding = (record: any) => {
  handleModalOpen(bindingModalRef, record)
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
    name: "createTime",
    label: "开关字段",
    type: "switch",
    switchModel: "createTime",
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
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
    width: "400px",
    actions: [
      {
        type: "primary",
        icon: SuccessFilled,
        label: "编辑",
        handler: handleEdit
      },
      {
        type: "primary",
        icon: SuccessFilled,
        label: "加/扣款",
        handler: handleComplex
      },
      {
        type: "primary",
        icon: SuccessFilled,
        label: "绑定域名",
        handler: handleBinding
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
