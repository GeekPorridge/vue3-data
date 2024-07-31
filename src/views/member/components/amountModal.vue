<template>
  <el-dialog style="height: 650px; overflow-y: auto" v-model="open" :title="data.id + '额度管理'">
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
            <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center">
              中心账户
              <el-icon style="font-size: 12px; margin-left: 5px"><Refresh /></el-icon>
            </div>
            <span>￥11.00</span>
          </div>
          <div style="margin-right: 20px">
            <div style="margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center">
              <el-icon style="font-size: 12px; margin-left: 5px"><Refresh /></el-icon>
            </div>
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
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id">
          <template #default="scope">
            <div style="display: flex; justify-content: center; align-items: center">
              <div style="font-size: 12px; color: #93a2b1">
                {{ scope.row.title }}
              </div>
              <el-icon style="font-size: 12px; margin-left: 5px; color: #93a2b1"><refresh-right /></el-icon>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; font-size: 14px; font-weight: 700">
              {{ scope.row.price }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="id">
          <template #default="scope">
            <div style="display: flex; justify-content: center; align-items: center">
              <div style="font-size: 12px; color: #93a2b1">
                {{ scope.row.title }}
              </div>
              <el-icon style="font-size: 12px; margin-left: 5px; color: #93a2b1"><refresh-right /></el-icon>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; font-size: 14px; font-weight: 700">
              {{ scope.row.price }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="id">
          <template #default="scope">
            <div style="display: flex; justify-content: center; align-items: center">
              <div style="font-size: 12px; color: #93a2b1">
                {{ scope.row.title }}
              </div>
              <el-icon style="font-size: 12px; margin-left: 5px; color: #93a2b1"><refresh-right /></el-icon>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; font-size: 14px; font-weight: 700">
              {{ scope.row.price }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="id">
          <template #default="scope">
            <div style="display: flex; justify-content: center; align-items: center">
              <div style="font-size: 12px; color: #93a2b1">
                {{ scope.row.title }}
              </div>
              <el-icon style="font-size: 12px; margin-left: 5px; color: #93a2b1"><refresh-right /></el-icon>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; font-size: 14px; font-weight: 700">
              {{ scope.row.price }}
            </div>
          </template>
        </el-table-column>
      </el-table>
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

const props = defineProps<{
  record: any
}>()

const open = ref(false)
const data = ref(props.record || {})

const tableData = [
  {
    title: "title",
    price: "¥11.00"
  },
  {
    title: "title",
    price: "¥11.00"
  },
  {
    title: "title",
    price: "¥11.00"
  },
  {
    title: "title",
    price: "¥11.00"
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
