<script lang="ts" setup>
import { ref } from "vue"

import list from "./list.vue"

// 配置项
const h5Color = [
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  }
]

const pcColor = [
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  }
]

const appColor = [
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  },
  {
    color: "rgba(19, 206, 102, 0.8)",
    name: "green"
  }
]
</script>

<template>
  <div>
    <!-- h5 -->
    <list title="主题颜色H5" :list="h5Color"></list>

    <!-- PC -->
    <list title="主题颜色PC" :list="pcColor"></list>

    <!-- App -->
    <list title="主题颜色APP" :list="appColor"></list>
  </div>
</template>

<style lang="scss" scoped></style>
