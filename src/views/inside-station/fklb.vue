<template>
  <!-- 反馈列表 -->
  <div class="app-container">
    <ListTable :url="'table'" :columns="columns" />
  </div>
  <ReplyModal ref="replyModalRef" :record="listRecord" />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { ElMessageBox } from "element-plus"
import { EditPen, DeleteFilled } from "@element-plus/icons-vue"
import ListTable from "@/components/ListTable/index.vue"
import ReplyModal from "./components/replyModal.vue"

const replyModalRef = ref(null) // 回复ref
const listRecord = ref() // 列表数据

// 弹框调用
const handleModalOpen = (ref: any, record: any) => {
  if (ref.value) {
    listRecord.value = record
    ref.value.openModal()
  }
}

// 打开回复
const handleReplyModal = (record: any) => {
  handleModalOpen(replyModalRef, record)
}

// 删除操作
const handleDelete = (record: any) => {
  ElMessageBox.confirm(`确定对[id=${record.id}]进行删除操作?`, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
    .then(() => {
      console.log("删除成功")
    })
    .catch(() => {
      console.log("删除失败")
    })
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
    name: "actions",
    label: "操作",
    type: "button",
    fixed: "right",
    actions: [
      {
        type: "primary",
        icon: EditPen,
        label: "回复",
        handler: handleReplyModal
      },
      {
        type: "danger",
        icon: DeleteFilled,
        label: "删除",
        handler: handleDelete
      }
    ]
  }
]
</script>

<style lang="scss" scoped></style>
