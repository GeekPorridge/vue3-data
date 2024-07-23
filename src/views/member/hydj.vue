<template>
  <!-- 会员等级 -->
  <div class="app-container">
    <ListTable :url="'table'" :isPagination="true" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { EditPen } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"

const handleClick = (record) => {
  console.log(record)
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
        icon: EditPen,
        label: "编辑",
        handler: handleClick
      }
    ]
  }
]
</script>

<style scoped></style>
