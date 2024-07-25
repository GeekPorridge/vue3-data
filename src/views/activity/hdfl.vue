<template>
  <!-- 活动分类 -->
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
    <EditModal ref="editModalRef" :record="listRecord" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/editModal.vue"

const handleSwitchChange = () => {}

const listRecord = ref() // 列表数据
const editModalRef = ref(null) // 编辑ref

// 弹框调用
const handleModalOpen = (ref, record) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 编辑弹框
const handleEdit = (record) => {
  handleModalOpen(editModalRef, record)
}

// 删除操作
const handleDelete = (record) => {
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

const tableRef = ref(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

const handleSubmit = (formEl) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped></style>
