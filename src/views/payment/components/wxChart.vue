<!-- 微信支付 -->
<template>
  <div class="container">
    <el-card shadow="never">
      <div class="container">
        <div class="btn-container">
          <el-button type="primary" @click="handleAdd"><span class="icon">+</span>新增</el-button>
        </div>
        <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="isShowBorder" />
      </div>
    </el-card>

    <EditModal ref="editModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import { EditPen } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./zztd-wx-editModal.vue"

const tableRef = ref<any>(null) // 列表ref
const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 编辑的列表数据
const isShowBorder = ref<any>(true)

// 更新表格数据
const updateList = () => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
}

// 新增
const handleAdd = () => {
  handleModalOpen(editModalRef, {}, "add")
}

// 弹框调用
const handleModalOpen = (ref: any, record: Object, type = "") => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal(type)
  }
}

// 编辑弹框
const handleEdit = (record: Object) => {
  handleModalOpen(editModalRef, record, "edite")
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
    label: "开关状态",
    type: "switch",
    switchModel: "kg",
    switchChange: handleSwitchChange
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
