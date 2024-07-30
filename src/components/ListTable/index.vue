<template>
  <!-- key根据后端唯一值进行替换 -->
  <el-card v-loading="isLoding" shadow="never">
    <!-- 表格 -->
    <div class="table-wrapper">
      <el-table row-key="id" :border="showBorder" :data="list" style="width: 100%">
        <el-table-column
          v-for="column in columns"
          :key="column.name"
          :prop="column.name"
          :label="column.label"
          :width="column.width"
          :fixed="column.fixed"
          align="center"
        >
          <!-- 处理按钮和开关 -->
          <template #default="scope">
            <div v-if="column.type === 'button'">
              <el-button
                v-for="action in column.actions"
                :key="action.label"
                link
                size="small"
                :type="action.type"
                @click="action.handler(scope.row)"
              >
                <template v-if="action.icon">
                  <el-icon>
                    <component :is="action.icon" />
                  </el-icon>
                </template>
                {{ action.label }}
              </el-button>
            </div>
            <div v-else-if="column.type === 'switch'">
              <el-switch
                v-model="scope.row[column.switchModel]"
                inline-prompt
                active-text="是"
                inactive-text="否"
                @change="column.switchChange(scope.row)"
              />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="pager-wrapper" v-if="showPagination">
      <el-pagination
        v-model:current-page="page"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :size="'default'"
        :background="true"
        layout="total, sizes, prev, pager, next"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from "vue"
import { request } from "@/utils/service"

/**
 * 组件的属性定义
 * @property {string} url - 获取数据的接口地址
 * @property {boolean} [isPagination=true] - 是否显示分页
 * @property {boolean} [isShowBorder=false] - 是否显示表格边框
 * @property {Array<{ name: string, label: string }>} columns - 表格列配置
 * @property {Object} formParams - 表单参数
 */
const props = defineProps<{
  url: string
  isPagination?: Boolean
  isShowBorder?: {
    type: Boolean
    default: false
  }
  columns: Array<any>
  formParams?: Object
}>()

const list = ref()
const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const isLoding = ref(false)
const showPagination = ref<any>(props.isPagination ?? true)
const showBorder = ref<any>(props.isShowBorder ?? false)

const processObject = (obj: any) => {
  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      return key
    }
  }
}

const getListApi = (params: object) => {
  return request({
    url: props.url,
    method: "get",
    params
  })
}

const getTableData = async () => {
  try {
    isLoding.value = true

    const res: any = await getListApi({
      currentPage: page.value,
      size: pageSize.value,
      username: "",
      phone: "",
      ...props.formParams
    })

    const key: string | any = processObject(res.data)

    list.value = res.data[key]
    total.value = res.data.total
  } catch (error) {
    console.error("Error fetching table data:", error)
  } finally {
    isLoding.value = false
  }
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
}
const handleCurrentChange = (val: number) => {
  page.value = val
}

watch([page, pageSize], () => {
  getTableData()
})

defineExpose({
  getTableData
})

getTableData()
</script>

<style scoped>
.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}

.actions_button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
