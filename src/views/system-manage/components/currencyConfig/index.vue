<!-- 货币配置 -->
<template>
  <div>
    <ListTable ref="tableRef" :url="'table'" :isPagination="false" :columns="columns" :isShowBorder="isShowBorder" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import ListTable from "@/components/ListTable/index.vue"

const tableRef = ref<any>(null) // 列表ref
const isShowBorder = ref<any>(true)

const handleSwitchChange = (record: Object) => {}

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
    name: "kg",
    label: "开关字段",
    type: "switch",
    switchModel: "kg",
    switchChange: handleSwitchChange
  }
]
</script>
