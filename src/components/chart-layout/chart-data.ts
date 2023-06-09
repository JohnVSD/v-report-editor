export const tableData = {
  columns: [
    {
      name: '分组织',
      id: 'subsys',
    },
    {
      name: '部门',
      id: 'module',
    },
    {
      name: '业务组',
      id: 'business',
    },
    {
      name: '姓名',
      id: 'name',
    },
    {
      name: '销售额',
      id: 'value',
      accuracy: 2,
    },
  ],
  rows: [
    {
      subsys: '北京总部',
      module: '市场部',
      business: '第一小分队',
      name: '张三',
      value: 6672389,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '北京总部',
      module: '市场部',
      business: '第一小分队',
      name: '李四',
      value: 7673456.78,
      value_level: 'green',
      url: 'http://www.baidu.com',
    },
    {
      subsys: '北京总部',
      module: '市场二部',
      business: '第二小分队',
      name: '百度',
      __showx_row_level: 'red',
      value: '<a href="http://www.baidu.com" target="_blank">百度链接</a>',
      value_ishtml: true,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售部',
      business: '第三小分队',
      name: '张伟',
      value: 8967569,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售部',
      business: '第三小分队',
      name: '李静',
      value: 5645657,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售部',
      business: '第三小分队',
      name: '完颜付',
      value: 4999889,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售部',
      business: '第三小分队',
      name: '纳兰德',
      value: 8878765,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '突击小队',
      name: '迪乌夫',
      value: 7609878,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '突击小队',
      name: '南宫强',
      value: 6786546,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '突击小队',
      name: '萨珊珊',
      value: 3909786,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '王牌小组',
      value_background: '#93dcf3',
      name: '占志林',
      value: 10735687,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '王牌小组',
      name: '欧阳菲',
      value: 8767544,
      url: 'http://www.baidu.com',
    },
    {
      subsys: '上海分部',
      module: '销售二部',
      business: '王牌小组',
      name: '令狐光',
      value: 7867455,
      url: 'http://www.baidu.com',
    },
  ],
  total: 13,
};

export const barData = {
  categories: ['苹果', '三星', '华为', 'oppo', 'vivo', '小米41'],
  series: [
    {
      name: '手机品牌',
      data: [7276, 9066, 9548, 9999, 5797, 9401],
    },
  ],
};

export const lineData = {
  categories: [
    '2019-10-09',
    '2019-10-10',
    '2019-10-11',
    '2019-10-12',
    '2019-10-13',
    '2019-10-14',
    '2019-10-15',
    '2019-10-16',
    '2019-10-17',
    '2019-10-18',
    '2019-10-19',
    '2019-10-20',
    '2019-10-21',
    '2019-10-22',
    '2019-10-23',
  ],
  series: [
    {
      name: '上周',
      data: [
        4622, 3805, 4349, 1536, 1711, 4741, 2430, 1759, 3746, 2934, 1212, 4713,
        3617, 4011, 2275,
      ],
    },
    {
      name: '昨日',
      data: [
        18106, 19700, 14116, 19553, 3064, 14555, 9474, 10772, 19218, 4899, 7105,
        19993, 6669, 7633, 13163,
      ],
    },
    {
      name: '今日',
      data: [
        4077, 25719, 20964, 11313, 26828, 20635, 16372, 21631, 20239, 6988,
        8658, 23806, 14614, 4675, 6880,
      ],
    },
  ],
};
