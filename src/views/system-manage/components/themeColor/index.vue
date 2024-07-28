<script lang="ts" setup>

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
    <list title="主题颜色H5" :list="h5Color" />

    <!-- PC -->
    <list title="主题颜色PC" :list="pcColor" />

    <!-- App -->
    <list title="主题颜色APP" :list="appColor" />
  </div>
</template>

<style lang="scss" scoped></style>
