export default [
  {
    type: 'charts',
    name: '图表',
    icon: 'icon-icon_shujutubiao',
    plugins: [
      {
        name: '折线图',
        type: 'line',
        icon: 'icon-icon-zhexiantu',
        description: '折线图',
      },
      {
        name: '柱状图',
        type: 'bar',
        icon: 'icon-a-barchart',
        description: '柱状图',
      },
    ],
  },
  {
    type: 'tables',
    name: '表格',
    icon: 'icon-icon-biaoge',
    plugins: [
      {
        name: '表格',
        type: 'table',
        icon: 'icon-icon-biaoge',
        description: '此为普通的表格',
      },
    ],
  },
];
