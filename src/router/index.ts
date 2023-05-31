import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from "@/views/layout/index.vue";

import MyReport from "@/views/my-report/index.vue";
import ReportManage from "@/views/report-manage/index.vue";


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: {
        name: 'MyReport'
      }
    },
    {
      path: '/my-report',
      name: 'MyReport',
      component: Layout,
      meta: {
        title: '我的报表',
        showInNav: true
      },
      children: [
        {
          path: 'report-list',
          name: 'MyReportList',
          meta: {
            title: '我的报表'
          },
          component: MyReport
        }
      ]
    },
    {
      path: '/report-manage',
      name: 'ReportManage',
      component: Layout,
      meta: {
        title: '报表管理',
        showInNav: true
      },
      children: [
        {
          path: 'list',
          name: 'ReportList',
          meta: {
            title: '报表管理',
            icon: '<icon-unordered-list />'
          },
          component: ReportManage
        },
        {
          path: 'list2',
          name: 'ReportList2',
          meta: {
            title: '新增报表',
            icon: '<icon-unordered-list />'
          },
          component: ReportManage
        }
      ]
    },
  ]
})

export default router;