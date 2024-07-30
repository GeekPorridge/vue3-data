<template>
  <!-- 代理统计 -->
  <div class="app-container">
    <el-card v-loading="isLoding" style="margin-bottom: 10px">
      <el-form :inline="true" ref="formRef" :model="formInline">
        <el-form-item prop="search">
          <el-input v-model="formInline.search" placeholder="搜索字段" />
        </el-form-item>
        <el-form-item prop="type">
          <el-select style="width: 200px" v-model="formInline.type" placeholder="选择类型字段">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item prop="date">
          <el-date-picker v-model="formInline.date" type="date" placeholder="选择日期范围" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit(formRef)">查询</el-button>
          <el-button @click="resetForm(formRef)">重置</el-button>
        </el-form-item>
      </el-form>

      <el-table :data="list" style="width: 100%; margin-bottom: 20px; overflow-x: auto">
        <el-table-column align="center" prop="id" label="id" />
        <el-table-column align="center" prop="dlzh" label="代理帐号" />
        <el-table-column align="center" prop="zsxm" label="真实姓名" />
        <el-table-column align="center" prop="hbbs" label="货币标识" />
        <el-table-column align="center" prop="zxqb" label="中心钱包" />
        <el-table-column align="center" prop="sdqb" label="锁定钱包" />
        <el-table-column align="center" label="数量">
          <el-table-column align="center" prop="dls" label="代理数" />
          <el-table-column align="center" prop="hys" label="会员数" />
        </el-table-column>
        <el-table-column align="center" label="金流">
          <el-table-column align="center" prop="zck" label="总存款" />
          <el-table-column align="center" prop="zqk" label="总取款" />
        </el-table-column>
        <el-table-column align="center" label="红利">
          <el-table-column align="center" prop="zhb" label="总红包" />
          <el-table-column align="center" prop="zyh" label="总优惠" />
          <el-table-column align="center" prop="zfy" label="总返佣" />
        </el-table-column>
        <el-table-column align="center" label="总计">
          <el-table-column align="center" prop="zdd" label="总订单" />
          <el-table-column align="center" prop="yxdd" label="有效订单" />
          <el-table-column align="center" prop="qt" label="其他" />
          <el-table-column align="center" prop="gsky" label="公司亏盈" />
        </el-table-column>
      </el-table>

      <div class="pager-wrapper">
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
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue"
import { request } from "@/utils/service"
import { FormInstance } from "element-plus"

const list = ref()
const page = ref(1)
const pageSize = ref(10)
const tableRef = ref<any>(null)
const total = ref(0)
const isLoding = ref(false)
const formRef = ref()
const formInline = reactive({
  search: "",
  type: "",
  date: ""
})

const getListApi = (params: any) => {
  return request({
    url: "table",
    method: "get",
    params
  })
}

const handleSubmit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  if (tableRef.value) {
    tableRef.value.getTableData()
  }
  formEl.resetFields()
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
}
const handleCurrentChange = (val: number) => {
  page.value = val
}

const getTableData = async () => {
  try {
    isLoding.value = true

    isLoding.value = true

    const res: any = await getListApi({
      currentPage: page.value,
      size: pageSize.value,
      username: "",
      phone: ""
    })

    list.value = res.data.list
    total.value = res.data.total
  } catch (error) {
    console.error("Error fetching table data:", error)
  } finally {
    isLoding.value = false
  }
}

watch([page, pageSize], () => {
  getTableData()
})

getTableData()
</script>

<style scoped>
.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
