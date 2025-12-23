# Element Plus Sticky Pagination

将 Element Plus 分页器固定在表格底部的示例。

## 效果演示

https://github.com/user-attachments/assets/6dacbcfd-b63c-4da2-a613-9299de18aa35


## 使用方法

```vue
<script setup>
import TeleportToTable from './components/TeleportToTable.vue'
import { useTemplateRef } from 'vue'

const tableRef = useTemplateRef('tableRef')
</script>

<template>
  <el-table ref="tableRef" :data="tableData" height="100%">
    <!-- 表格列 -->
  </el-table>

  <TeleportToTable :table="tableRef">
    <el-pagination :total="total" />
  </TeleportToTable>
</template>
```

## 运行

```bash
pnpm install
pnpm dev
```
