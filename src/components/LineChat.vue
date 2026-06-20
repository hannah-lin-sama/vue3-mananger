<template>
  <div :id="domId" :style="`height: ${props.height}px; width: 100%`"></div>
</template>
<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
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
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption
} from 'echarts/charts'
import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  DatasetComponentOption,
  LegendComponentOption
} from 'echarts/components'
import type { ComposeOption } from 'echarts/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
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
  LineChart,
  LabelLayout,
  // UniversalTransition,
  CanvasRenderer,
  LegendComponent
])

const option: ECOption = {
  // 标题
  title: {
    text: '销售额'
  },
  // 提示框
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line'
    },
    formatter: (params: any) => {
      return params[0].name + ' ' + params[0].value
    }
  },
  // x轴
  xAxis: {
    type: 'category',
    data: ['A', 'B', 'C', 'D', 'E']
  },
  // y轴
  yAxis: {
    type: 'value',
    name: 'Sales'
  },
  // 系列
  series: [
    {
      name: 'Sales A',
      type: 'line',
      data: [100, 200, 300, 400, 230]
    },
    {
      name: 'Sales B',
      type: 'line',
      data: [10, 20, 200, 40, 150]
    }
  ],
  // 图例
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

const chart = ref<any>(null)

onMounted(() => {
  console.log('---mountd--')
  // 接下来的使用就跟之前一样，初始化图表，设置配置项
  chart.value = echarts.init(document.getElementById(props.domId))
  chart.value.setOption({
    ...option
  })
})

onBeforeUnmount(() => {
  // chart.current.dispose();
})
</script>
