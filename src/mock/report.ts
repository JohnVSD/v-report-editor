import Mock from 'mockjs';
import { useStorage } from '@vueuse/core';
import { v1 as uuidv1 } from 'uuid';
import { successResponseWrap, failResponseWrap } from '@/utils/setup-mock';

const reportKey = 'tb-report';

Mock.mock(new RegExp('/api/report/create'), (params) => {
  const { body } = params;
  const data: IReport = JSON.parse(body);
  console.log('mock create:', data);
  if (!data.name) {
    return failResponseWrap(data, 'Invalid name');
  }

  data.spaceHash = '';
  data.hash = 'r_' + uuidv1().replace(/-/g, '');
  data.status = 0;
  data.creator = 'wangchunwei';
  data.createdAt = '2023-06-12 12:51:00';
  data.updateAt = '2023-06-12 12:51:00';

  // localStrong 存储数据
  console.log('mock 开始存储:', data);
  const storedData = useStorage(reportKey, [data], localStorage, {
    mergeDefaults: (storageValue, newValue) => [...storageValue, ...newValue],
  });
  console.log('存储完毕：', storedData.value);
  return successResponseWrap(data);
});

Mock.mock(new RegExp('/api/report/list'), () => {
  const data = useStorage(reportKey);
  if (data.value !== 'undefined') {
    return successResponseWrap(data.value);
  }

  return [];
});
