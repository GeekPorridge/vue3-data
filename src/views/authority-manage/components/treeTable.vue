<template>
  <!-- key根据后端唯一值进行替换 -->
  <el-card v-loading="isLoding" shadow="never">
    <!-- 表格 -->
    <div class="table-wrapper">
      <el-table row-key="id" :border="true" :data="tableData" style="width: 100%">
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

            <div v-else-if="column.type === 'icon'">
              <el-icon>
                <component :is="scope.row[column.name]" />
              </el-icon>
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
<script lang="ts" setup>
import { ref, watch, defineProps, defineExpose } from "vue"
import { request } from "@/utils/service"
import { SuitcaseLine, Burger, CreditCard } from "@element-plus/icons-vue"

/**
 * 组件的属性定义
 * @property {string} url - 获取数据的接口地址
 * @property {boolean} [isPagination=true] - 是否显示分页
 * @property {Array<{ tb: string, label: string }>} columns - 表格列配置
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

interface Data {
  id: string
  cdmc: string
  tb: string
  sjcd: string
  cdUrl: string
  kg: boolean
  sqbs: string
  px: number
  lx: string
  hasChildren?: boolean
  children?: Data[]
}

const generateRandomId = () => {
  const randomId = Date.now().toString(36) + Math.random().toString(36).substring(2)
  return randomId
}
// mock 数据
const tableData: Data[] = [
  {
    id: "1",
    cdmc: "箱包",
    tb: "SuitcaseLine",
    sjcd: "-",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    children: [
      {
        id: "11",
        cdmc: "女包1",
        tb: "CreditCard",
        cdUrl: "/User/m",
        sjcd: "系统管理",
        kg: false,
        sqbs: "字段内容",
        px: 1,
        lx: "菜单",
        children: [
          {
            id: "111",
            cdmc: "款式1",
            tb: "Cpu",
            cdUrl: "/User/m/s",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          },
          {
            id: "112",
            cdmc: "款式2",
            tb: "Paperclip",
            cdUrl: "/User/m/s",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          }
        ]
      },
      {
        id: "12",
        cdmc: "女包2",
        tb: "Goods",
        cdUrl: "/User/m",
        sjcd: "系统管理",
        kg: false,
        sqbs: "字段内容",
        px: 1,
        lx: "菜单",
        children: [
          {
            id: "121",
            cdmc: "三级",
            tb: "Medal",
            cdUrl: "/User",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          },
          {
            id: "122",
            cdmc: "三级",
            tb: "Cpu",
            cdUrl: "/User",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    cdmc: "餐饮",
    tb: "Burger",
    sjcd: "-",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    children: [
      {
        id: "21",
        cdmc: "二级",
        tb: "Lightning",
        cdUrl: "/User",
        sjcd: "系统管理",
        kg: false,
        sqbs: "字段内容",
        px: 1,
        lx: "目录",
        children: [
          {
            id: "211",
            cdmc: "三级",
            tb: "Eleme",
            cdUrl: "/User/m/s",
            sjcd: "系统管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          },
          {
            id: "212",
            cdmc: "三级",
            tb: "Eleme",
            cdUrl: "/User/m/s",
            sjcd: "系统管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          }
        ]
      },
      {
        id: "22",
        cdmc: "二级",
        tb: "Lightning",
        cdUrl: "/User/m",
        sjcd: "系统管理",
        kg: false,
        sqbs: "字段内容",
        px: 1,
        lx: "目录",
        children: [
          {
            id: "221",
            cdmc: "三级",
            tb: "Opportunity",
            cdUrl: "/User/m/s",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "菜单"
          },
          {
            id: "222",
            cdmc: "三级",
            tb: "Opportunity",
            cdUrl: "/User",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录"
          }
        ]
      }
    ]
  },
  {
    id: "3",
    cdmc: "一级",
    tb: "Ship",
    sjcd: "-",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    children: [
      {
        id: "31",
        cdmc: "二级",
        tb: "Timer",
        cdUrl: "/User",
        sjcd: "系统管理",
        kg: false,
        sqbs: "字段内容",
        px: 1,
        lx: "目录",
        children: [
          {
            id: "311",
            cdmc: "三级",
            tb: "Flag",
            cdUrl: "/User/m/s",
            sjcd: "会员管理",
            kg: false,
            sqbs: "字段内容",
            px: 1,
            lx: "目录",
            children: [
              {
                id: "3111",
                cdmc: "四级",
                tb: "SwitchFilled",
                cdUrl: "/User/m/s/s",
                sjcd: "普通管理",
                kg: false,
                sqbs: "字段内容",
                px: 1,
                lx: "目录"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "4",
    cdmc: "一级",
    tb: "Opportunity",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    sjcd: "-"
  },
  {
    id: generateRandomId(),
    cdmc: "一级",
    tb: "Opportunity",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    sjcd: "-"
  },
  {
    id: generateRandomId(),
    cdmc: "一级",
    tb: "Opportunity",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    sjcd: "-"
  },
  {
    id: generateRandomId(),
    cdmc: "一级",
    tb: "Opportunity",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    sjcd: "-"
  },
  {
    id: generateRandomId(),
    cdmc: "一级",
    tb: "Opportunity",
    cdUrl: "/User",
    kg: false,
    sqbs: "字段内容",
    px: 1,
    lx: "目录",
    sjcd: "-"
  }
]

const list = ref() // 表格数据
const page = ref(1)
const pageSize = ref(10)
const total = ref(0)
const isLoding = ref(false)
const showPagination = ref<any>(props.isPagination ?? true)

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
