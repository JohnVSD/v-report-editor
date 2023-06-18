import { defineStore } from 'pinia';

interface IEditor {
  initCharts: IChart[];
  initReport: IReport | null;
  charts: IChart[];
  report: IReport | null;
  // 其余部分
  activeObj: {
    type: string;
    frontendId: string;
  } | null;
}

export const useEditorStore = defineStore('editor', {
  state: (): IEditor => ({
    charts: [],
    report: null,
    // 备份
    initCharts: [],
    initReport: null,
    // 其余部分
    activeObj: null, // 当前激活的对象
  }),
  getters: {
    getReport: (state) => state.report,
  },
  actions: {
    /**
     * 已存在报表进行编辑时用到
     * * 使用接口请求到的数据进行初始化填充
     */
    init(report: IReport, charts: IChart[]) {
      this.charts = [...charts];
      this.report = report;

      this.initReport = report;
      this.initCharts = [...charts];

      this.activeObj = null;
    },
    setReport(data: IReport) {
      this.report = data;
    },
    setCharts(charts: IChart[]) {
      this.charts = [...charts];
    },
    createChart(data: IChart) {
      this.charts.push(data);
    },
    clearAll() {
      this.charts = [];
      this.report = null;
      this.initReport = null;
      this.initCharts = [];
      this.activeObj = null;
    },
  },
});
