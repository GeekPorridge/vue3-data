<!-- 会员日志 -->
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
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
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

        <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="isShowBorder" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

import ListTable from "@/components/ListTable/index.vue"

const options = [
  {
    value: "类型1",
    label: "类型1"
  },
  {
    value: "类型2",
    label: "类型2"
  },
  {
    value: "类型3",
    label: "类型3"
  }
]

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
  }
]
const isShowBorder = ref<any>(true)
const tableRef = ref<any>(null)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

const handleSubmit = (formEl: any) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl: any) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.el-card {
  border-color: transparent;
}
</style>
