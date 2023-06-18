import Axios from 'axios';

/**
 * 报表列表
 */
export function getReportList() {
  return Axios.get<IReport[]>('/api/report/list');
}

/**
 * 创建报表
 * @param {Object} data 报表信息：name、remark...
 */
export function createReport(data: IReport) {
  return Axios.post('/api/report/create', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * 报表详情
 * @param {Object} params
 */
export function getReportDetail(params: { reportHash: string }) {
  return Axios.get<IReport>('/api/report/detail', {
    params,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

/**
 * 更新报表
 * @param {Object} data
 * @param {string} data.reportHash 报表hash
 * @param {string} data.detail 报表详情
 */
export function updateReport(data: { reportHash: string; detail: IReport }) {
  return Axios.post<IReport>('/api/report/update', { data });
}

/**
 * 保存报表信息：图表位置等配置信息
 */
export function saveReportInfo(data: { report: IReport; charts: IChart[] }) {
  return Axios.post<IReport>('/api/report/update_all', { data });
}

/**
 * 删除报表
 * @param {Object} params
 * @param {string} params.reportHash 报表hash
 */
export function delReport(data: { reportHash: string }) {
  return Axios.post('/api/report/del', { data });
}
