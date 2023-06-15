import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/views/layout/index.vue';

import MyReport from '@/views/my-report/index.vue';
import ReportManage from '@/views/report-manage/index.vue';
import ReportEditor from '@/views/editor/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: {
        name: 'MyReport',
      },
    },
    {
      path: '/my-report',
      name: 'MyReport',
      component: Layout,
      meta: {
        title: '我的报表',
        showInNav: true,
      },
      children: [
        {
          path: 'report-list',
          name: 'MyReportList',
          meta: {
            title: '我的报表',
          },
          component: MyReport,
        },
      ],
    },
    {
      path: '/report-manage',
      name: 'ReportManage',
      redirect: {
        name: 'ReportList',
      },
      meta: {
        title: '报表管理',
        showInNav: true,
      },
      component: Layout,
      children: [
        {
          path: 'list',
          name: 'ReportList',
          meta: {
            title: '报表列表',
            show: true,
            icon: '<icon-unordered-list />',
          },
          component: ReportManage,
        },
      ],
    },
    {
      path: '/report-editor/:reportHash',
      name: 'ReportEditor',
      component: ReportEditor,
    },
  ],
});

export default router;
