<template>
  <data-table :columns="" :data="datas" :row-key="(row) => row.id" />
</template>

<script setup lang="ts">
import { DataTableColumns } from 'naive-ui'

interface MColumns extends DataTableColumns {
  show?: boolean
}

const columns = ref<DataTableColumns>([
  {
    type: 'selection'
  },
  {
    key: 'name',
    title: '角色名称',
    _show: true
  },
  {
    key: 'updateBy',
    title: '最后修改人'
  },
  {
    key: 'updateTime',
    title: '最后修改时间'
  },
  {
    key: 'createBy',
    title: '创建人'
  },
  {
    key: 'createTime',
    title: '创建时间'
  },
])
const datas = ref<anyObj[]>([
  {
    id: 1,
    name: '管理员',
    createBy: 'system',
    createTime: '2023-07-06 12:59:36'
  },
  {
    id: 2,
    name: '普通用户',
    createBy: 'system',
    createTime: '2023-07-06 12:59:36'
  }
])
</script>
