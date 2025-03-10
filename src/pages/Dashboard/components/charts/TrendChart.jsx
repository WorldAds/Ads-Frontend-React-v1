import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { getTrendChartOption } from './config/trendChartConfig';

export default function TrendChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const initChart = () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }

      try {
        chartInstance.current = echarts.init(chartRef.current);
        const option = getTrendChartOption();
        chartInstance.current.setOption(option);
      } catch (error) {
        console.error('图表初始化失败:', error);
      }
    };

    // 初始化图表
    initChart();

    // 监听主题变化
    const handleThemeChange = (e) => {
      if (e.matches) {
        // 暗色主题
        initChart();
      } else {
        // 亮色主题
        initChart();
      }
    };

    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addListener(handleThemeChange);

    return () => {
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
      darkModeMediaQuery.removeListener(handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    // 添加ResizeObserver以处理容器大小变化
    const resizeObserver = new ResizeObserver(handleResize);
    if (chartRef.current) {
      resizeObserver.observe(chartRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div 
      ref={chartRef} 
      className="w-full h-[300px] relative"
      style={{ minHeight: '300px' }}
    >
      {/* 加载状态 */}
      {!chartInstance.current && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
        </div>
      )}
    </div>
  );
}
