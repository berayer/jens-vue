<template>
  <div>
    <n-grid cols="1 xl:2" :x-gap="36" :y-gap="36" responsive="screen">
      <n-gi>
        <OrderStatus style="height: 300px" />
      </n-gi>

      <n-gi>
        <OrderTypeSale style="height: 300px" />
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
import { OrderTypeSale, OrderStatus } from '@/views/home/echarts'
</script>
