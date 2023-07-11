<template>
  <div class="flex h-screen w-screen items-center justify-center">
    <div class="h-56 w-96 border border-solid border-gray-100 shadow-xl shadow-gray-300">
      <draggable
        v-model="list"
        class="p-4"
        v-bind="{
          animation: 200,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost'
        }"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: 'flip-list'
        }"
        item-key="id"
        handle=".colMove"
      >
        <template #item="{ element }">
          <div
            class="flex items-center justify-between border border-solid border-gray-200 p-2"
            style="margin: 0 0 -1px -1px"
          >
            <Icon name="mdi:menu" class="colMove cursor-move" />
            <span>{{ element.name }}</span>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import draggable from 'vuedraggable'

const list = ref([
  { name: 'John', text: '', id: 0 },
  { name: 'Joao', text: '', id: 1 },
  { name: 'Jean', text: '', id: 2 }
])
</script>
