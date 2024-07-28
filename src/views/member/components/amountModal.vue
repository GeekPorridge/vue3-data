<template>
  <el-dialog v-model="open" :title="data.id + '额度管理'">
    <el-card>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 0">
        <!-- 左侧 -->
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #f2f2f2;
            padding: 20px;
          "
        >
          <div style="margin-right: 20px">
            <div style="margin-bottom: 10px">中心账户</div>
            <span>￥11.00</span>
          </div>
          <div>
            <div style="margin-bottom: 10px">锁定账户</div>
            <span>￥11.00</span>
          </div>
        </div>
        <!-- 右侧 -->
        <div style="display: flex; justify-content: space-around; flex: 1; align-items: center">
          <div>
            <div style="margin-bottom: 10px">选择类型1</div>
            <el-select style="width: 150px" placeholder="请选择类型">
              <el-option label="类型1" value="1" />
              <el-option label="类型2" value="2" />
            </el-select>
          </div>
          <div>
            <div style="margin-bottom: 10px">选择类型2</div>
            <el-select style="width: 150px" placeholder="请选择类型">
              <el-option label="类型1" value="1" />
              <el-option label="类型2" value="2" />
            </el-select>
          </div>
          <div>
            <div style="margin-bottom: 10px">数字输入字段</div>
            <el-input-number style="width: 150px" controls-position="right" placeholder="请输入">
              <template #decrease-icon>
                <el-icon>
                  <Minus />
                </el-icon>
              </template>
              <template #increase-icon>
                <el-icon>
                  <Plus />
                </el-icon>
              </template>
            </el-input-number>
          </div>
          <div style="margin-top: 25px">
            <el-button type="primary">提交按钮</el-button>
          </div>
        </div>
      </div>
      <div style="margin: 10px 0; display: flex; justify-content: flex-end; align-items: center">
        <el-button type="primary" link>批量操作</el-button>
      </div>
      <ListTable ref="tableRef" :url="'table'" :columns="columns" :isPagination="false" />
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

const columns = [
  {
    name: "id",
    label: "id"
  }
]

// 打开弹框
const openModal = () => {
  open.value = true
}

// 关闭弹框
const closeModal = () => {
  open.value = false
}

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
