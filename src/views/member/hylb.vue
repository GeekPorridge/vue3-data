<template>
  <!-- 会员列表 -->
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
    width: "400px",
    fixed: "right",
    actions: [
      {
        label: "卡包",
        handler: handleClick
      },
      {
        label: "编辑",
        handler: () => {}
      },
      {
        label: "加/扣款",
        handler: () => {}
      },
      {
        label: "额度管理",
        handler: () => {}
      },
      {
        label: "升为代理",
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

<style scoped></style>
