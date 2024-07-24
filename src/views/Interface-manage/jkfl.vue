<!-- 接口分类 -->
<template>
  <div class="app-container">
    <div class="container">
      <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

import ListTable from "@/components/ListTable/index.vue"

const tableRef = ref(null)

const handleSwitchChange = () => {
  console.log("handleSwitchChange-----")
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
    name: "zt",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  },

  {
    name: "tbzd",
    label: "图片字段"
  },
  {
    name: "tbzd",
    label: "图片字段"
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
        handler: handlerEdite
      }
    ]
  }
]
</script>

<style scoped lang="scss">
.el-card {
  border-color: transparent;
}
.container {
  background: #fff;
}
</style>
