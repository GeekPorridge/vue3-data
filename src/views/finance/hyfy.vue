<template>
  <!-- 会员返佣 -->
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
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { ElMessageBox, FormInstance } from "element-plus"
import { SuccessFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"

const tableRef = ref<any>(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

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

const handleSwitchChange = (record: any) => {
  console.log(record)
}

// 更新操作
const handleOnUpdate = (record: any) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]行手动返佣更新吗?`, {
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
    name: "email",
    label: "开关字段",
    type: "switch",
    switchModel: "email",
    switchChange: handleSwitchChange
  },
  {
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
    actions: [
      {
        type: "primary",
        icon: SuccessFilled,
        label: "更新",
        handler: handleOnUpdate
      }
    ]
  }
]
</script>

<style scoped></style>
