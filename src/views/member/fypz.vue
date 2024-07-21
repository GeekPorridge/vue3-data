<template>
  <!-- 返佣配置 -->
  <div class="app-container">
    <ListTable :url="'table'" :isPagination="true" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import ListTable from "@/components/ListTable/index.vue"

const handleClick = (record) => {
  console.log(record)
}

const handleSwitchChange = ()=>{

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
    name: "email",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  },
  {
    name: "createTime",
    label: "开关字段",
    type: "switch",
    switchModel: "createTime",
    switchChange: handleSwitchChange
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
        label: "编辑",
        handler: handleClick
      }
    ]
  }
]
</script>

<style scoped></style>
