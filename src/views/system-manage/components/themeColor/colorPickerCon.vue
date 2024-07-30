<script lang="ts" setup>
import { ref } from "vue"

const color = ref("rgba(19, 206, 102, 0.8)")
</script>

<template>
  <div class="container">
    <div class="title">主题颜色</div>
    <el-color-picker v-model="color" show-alpha popper-class="el-color-picker__panel__xtgl_color_picker" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  .title {
    font-size: 14px;
    color: #666666;
    line-height: 28px;
  }
  :deep(.el-color-picker) {
    margin-top: 10px;
    .el-color-picker__trigger {
      width: 80px;
      height: 40px;
      border-color: rgba(215, 215, 215, 1);
      border-radius: 3px;
      justify-content: flex-start;
      padding: 8px;
      .el-color-picker__color {
        width: 25px;
        height: 25px;
        border-radius: 3px;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          right: -36px;
          top: 8px;
          display: inline-block;
          border: 8px solid #999;
          border-radius: 3px;
          border-color: #999 transparent transparent;
        }
      }

      .el-icon {
        display: none;
      }
    }
  }
}
</style>

<style lang="scss">
.el-color-picker__panel__xtgl_color_picker {
  width: 260px;
  height: 300px;
  box-sizing: border-box;
  padding: 8px 10px 8px 8px;
  overflow: hidden;
  .el-color-dropdown__main-wrapper {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    margin-bottom: 30px;
    width: 240px;
    height: 180px;
  }

  .el-color-svpanel {
    width: 240px;
    height: 180px;
  }
  .el-color-hue-slider {
    transform: rotate(90deg);
    position: absolute;
    top: 76px;
    left: 115px;
    height: 240px;
    width: 10px;
  }

  .el-color-alpha-slider {
    height: 10px;
    width: 240px;
  }

  .el-color-dropdown__btns {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 26px;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: -16px;
      left: 0;
      width: 262px;
      height: 1px;
      background: #e4e7ed;
      transform: translateX(-12px);
    }

    .el-button {
      color: #0079ef;
      border-color: #0079ef;
    }

    .el-button.is-text:not(.is-disabled):hover {
      background: none;
      opacity: 0.8;
    }

    .is-plain {
      &:hover {
        background: #f5f7fa;
      }
    }
  }
}
</style>
