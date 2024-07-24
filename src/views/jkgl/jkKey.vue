<!-- 接口KEY -->
<template>
  <div class="app-container">
    <el-card>
      <div class="container">
        <el-form :inline="true" ref="formRef" :model="formInline">
          <el-form-item prop="search1">
            <el-input v-model="formInline.search1" placeholder="输入框_key1" />
          </el-form-item>
          <el-form-item prop="search2">
            <el-input v-model="formInline.search2" placeholder="输入框_key2" />
          </el-form-item>
          <el-form-item prop="search3">
            <el-input v-model="formInline.search3" placeholder="输入框_key3" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit(formRef)">保存</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>

        <div class="btn-container">
          <el-button type="primary" @click="handleClick"><span class="icon">+</span>新增</el-button>
        </div>

        <ListTable ref="tableRef" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

import ListTable from "@/components/ListTable/index.vue"

const tableRef = ref(null)
const formRef = ref()

const formInline = reactive({
  search1: "",
  search2: "",
  search3: ""
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
const handleClick = (record) => {
  console.log(record)
}

const handleSwitchChange = () => {
  console.log("handleSwitchChange-----")
}

const handlerEdite = () => {
  console.log("handlerEdite-----")
}

const handlerDel = () => {
  console.log("handlerDel----")
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
    label: "状态",
    type: "switch",
    switchModel: "email",
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
    actions: [
      {
        label: "编辑",
        handler: handlerEdite
      },
      {
        label: "删除",
        handler: handlerDel
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
    padding: 20px 22px 0px;

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
