import { defineStore } from 'pinia';
import { useStorage, RemovableRef } from '@vueuse/core';

export const useTbReportStore = defineStore('tbReport', {
  state: () => ({
    reports: useStorage('tb-report', []) as RemovableRef<IReport[]>,
  }),
  getters: {
    getReports: (state) => state.reports,
  },
  actions: {
    addReport(data: any) {
      this.reports.push(data);
    },
    findOneReport(hash: string) {
      return this.reports.find((item) => item.hash === hash) || null;
    },
    removeReport(hash: string) {
      this.reports = this.reports.filter((item) => item.hash !== hash);
    },
  },
});
