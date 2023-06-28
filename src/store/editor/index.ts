import { defineStore } from 'pinia';

interface IEditor {
  initCharts: IChart[];
  initReport: IReport | null;
  charts: IChart[];
  report: IReport | null;
  // 其余部分
  activeChart: {
    id: string;
    type: string;
  } | null;
  isEditor: boolean;
}

export const useEditorStore = defineStore('editor', {
  state: (): IEditor => ({
    charts: [],
    report: null,
    // 备份
    initCharts: [],
    initReport: null,
    // 其余部分
    activeChart: null, // 当前激活的对象
    // 是否编辑模式
    isEditor: false,
  }),
  getters: {
    getReport: (state) => state.report,
    // 获取当前活跃图表的配置
    getActiveData: (state) => {
      const { id = '' } = state.activeChart || {};
      return id === 'report'
        ? state.report
        : state.charts.find((item) => item.id === id);
    },
    findCurrentChart: (state) => {
      const id = state.activeChart?.id || '';
      if (id) {
        return state.charts.find((item) => item.id === id) || null;
      }

      return null;
    },
  },
  actions: {
    setIsEditor(status: boolean) {
      this.isEditor = status;
    },
    /**
     * 已存在报表进行编辑时用到
     * * 使用接口请求到的数据进行初始化填充
     */
    init(report: IReport, charts: IChart[]) {
      this.charts = [...charts];
      this.report = report;

      this.initReport = report;
      this.initCharts = [...charts];

      this.activeChart = {
        id: 'report',
        type: 'report',
      };
    },
    setReport(data: IReport) {
      this.report = data;
    },
    // chart 操作
    createChart(data: IChart) {
      // ? this.charts.push(data); 此处 push 操作不会被父组件监听到
      this.charts = [...this.charts, { ...data }];
    },
    updateCharts(charts: IChart[]) {
      this.charts = [...charts];
    },
    removeChart(chartId: string) {
      this.charts = this.charts.filter((item) => item.id !== chartId);
    },
    setActiveChart(data: { id: string; type: string }) {
      this.activeChart = { ...data };
    },
    // 清空当前store
    clearAll() {
      this.charts = [];
      this.report = null;
      this.initReport = null;
      this.initCharts = [];
      this.activeChart = null;
      this.setIsEditor(false);
    },
  },
});
