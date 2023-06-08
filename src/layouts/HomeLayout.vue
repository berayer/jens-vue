<template>
  <n-layout has-sider class="h-screen">
    <global-sider />
    <n-layout>
      <global-header />
      <global-content />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import GlobalContent from './components/GlobalContent.vue'
import GlobalHeader from './components/GlobalHeader.vue'
import GlobalSider from './components/GlobalSider.vue'
</script>
