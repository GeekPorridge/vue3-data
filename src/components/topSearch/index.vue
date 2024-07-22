<template>
  <div class="flex top-search-container">
    <!-- 输入框 -->
    <div class="flex content-box">
      <div class="box">
        <el-input v-model="inputValue" style="width: 240px" :placeholder="text1" />
      </div>

      <!-- 下拉框 -->
      <div class="box">
        <el-select v-model="selectValue" :placeholder="text2" style="width: 240px">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>

      <!-- 日期选择 -->
      <div class="box">
        <el-date-picker v-model="dataValue" type="date" :placeholder="text3" />
      </div>

      <div class="operate">
        <el-button type="primary" @click="handlerSearchBtn">查询</el-button>
        <el-button @click="handlerReset">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue"

const props = defineProps<{
  text1?: string // 输入框暗词
  text2?: string // 下拉框暗词
  text3: string
  options: Array<{
    // 下拉框列表
    value: string
    label: string
  }>
}>()

const emit = defineEmits<{
  handleSearch: (record: Object) => void
}>()

const inputValue: string = ref("")
const selectValue: string = ref("")
const dataValue: string = ref("")

const handlerSearchBtn = () => {
  const obj = {
    inputValue: inputValue.value,
    selectValue: selectValue.value,
    dataValue: dataValue.value
  }
  emit("handleSearch", obj)
}

const handlerReset = () => {
  inputValue.value = ""
  selectValue.value = ""
  dataValue.value = ""
}
</script>

<style lang="scss" scoped>
// 公共UI
.flex {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.top-search-container {
  background: #fff;
  padding: 10px 30px 0px;

  .box {
    padding-top: 20px;
    margin-right: 20px;
  }

  .operate {
    padding-top: 21px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
    flex: 1;
  }

  :deep(.content-box) {
    .el-input__wrapper,
    .el-select__wrapper,
    .el-button {
      height: 35px;
    }
  }
}
</style>
