<script setup lang="ts">
import { reactive, ref, useTemplateRef } from 'vue'
import { getData, type Item } from './utils'
import TeleportToTable from './components/TeleportToTable.vue'

const query = reactive({
  page: 1,
  pageSize: 10,
})

const loading = ref(false)
const tableData = ref<Item[]>([])
const total = ref(0)

const search = () => {
  loading.value = true
  getData(query).then((res) => {
    tableData.value = res.data
    total.value = res.total
  }).finally(() => {
    loading.value = false
  })
}

search()

const handleCurrentChange = (val: number) => {
  query.page = val
  search()
}

const handleSizeChange = (val: number) => {
  query.pageSize = val
  search()
}


const tableRef = useTemplateRef('tableRef')
</script>

<template>
  <div class="container">
    <div class="table-box">
      <el-table ref="tableRef" :data="tableData" height="100%" v-loading="loading">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
      </el-table>
    </div>
    <TeleportToTable :table="tableRef">
      <el-pagination class="pagination-right" :total="total" :current-page="query.page" :page-size="query.pageSize"
        layout="total,prev,pager,next,sizes,jumper" @current-change="handleCurrentChange"
        @size-change="handleSizeChange" />
    </TeleportToTable>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style>
.container {
  width: 80vw;
  display: flex;
  flex-direction: column;
  height: 80vh;
  margin: 0 auto;
  background-color: #ffffff;
}

.container .table-box {
  height: 0px;
  flex: 1 0 0px;
}

.pagination-right {
  justify-content: flex-end;
}

/* remove table after border */
/* .table-box .el-table--fit .el-table__inner-wrapper:before {
  display: none;
} */
</style>
