import Mock from 'mockjs';
import { v1 as uuidv1 } from 'uuid';
import dayjs from 'dayjs';
import { useTbReportStore, useTbChartsStore } from '../store';
import { successResponseWrap, failResponseWrap } from '@/utils/setup-mock';
import { parseUrlParams } from '@/utils';

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

  tbReportStore.create(data);

  return successResponseWrap(data);
});

Mock.mock('/api/report/update', (params) => {
  const { body } = params;
  const {
    data: { hash, name, remark },
  } = JSON.parse(body);

  const tbReportStore = useTbReportStore();
  tbReportStore.update({ hash, name, remark });
});

// 列表
Mock.mock(new RegExp('/api/report/list'), () => {
  const tbReportStore = useTbReportStore();
  return tbReportStore.getReports;
});

// 详情
Mock.mock(new RegExp('/api/report/detail'), (params) => {
  const { body, type, url } = params;
  const requestData =
    type === 'GET' && body === null ? parseUrlParams(url) : JSON.parse(body);

  const { reportHash } = requestData;
  const report = useTbReportStore().findOne(reportHash);
  if (report) {
    report.charts = useTbChartsStore().findAll(reportHash);
  }

  return report;
});

// 报表编辑器保存
Mock.mock('/api/report/update_all', (params) => {
  const { body } = params;
  const {
    data: { report, charts },
  } = JSON.parse(body);

  const tbReportStore = useTbReportStore();
  const tbChartsStore = useTbChartsStore();

  // 更新报表
  const { hash, name, remark } = report;
  tbReportStore.update({ hash, name, remark });

  // 更新图表
  tbChartsStore.update(hash, charts);
});
