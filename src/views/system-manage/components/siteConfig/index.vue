<!-- 站点配置 -->
<template>
  <div class="container">
    <ListTable ref="tableRef" :url="'table'" :isPagination="false" :columns="columns" :isShowBorder="isShowBorder" />

    <EditModal ref="editModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { EditPen } from "@element-plus/icons-vue"

import ListTable from "@/components/ListTable/index.vue"
import EditModal from "@/views/system-manage/components/siteConfig/components/editModal.vue"

const tableRef = ref<any>(null) // 列表ref
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 列表数据
const isShowBorder = ref<any>(true)

// 弹框调用
const handleModalOpen = (ref: any, record: Object) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 编辑弹框
const handleEdit = (record: Object) => {
  handleModalOpen(editModalRef, record)
}

const updateList = () => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
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

<style lang="scss" scoped></style>
