import { defineStore } from 'pinia';
import { useStorage, RemovableRef } from '@vueuse/core';

export const useTbChartsStore = defineStore('tbCharts', {
  state: () => ({
    charts: useStorage('tb-charts', new Map()) as RemovableRef<
      Map<string, IChart[]>
    >,
  }),
  getters: {},
  actions: {
    findOne(reportHash: string) {
      return this.charts.get(reportHash) || null;
    },
    update(reportHash: string, data: IChart[]) {
      this.charts.set(reportHash, data);
    },
    clearAll(reportHash: string) {
      this.charts.delete(reportHash);
    },
  },
});
