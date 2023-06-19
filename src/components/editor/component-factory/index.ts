import { ComponentBase } from './base';

import charts from './charts';
import tables from './tables';

export { ComponentBase };

export default {
  ...charts,
  ...tables,
};
