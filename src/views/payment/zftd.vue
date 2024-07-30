<template>
  <div class="app-container">
    <el-tabs type="border-card" class="demo-tabs" @tab-change="tabChange">
      <el-tab-pane v-for="item in tabListConfig" :label="item.tab">
        <component :is="item.component" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import wx from "./components/wxChart.vue"

// tab
const currentTab = ref<number>(1)
const tabListConfig = [
  {
    key: 1,
    tab: "微信支付",
    component: wx
  },
  {
    key: 2,
    tab: "支付宝支付",
    component: wx
  },
  {
    key: 3,
    tab: "银联支付",
    component: wx
  },
  {
    key: 4,
    tab: "其他支付",
    component: wx
  },

  {
    key: 5,
    tab: "企业微信汇款",
    component: wx
  },
  {
    key: 6,
    tab: "企业支付宝汇款",
    component: wx
  },
  {
    key: 7,
    tab: "银联汇款",
    component: wx
  }
]
const tabChange = (key: any) => {
  currentTab.value = key++
}
</script>

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
  .el-card {
    border-color: transparent;
  }
  .el-tabs__item.is-active {
    background-color: #f5f7fa;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #dcdfe6;
  }
}
</style>
