<template>
  <div class="overflow-x-hidden rounded-2xl bg-white" style="min-height: 384px">
    <!-- 表格顶部菜单栏 -->
    <div class="flex h-10 items-center bg-gray-200 px-3">
      <!-- 左侧按钮组 -->
      <div class="flex flex-1 justify-start space-x-1">
        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:plus" :size="18" />
          </template>
        </n-button>

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:delete" :size="18" />
          </template>
        </n-button>

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:refresh" :size="18" />
          </template>
        </n-button>

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:magnify" :size="18" />
          </template>
        </n-button>

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:dots-vertical" :size="18" />
          </template>
        </n-button>
      </div>
      <!-- 右侧菜单组 -->
      <div class="flex flex-1 items-center justify-end space-x-2">
        <span class="text-xs">行: {{ data.length }}</span>
        <n-divider vertical />

        <n-dropdown trigger="click" :options="columnsOptions">
          <n-button quaternary circle :focusable="false">
            <template #icon>
              <Icon name="mdi:view-grid-outline" :size="18" />
            </template>
          </n-button>
        </n-dropdown>
      </div>
    </div>
    <!-- 数据表格 -->
    <n-data-table v-bind="$attrs"> </n-data-table>
  </div>
</template>

<script setup lang="ts">
import { DataTableProps, NCheckbox } from 'naive-ui'
import { useAttrs } from 'vue'
import Icon from './Icon.vue'

/**
 * @description 继承类型会导致TS报错
 * @link https://github.com/tusen-ai/naive-ui/issues/4810
 */
interface Props extends /* @vue-ignore */ DataTableProps {
  onDeleteSelect?: () => void
}

defineProps<Props>()

const attrs = useAttrs()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = (attrs.data as any[]) || []
const columns = attrs.columns as any[]

function renderColumnsOption(col: any) {
  return h(
    'div',
    {
      class: 'px-2 py-1 hover:bg-gray-100 flex items-center justify-between w-full',
      draggable: true
    },
    [
      h(
        NCheckbox,
        {
          checked: !col.disabled,
          onUpdateChecked: (value: boolean) => {
            changeColumns(col.key, value)
          }
        },
        { default: () => col.title }
      ),
      h(Icon, { name: 'mdi:menu', class: 'hover:cursor-move' })
    ]
  )
}

// = () => {
//   return columns
//     .filter((e) => e.key)
//     .map((e) => {
//       return {
//         key: e.key,
//         type: 'render',
//         render: () => renderColumnsOption(e)
//       }
//     })
// }

const columnsOptions: any[] = []
for (let i = 0; i < columns.length; i++) {
  if (columns[i].key) {
    columnsOptions.push({
      key: columns[i].key,
      type: 'render',
      render: () => renderColumnsOption(columns[i])
    })
  }
}

function changeColumns(key: string, value: boolean) {
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].key == key) {
      columns[i].disabled = value
    }
  }
}

console.log(columnsOptions)
</script>
