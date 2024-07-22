<template>
  <!-- 反馈列表 -->
  <div class="app-container">
    <ListTable :url="'table'" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import ListTable from "@/components/ListTable/index.vue"

const handleClick = (record) => {
  console.log(record)
}

const handleSwitchChange = (record) => {}

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
        label: "回复",
        handler: () => {}
      },
      {
        label: "删除",
        handler: () => {}
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
