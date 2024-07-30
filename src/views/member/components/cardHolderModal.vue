<template>
  <el-dialog style="height: 650px; overflow-y: auto" v-model="open" :title="data.id + '卡包'">
    <el-card style="margin-bottom: 20px">
      <h4>银行卡</h4>
      <ListTable :url="'table'" :columns="columns" :isPagination="false" />
    </el-card>

    <el-card>
      <h4>支付宝</h4>
      <ListTable :url="'table'" :columns="columns" :isPagination="false" />
    </el-card>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeModal">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from "vue"
import ListTable from "@/components/ListTable/index.vue"

const props = defineProps<{
  record: any
}>()

const open = ref(false)
const data = ref(props.record || {})

// 打开弹框
const openModal = () => {
  open.value = true
}

// 关闭弹框
const closeModal = () => {
  open.value = false
}

const columns = [
  {
    name: "id",
    label: "id"
  },
  {
    name: "zd",
    label: "卡包字段"
  },
  {
    name: "zd",
    label: "卡包字段"
  },
  {
    name: "zd",
    label: "卡包字段"
  },
  {
    name: "zd",
    label: "卡包字段"
  },
  {
    name: "zd",
    label: "卡包字段"
  },
  {
    name: "zd",
    label: "卡包字段"
  }
]

watch(
  () => props.record,
  (newRecord) => {
    data.value = newRecord || {}
  },
  { immediate: true } // 在组件初始化时也调用
)

defineExpose({ openModal })
</script>

<style lang="scss" scoped></style>
