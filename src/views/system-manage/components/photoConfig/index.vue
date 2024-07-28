<!-- 图片配置 -->
<template>
  <div>
    <ListTable ref="tableRef" :url="'table'" :isPagination="false" :columns="columns" :isShowBorder="true" />

    <EditeDialog ref="editModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { EditPen } from "@element-plus/icons-vue"

import ListTable from "@/components/ListTable/index.vue"
import EditeDialog from "./components/editeModel.vue"

const tableRef = ref(null) // 列表ref
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 列表数据

// 弹框调用
const handleModalOpen = (ref, record) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 编辑弹框
const handleEdit = (record) => {
  handleModalOpen(editModalRef, record)
}

const updateList = (record) => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  console.log("更新列表数据record---", record)
}

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
    name: "actions",
    label: "操作",
    type: "button",
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
