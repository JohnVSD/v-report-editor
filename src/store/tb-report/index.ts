import { defineStore } from 'pinia';
import { useStorage, RemovableRef } from '@vueuse/core';
import dayjs from 'dayjs';
import { useTbChartsStore } from '@/store';

export const useTbReportStore = defineStore('tbReport', {
  state: () => ({
    reports: useStorage('tb-report', []) as RemovableRef<IReport[]>,
  }),
  getters: {
    getReports: (state) => state.reports,
  },
  actions: {
    create(data: any) {
      this.reports.push(data);
    },
    update(data: { hash: string; name: string; remark: string }) {
      const { hash, name, remark } = data;
      this.reports.forEach((item) => {
        if (item.hash === hash) {
          item.name = name;
          item.remark = remark;
          item.status = 1;
          item.updateAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
        }
      });
    },
    findOne(hash: string) {
      return this.reports.find((item) => item.hash === hash) || null;
    },
    remove(hash: string) {
      this.reports = this.reports.filter((item) => item.hash !== hash);
      // 同时清除对应 chart 表中数据
      useTbChartsStore().clearAll(hash);
    },
  },
});
