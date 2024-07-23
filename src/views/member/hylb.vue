<template>
  <!-- 会员列表 -->
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
      <ListTable ref="tableRef" :url="'table'" :columns="columns" :formParams="formInline" />
      <CardHolderModal ref="cardHolderRef" :record="listRecord" />
      <EditModal ref="editModalRef" :record="listRecord" />
      <ComplexModal ref="complexModalRef" :record="listRecord" />
      <AmountModal ref="amountModalRef" :record="listRecord" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { ElMessage, ElMessageBox } from "element-plus"
import { EditPen, SuccessFilled, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import CardHolderModal from "./components/cardHolderModal.vue"
import EditModal from "./components/editModal.vue"
import ComplexModal from "./components/complexModal.vue"
import AmountModal from "./components/amountModal.vue"

const tableRef = ref(null)
const formRef = ref()
const cardHolderRef = ref(null) // 卡包ref
const editModalRef = ref(null) // 编辑ref
const complexModalRef = ref(null) // 加减ref
const amountModalRef = ref(null) // 额度ref
const listRecord = ref() // 列表数据
const modalType = ref("")
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

// 弹框调用
const handleModalOpen = (ref, record) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 打开卡包
const handleCardHolder = (record) => {
  handleModalOpen(cardHolderRef, record)
}

// 编辑弹框
const handleEdit = (record) => {
  handleModalOpen(editModalRef, record)
}

// 加/减弹框
const handleComplex = (record) => {
  handleModalOpen(complexModalRef, record)
}

// 额度操作
const handleAmount = (record) => {
  handleModalOpen(amountModalRef, record)
}

// 代理操作
const handleProxy = (record) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]进行升级为代理操作?`, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      console.log("成功")
    })
    .catch(() => {
      console.log("失败")
    })
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

const handleSwitchChange = (record) => {}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "url",
    label: "图片头像字段"
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
    name: "email",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  },
  {
    name: "zd",
    label: "字段"
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    width: "500px",
    fixed: "right",
    actions: [
      {
        type: "primary",
        icon: EditPen,
        label: "卡包",
        handler: handleCardHolder
      },
      {
        type: "primary",
        icon: EditPen,
        label: "编辑",
        handler: handleEdit
      },
      {
        type: "primary",
        icon: SuccessFilled,
        label: "加/扣款",
        handler: handleComplex
      },
      {
        type: "primary",
        icon: SuccessFilled,
        label: "额度管理",
        handler: handleAmount
      },
      {
        type: "primary",
        icon: SuccessFilled,
        label: "升为代理",
        handler: handleProxy
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

<style scoped></style>
