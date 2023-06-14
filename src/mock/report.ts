import Mock from 'mockjs';
import { v1 as uuidv1 } from 'uuid';
import dayjs from 'dayjs';
import { useTbReportStore } from '../store';
import { successResponseWrap, failResponseWrap } from '@/utils/setup-mock';

Mock.mock(new RegExp('/api/report/create'), (params) => {
  const tbReportStore = useTbReportStore();
  const { body } = params;
  const data: IReport = JSON.parse(body);
  if (!data.name) {
    return failResponseWrap(data, 'Invalid name');
  }

  data.spaceHash = 's_default';
  data.hash = 'r_' + uuidv1().replace(/-/g, '');
  data.status = 0;
  data.creator = 'wangchunwei';
  const dateTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
  data.createdAt = dateTime;
  data.updateAt = dateTime;

  tbReportStore.addReport(data);

  return successResponseWrap(data);
});

Mock.mock(new RegExp('/api/report/list'), () => {
  const tbReportStore = useTbReportStore();
  return tbReportStore.getReports;
});
