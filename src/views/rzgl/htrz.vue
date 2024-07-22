<!-- 后台日志 -->
<template>
  <div class="app-container">
    <div class="container">
      <topSearch
        @handleSearch="handleSearch"
        text1="搜索字段"
        text2="选择类型字段"
        text3="选择日期范围"
        :options="options"
      ></topSearch>
      <ListTable :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true"></ListTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import topSearch from "@/components/topSearch/index.vue"
import ListTable from "@/components/ListTable/index.vue"

// 站点配置
const handleSearch = (record: Object) => {
  console.log(record, "handleSearch--")
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
  }
]

const options = [
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
]
</script>

<style lang="scss" scoped>
.el-card {
  border-color: transparent;
}
</style>
