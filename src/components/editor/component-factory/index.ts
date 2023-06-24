import { ComponentBase } from './base';

import { BarChart } from './charts-class/bar';
import { LineChart } from './charts-class/line';
import { CommonTable } from './table/common-table';

export function getChartInstance(type: string) {
  switch (type) {
    case 'line':
      return new LineChart();
    case 'bar':
      return new BarChart();
    case 'table':
      return new CommonTable();
    default:
      return null;
  }
}

export default { ComponentBase, getChartInstance };
