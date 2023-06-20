<template>
  <div>user</div>

  <m-table
    :columns="columns"
    bordered
    :data="user_list"
    :row-key="(row:any) => row.id"
    :single-line="true"
  ></m-table>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NSwitch, NButton } from 'naive-ui'
import { mock_users } from '@/mock'

const user_list = ref([])
const columns: DataTableColumns = [
  {
    type: 'selection'
  },
  {
    title: '用户名',
    key: 'username'
  },
  {
    title: '昵称',
    key: 'nickName'
  },
  {
    title: '是否启用',
    key: 'enabled',
    render: (row: anyObj) =>
      h(NSwitch, { value: row.enabled, onUpdateValue: (v) => (row.enabled = v) })
  },
  {
    title: '创建人',
    key: 'createBy'
  },
  {
    title: '创建时间',
    key: 'createTime'
  },
  {
    title: '最后修改人',
    key: 'updateBy'
  },
  {
    title: '最后修改时间',
    key: 'updateTime'
  },
  {
    title: '操作',
    key: 'button',
    render: () =>
      h('div', [
        h(
          NButton,
          { size: 'small', quaternary: true, type: 'warning', focusable: false },
          { default: () => '修改' }
        ),
        h(
          NButton,
          { size: 'small', quaternary: true, type: 'error', focusable: false },
          { default: () => '删除' }
        )
      ]),
    fixed: 'right'
  }
]

onMounted(() => {
  user_list.value = mock_users as any
})
</script>
