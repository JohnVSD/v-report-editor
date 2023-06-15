import { defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', {
  state: () => ({
    charts: [],
    report: {},
    // 备份
    initCharts: [],
    initConditions: [],
    initReport: {},
    // 其余部分
    activeObj: {}, // 当前激活的对象
  }),
  getters: {},
  actions: {},
});
