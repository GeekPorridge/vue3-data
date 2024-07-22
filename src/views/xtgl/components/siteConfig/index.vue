<script setup lang="ts">
import { ref } from "vue"

import ListTable from "@/components/ListTable/index.vue"

// 站点配置
const handleClick = (record: Object) => {
  console.log(record)
}

const handlerEdite = () => {
  console.log("handlerEdite-----")
}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "zd",
    label: "字段",
    text: "字段内容"
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    actions: [
      {
        label: "编辑",
        handler: handlerEdite
      }
    ]
  }
]
</script>
<!-- 站点配置 -->
<template>
  <div class="container">
    <ListTable :url="'table'" :isPagination="false" :columns="columns" :isShowBorder="true"></ListTable>
  </div>
</template>

<style lang="scss" scoped></style>
