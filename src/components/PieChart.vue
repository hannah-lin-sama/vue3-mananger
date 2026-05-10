<template>
  <div :id="domId" :style="`height: ${props.height}px; width: 100%`"></div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import * as echarts from 'echarts/core'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  LegendComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  // BarSeriesOption,
  // LineSeriesOption,
  PieSeriesOption
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  DatasetComponentOption,
  LegendComponentOption
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  // | BarSeriesOption
  // | LineSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  // | GridComponentOption
  | DatasetComponentOption
  | LegendComponentOption
>

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent, // 用于设置图表的网格布局
  DatasetComponent,
  TransformComponent,
  // BarChart,
  // LineChart,
  LabelLayout,
  PieChart,
  // UniversalTransition,
  CanvasRenderer,
  LegendComponent
])

const option: ECOption = {
  // 标题
  title: {
    text: '销售额'
  },
  type: 'pie',
  series: [
    {
      type: 'pie',
      name: 'Sales A',
      center: ['25%', '50%'], // 图表中心位置
      data: [
        { value: 100, name: 'A' },
        { value: 200, name: 'B' },
        { value: 300, name: 'C' },
        { value: 400, name: 'D' },
        { value: 500, name: 'E' }
      ]
    },
    {
      type: 'pie',
      name: 'Sales B',
      center: ['75%', '50%'], // 图表中心位置
      data: [
        { value: 100, name: 'A - line' },
        { value: 200, name: 'B - line' },
        { value: 300, name: 'C - line' },
        { value: 400, name: 'D - line' },
        { value: 500, name: 'E - line' }
      ]
    }
  ],
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  legend: {
    data: ['Sales A', 'Sales B']
  }
}

const props = defineProps({
  domId: {
    type: String,
    default: 'line-chat'
  },
  height: {
    type: Number,
    default: 300
  },
  width: {
    type: String,
    default: '100%'
  }
})

onMounted(() => {
  // 接下来的使用就跟之前一样，初始化图表，设置配置项
  var myChart = echarts.init(document.getElementById(props.domId))
  myChart.setOption({
    ...option
  })
})
</script>
