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
      <ListTable ref="tableRef" :url="'table'" :columns="columns" />
    </el-card>
    <EditModal ref="editModalRef" :record="listRecord" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ElMessageBox } from "element-plus"
import { DeleteFilled, EditPen } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/editModal.vue"

const editModalRef = ref(null) // 回复ref
const listRecord = ref() // 列表数据

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

const tableRef = ref(null)
</script>

<style lang="scss" scoped></style>
