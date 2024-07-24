<!-- 公告列表 -->
<template>
  <div class="app-container">
    <el-card>
      <div class="container">
        <el-form :inline="true" ref="formRef" :model="formInline">
          <el-form-item prop="search">
            <el-input v-model="formInline.search" placeholder="搜索字段" />
          </el-form-item>
          <el-form-item prop="type">
            <el-select style="width: 200px" v-model="formInline.type" placeholder="选择类型字段">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item prop="date">
            <el-date-picker v-model="formInline.date" type="date" placeholder="选择日期范围" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit(formRef)">查询</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>

        <div class="btn-container">
          <el-button type="primary" @click="handleAdd"><span class="icon">+</span>新增</el-button>
        </div>

        <ListTable
          ref="tableRef"
          :url="'table'"
          :isPagination="true"
          :columns="columns"
          :isShowBorder="true"
          :formParams="formInline"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw } from "vue"

import { ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"

const tableRef = ref(null)
const formRef = ref()

const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

// 新增
const handleAdd = () => {
  console.log("handleAdd")
}

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

// 弹框调用
const handleModalOpen = (ref, record) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

const handleSwitchChange = (record) => {
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  console.log("handleSwitchChange-----", record)
}

// 编辑弹框
const handleEdit = (record) => {
  handleModalOpen(editModalRef, record)
}

// 删除操作
const handleDelete = (record) => {
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
    switchModel: "zt",
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
    padding: 0px 22px 0px;

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
