<script lang="ts" setup>
import colorCon from "./colorPickerCon.vue"

const props = defineProps<{
  title: string
  list: Array<{ color: string; name: string }>
}>()
</script>

<template>
  <div class="container">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="list-content">
        <div class="item" v-for="(item, index) in list" :key="index">
          <colorCon :initColor="item.color" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .content {
    margin-top: 30px;
    padding: 12px 20px 40px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
  }
  .title {
    font-size: 14px;
    font-weight: 400;
    color: #666;
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 28px;
  }

  .list-content {
    display: flex;
    .item {
      margin: 0px 30px;
    }
  }
}
</style>
