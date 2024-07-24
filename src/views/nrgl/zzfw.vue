<!-- 自助服务 -->
<template>
  <div class="app-container">
    <el-card>
      <div class="container">
        <div class="btn-container">
          <el-button type="primary" @click="handleClick"><span class="icon">+</span>新增</el-button>
        </div>
        <ListTable :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import ListTable from "@/components/ListTable/index.vue"

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
