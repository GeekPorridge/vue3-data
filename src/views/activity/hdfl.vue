<template>
  <!-- 活动分类 -->
  <div class="app-container">
    <el-card>
      <div class="table_button" style="margin-bottom: 12px">
        <el-button type="primary" @click="handleAdd">
          <el-icon><CirclePlusFilled /></el-icon>
          新增
        </el-button>
      </div>
      <ListTable ref="tableRef" :url="'table'" :columns="columns" />
    </el-card>
    <GeneralModal ref="editModalRef" :record="listRecord" />
    <GeneralModal ref="addModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import GeneralModal from "./components/generalModal.vue"

const listRecord = ref() // 列表数据
const editModalRef = ref(null) // 编辑ref
const addModalRef = ref<any>(null) // 新增ref
const tableRef = ref(null)

// 弹框调用
const handleModalOpen = (ref: any, record: any) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 编辑弹框
const handleEdit = (record: any) => {
  handleModalOpen(editModalRef, record)
}

// 新增弹框
const handleAdd = () => {
  if (addModalRef.value) {
    addModalRef.value.openModal()
  }
}

// 删除操作
const handleDelete = (record: any) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]进行删除操作?`, {
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
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
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

<style lang="scss" scoped></style>
