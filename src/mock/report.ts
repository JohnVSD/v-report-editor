import Mock from 'mockjs';
import { successResponseWrap } from '@/utils/setup-mock';

Mock.mock(new RegExp('/api/report/create'), (data: IReport) => {
  // localStrong 存储数据
  return successResponseWrap(data);
});

Mock.mock(new RegExp('/api/report/list'), () => {
  const data = [
    {
      name: '1',
    },
    {
      name: '2',
    },
  ];
  console.log('请求被拦截：', data);
  return successResponseWrap(data);
});
