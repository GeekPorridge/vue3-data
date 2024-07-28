<!-- banner -->
<template>
  <div class="app-container">
    <el-card>
      <div class="container">
        <div class="btn-container">
          <el-button type="primary" @click="handleAdd"><span class="icon">+</span>新增</el-button>
        </div>
        <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true" />
      </div>
    </el-card>

    <EditModal ref="editModalRef" from="banner" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/banner-editeModel.vue"

const tableRef = ref(null) // 列表ref
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 编辑的列表数据

// 更新表格数据
const updateList = () => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
}

// 弹框调用
const handleModalOpen = (ref, record, type = "") => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal(type)
  }
}
// 新增
const handleAdd = () => {
  handleModalOpen(editModalRef, {}, "add")
}

const handleSwitchChange = (record: Object) => {
  updateList()
  console.log("handleSwitchChange-----", record)
}

// 编辑弹框
const handleEdit = (record: Object) => {
  handleModalOpen(editModalRef, record, "edite")
}

// 删除操作
const handleDelete = (record: Object) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]进行删除操作?`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      console.log("删除成功")
      updateList()
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
    name: "zd",
    label: "字段"
  },

  {
    name: "kg",
    label: "开关字段",
    type: "switch",
    switchModel: "kg",
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
    name: "actions",
    label: "操作",
    type: "button",
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

<style scoped lang="scss">
.el-card {
  border-color: transparent;
}
.container {
  background: #fff;
  .btn-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px 22px 0px;

    .el-button {
      width: 80px;
      height: 35px;
      .icon {
        margin-bottom: 2px;
        margin-right: 4px;
        font-weight: bolder;
      }
    }
  }
}
</style>
