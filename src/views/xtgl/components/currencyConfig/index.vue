<!-- 货币配置 -->
<template>
  <div>
    <ListTable :url="'table'" :isPagination="false" :columns="columns" :isShowBorder="true"></ListTable>
  </div>
</template>

<script setup lang="ts">
import ListTable from "@/components/ListTable/index.vue"

// 站点配置
const handleClick = (record: Object) => {
  console.log(record)
}

const handleSwitchChange = () => {
  console.log("handleSwitchChange-----")
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
    name: "email",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  }
]
</script>
