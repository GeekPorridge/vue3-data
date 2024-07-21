<script setup lang="ts">
import { ref } from "vue"

import ListTable from "@/components/ListTable/index.vue"
import themeColor from "./components/themeColor/index.vue"

// tab
const currentTab = ref<number>(1)
const tabListConfig = [
  {
    key: 1,
    tab: "站点配置",
    component: ListTable
  },
  {
    key: 2,
    tab: "注册配置",
    component: ListTable
  },
  {
    key: 3,
    tab: "货币配置",
    component: ListTable
  },
  {
    key: 4,
    tab: "域名配置",
    component: ListTable
  },

  {
    key: 5,
    tab: "图片配置",
    component: ListTable
  },
  {
    key: 6,
    tab: "主题颜色",
    component: themeColor
  }
]
const tabChange = (key: number) => {
  currentTab.value = key++
}

// 站点配置
const handleClick = (record) => {
  console.log(record)
}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "email",
    label: "字段列表"
  },
  {
    name: "email",
    label: "邮箱"
  },
  {
    name: "email",
    label: "邮箱"
  },
  {
    name: "email",
    label: "邮箱"
  },

  {
    name: "actions",
    label: "操作",
    type: "button",
    actions: [
      {
        label: "详情",
        handler: handleClick
      },
      {
        label: "编辑",
        handler: () => {}
      }
    ]
  }
]
</script>

<template>
  <div class="app-container">
    <el-tabs type="border-card" class="demo-tabs" @tab-change="tabChange">
      <el-tab-pane v-for="item in tabListConfig" :label="item.tab">
        <component :is="item.component" :url="'table'" :isPagination="true" :columns="columns" :isShowBorder="true">
        </component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.demo-tabs {
  height: 100%;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

:deep(.demo-tabs) {
  .el-tabs__item.is-active {
    background-color: #f5f7fa;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #dcdfe6;
  }
}
</style>
