<template>
  <m-table
    :columns="columns"
    bordered
    :data="user_list"
    :row-key="(row:any) => row.id"
    :single-line="true"
    :add-click="addMockData"
    :on-scroll="wxgd"
  ></m-table>
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { NSwitch, NButton } from 'naive-ui'
import { mock_users } from '@/mock'

const user_list = ref([])
const columns: DataTableColumns = [
  {
    type: 'selection',
    width: 40,
    align: 'center'
  },
  {
    title: '序号',
    key: 'no',
    render: (_row, index) => h('span', index + 1),
    width: 55,
    align: 'center'
  },
  {
    title: '用户名',
    key: 'username',
    align: 'center',
    ellipsis: true,
    resizable: true
  },
  {
    title: '昵称',
    key: 'nickName',
    align: 'center',
    ellipsis: true,
    resizable: true
  },
  {
    title: '是否启用',
    key: 'enabled',
    render: (row: anyObj) =>
      h(NSwitch, { value: row.enabled, onUpdateValue: (v) => (row.enabled = v) }),
    width: 80,
    align: 'center'
  },
  {
    title: '创建人',
    key: 'createBy',
    align: 'center',
    ellipsis: true,
    resizable: true
  },
  {
    title: '创建时间',
    key: 'createTime',
    align: 'center',
    width: 165,
    ellipsis: true,
    resizable: true
  },
  {
    title: '最后修改人',
    key: 'updateBy',
    align: 'center',
    ellipsis: true,
    resizable: true
  },
  {
    title: '最后修改时间',
    key: 'updateTime',
    align: 'center',
    width: 165,
    ellipsis: true,
    resizable: true
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
    fixed: 'right',
    align: 'center',
    width: 120
  }
]

onMounted(() => {
  user_list.value = mock_users(20)
})

function addMockData() {
  const d = mock_users(10)
  d.forEach((e: any) => {
    user_list.value.push(e)
  })
}

function wxgd(e: Event) {
  const div = e.target as HTMLElement
  console.log(div.firstChild)
}
</script>
