<template>
  <!-- 通知列表 -->
  <div class="app-container">
    <el-card>
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
      <div class="table_button" style="margin-bottom: 12px">
        <el-button @click="handleAdd" type="primary">
          <el-icon><CirclePlusFilled /></el-icon>
          新增
        </el-button>
      </div>
      <ListTable ref="tableRef" :url="'table'" :columns="columns" :formParams="formInline" />
    </el-card>

    <EditModal ref="editModalRef" :record="listRecord" @updateList="updateList" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { ElMessageBox, FormInstance } from "element-plus"
import { DeleteFilled, EditPen } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import EditModal from "./components/tzlbEditModal.vue"

const editModalRef = ref(null) // 编辑ref
const listRecord = ref() // 编辑的列表数据
const tableRef = ref<any>(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

// 弹框调用
const handleModalOpen = (ref, record: Object, type = "") => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal(type)
  }
}
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

// 编辑弹框
const handleEdit = (record: Object) => {
  handleModalOpen(editModalRef, record, "edite")
}

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
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
