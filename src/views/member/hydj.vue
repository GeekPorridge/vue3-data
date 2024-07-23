<template>
  <!-- 会员等级 -->
  <div class="app-container">
    <ListTable :url="'table'" :isPagination="true" :columns="columns" />
    <MemberEditModal ref="editModalRef" :record="listRecord" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { EditPen } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import MemberEditModal from "./components/memberEditModal.vue"

const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 列表数据

// 编辑弹框
const handleEdit = (record) => {
  if (editModalRef.value) {
    listRecord.value = record
    editModalRef.value.openModal()
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

<style scoped></style>
