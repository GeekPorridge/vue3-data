<!-- 接口分类 -->
<template>
  <div class="app-container">
    <div class="container">
      <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="isShowBorder" />
    </div>

    <EditModal ref="editModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { EditPen } from "@element-plus/icons-vue"

import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/jkfl-editModal.vue"

const tableRef = ref<any>(null) // 列表ref
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 列表数据
const isShowBorder = ref<any>(true)

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

const updateList = () => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
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
    name: "tbzd",
    label: "图片字段"
  },
  {
    name: "tbzd",
    label: "图片字段"
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
    width: "100px",
    actions: [
      {
        type: "primary",
        icon: EditPen,
        label: "编辑",
        handler: handleEdit
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.el-card {
  border-color: transparent;
}
.container {
  background: #fff;
}
</style>
