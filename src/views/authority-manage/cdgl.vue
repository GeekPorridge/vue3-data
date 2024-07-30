<template>
  <div class="app-container">
    <TreeTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import TreeTable from "./components/treeTable.vue"

const tableRef = ref(null) // 列表ref
const listRecord = ref() // 编辑的列表数据

const handleSwitchChange = () => {}

// 编辑弹框
const handleEdit = (record: Object) => {
  listRecord.value = record
}

// 删除操作
const handleDelete = (record: any) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]进行删除操作?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      console.log("删除成功")
    })
    .catch(() => {
      console.log("删除失败")
    })
}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "cdmc",
    label: "菜单名称"
  },
  {
    name: "tb",
    label: "图标",
    type: "icon"
  },
  {
    name: "sjcd",
    label: "上级菜单"
  },
  {
    name: "cdUrl",
    label: "菜单URL"
  },
  {
    name: "kg",
    label: "开关字段",
    type: "switch",
    switchModel: "kg",
    switchChange: handleSwitchChange
  },
  {
    name: "sqbs",
    label: "授权标识"
  },
  {
    name: "px",
    label: "排序"
  },
  {
    name: "lx",
    label: "类型"
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
    width: "160px",
    actions: [
      {
        type: "primary",
        icon: EditPen,
        label: "编辑",
        handler: handleEdit
      },

      {
        type: "danger",
        icon: DeleteFilled,
        label: "删除",
        handler: handleDelete
      }
    ]
  }
]
</script>
