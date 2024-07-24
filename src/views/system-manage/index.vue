<template>
  <div class="app-container">
    <el-tabs type="border-card" class="demo-tabs" @tab-change="tabChange">
      <el-tab-pane v-for="item in tabListConfig" :label="item.tab">
        <component :is="item.component"> </component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import site from "./components/siteConfig/index.vue"
import register from "./components/registerConfig/index.vue"
import currency from "./components/currencyConfig/index.vue"
import domainName from "./components/domainNameConfig/index.vue"
import photo from "./components/photoConfig/index.vue"
import themeColor from "./components/themeColor/index.vue"

// tab
const currentTab = ref<number>(1)
const tabListConfig = [
  {
    key: 1,
    tab: "站点配置",
    component: site
  },
  {
    key: 2,
    tab: "注册配置",
    component: register
  },
  {
    key: 3,
    tab: "货币配置",
    component: currency
  },
  {
    key: 4,
    tab: "域名配置",
    component: domainName
  },

  {
    key: 5,
    tab: "图片配置",
    component: photo
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
