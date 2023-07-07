<template>
  <n-grid class="text-center" :x-gap="8" :y-gap="12" cols="1 400:2 800:4">
    <n-gi>
      <n-card>
        <n-statistic label="拆单数量" tabular-nums>
          <n-number-animation :from="0" :to="183" />
          单
        </n-statistic>
      </n-card>
    </n-gi>

    <n-gi>
      <n-card>
        <n-statistic label="报价数量">
          <n-number-animation :from="0" :to="183" />
          单
        </n-statistic>
      </n-card>
    </n-gi>

    <n-gi>
      <n-card>
        <n-statistic label="今日成交额">
          <n-number-animation :from="0" :to="36" />
          万
        </n-statistic>
      </n-card>
    </n-gi>

    <n-gi>
      <n-card>
        <n-statistic label="待处理">
          <n-number-animation :from="0" :to="916" />
          单
        </n-statistic>
      </n-card>
    </n-gi>
  </n-grid>

  <div class="p-6"></div>

  <n-grid class="text-center" cols="1 800:2" :x-gap="8" :y-gap="12">
    <n-gi>
      <n-card>
        <v-chart
          autoresize
          :option="option"
          :update-options="{ lazyUpdate: true }"
          style="height: 300px"
        />
      </n-card>
    </n-gi>

    <n-gi>
      <OrderTypeSale />
    </n-gi>
  </n-grid>

  <div class="p-6"></div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import type { EChartsOption } from 'echarts'
import OrderTypeSale from './echarts/OrderTypeSale.vue'

const option = ref<EChartsOption>({
  title: {
    text: '订单分布图',
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: [
      '未提交',
      '待审图',
      '退回',
      '待拆单审核',
      '待拆单复审',
      '待报价审核',
      '待经销商确认',
      '待付款确认',
      '待财务审核',
      '待物料采购',
      '待计划生产',
      '计划已接单',
      '已排生产计划',
      '开始生产',
      '部分入库',
      '全部入库',
      '部分发货'
    ]
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        675, 2350, 1125, 981, 132, 41, 1420, 3, 353, 4, 2772, 20, 4118, 2734, 1857, 1328, 1958
      ],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180,180,180,0.2)'
      }
    }
  ]
})
</script>
