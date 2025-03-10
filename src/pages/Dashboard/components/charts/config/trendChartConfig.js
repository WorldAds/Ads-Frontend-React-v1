import * as echarts from 'echarts';

export const mockTrendData = {
  dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  users: [125.6, 145.8, 168.2, 192.5, 215.7, 238.4, 256.8],
  advertisers: [8.5, 9.2, 10.1, 10.8, 11.5, 12.1, 12.5],
  adScreens: [820, 932, 901, 1034, 1190, 1230, 1256],
  adImpressions: [1.5, 1.8, 2.0, 2.2, 2.3, 2.4, 2.5]
};

const createGradient = (startColor, endColor, startOpacity = 1, endOpacity = 1) => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: startColor.replace(')', `)${startOpacity}`) },
    { offset: 1, color: endColor.replace(')', `)${endOpacity}`) }
  ]);
};

export const getTrendChartOption = (data = mockTrendData) => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: 'rgba(139, 92, 246, 0.3)',
        width: 2
      }
    },
    backgroundColor: 'rgba(17, 24, 39, 0.9)',
    borderColor: 'rgba(139, 92, 246, 0.2)',
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    data: ['Users (K)', 'Advertisers (K)', 'LED Screens', 'Daily Impressions (M)'],
    textStyle: {
      color: '#9CA3AF'
    },
    top: 0
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: data.dates,
      axisLine: {
        lineStyle: {
          color: '#374151'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#9CA3AF'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Count',
      position: 'left',
      splitLine: {
        lineStyle: {
          color: 'rgba(55, 65, 81, 0.3)',
          type: 'dashed'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#9CA3AF',
        formatter: '{value}'
      }
    }
  ],
  series: [
    {
      name: 'Users (K)',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: createGradient('rgb(236, 72, 153)', 'rgb(190, 24, 93)')
      },
      areaStyle: {
        color: createGradient('rgb(236, 72, 153)', 'rgb(190, 24, 93)', 0.2, 0)
      },
      emphasis: {
        focus: 'series'
      },
      data: data.users
    },
    {
      name: 'Advertisers (K)',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: createGradient('rgb(139, 92, 246)', 'rgb(109, 40, 217)')
      },
      areaStyle: {
        color: createGradient('rgb(139, 92, 246)', 'rgb(109, 40, 217)', 0.2, 0)
      },
      emphasis: {
        focus: 'series'
      },
      data: data.advertisers
    },
    {
      name: 'LED Screens',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: createGradient('rgb(59, 130, 246)', 'rgb(29, 78, 216)')
      },
      areaStyle: {
        color: createGradient('rgb(59, 130, 246)', 'rgb(29, 78, 216)', 0.2, 0)
      },
      emphasis: {
        focus: 'series'
      },
      data: data.adScreens
    },
    {
      name: 'Daily Impressions (M)',
      type: 'line',
      smooth: true,
      lineStyle: {
        width: 3,
        color: createGradient('rgb(16, 185, 129)', 'rgb(4, 120, 87)')
      },
      areaStyle: {
        color: createGradient('rgb(16, 185, 129)', 'rgb(4, 120, 87)', 0.2, 0)
      },
      emphasis: {
        focus: 'series'
      },
      data: data.adImpressions
    }
  ]
});
