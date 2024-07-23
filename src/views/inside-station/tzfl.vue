<template>
  <!-- 通知分类 -->
  <div class="app-container">
    <el-card>
      <div class="table_button" style="margin-bottom: 12px">
        <el-button type="primary">
          <el-icon><CirclePlusFilled /></el-icon>
          新增
        </el-button>
      </div>
      <ListTable ref="tableRef" :url="'table'" :columns="columns" :formParams="formInline" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import ListTable from "@/components/ListTable/index.vue"

const handleSwitchChange = () => {}

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
    name: "createTime",
    label: "开关字段",
    type: "switch",
    switchModel: "createTime",
    switchChange: handleSwitchChange
  },
  {
    name: "zd",
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
        label: "编辑",
        handler: () => {}
      },
      {
        label: "删除",
        handler: () => {}
      }
    ]
  }
]

const tableRef = ref(null)
</script>

<style lang="scss" scoped></style>
