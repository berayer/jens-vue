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
        <span class="text-xs">行: {{ 300 }}</span>
        <n-divider vertical />

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:view-grid-outline" :size="18" />
          </template>
        </n-button>
      </div>
    </div>
    <!-- 数据表格 -->
    <n-data-table
      :columns="mTable.columns"
      :data="mTable.data"
      :row-key="(row:any) => row.id"
      max-height="720px"
    >
    </n-data-table>
  </div>
</template>

<script setup lang="ts">
import { DataTable } from '@/utils/MTable'

const mTable = inject('m-table') as DataTable
</script>
