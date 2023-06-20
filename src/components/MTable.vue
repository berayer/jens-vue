<template>
  <div class="h-96 overflow-hidden rounded-2xl bg-white">
    <div class="flex h-10 items-center bg-gray-200 px-3">
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
            <Icon name="mdi:filter-multiple" :size="18" />
          </template>
        </n-button>

        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:dots-vertical" :size="18" />
          </template>
        </n-button>
      </div>
      <div class="flex flex-1 justify-center">
        <n-pagination v-model:page="page" :page-count="100" />
      </div>
      <div class="flex flex-1 justify-end">
        <n-button quaternary circle :focusable="false">
          <template #icon>
            <Icon name="mdi:view-grid-outline" :size="18" />
          </template>
        </n-button>
      </div>
    </div>
    <n-data-table v-bind="$attrs"> </n-data-table>
  </div>
</template>

<script setup lang="ts">
const page = ref(2)
</script>
