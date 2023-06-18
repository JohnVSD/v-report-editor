import { createPinia } from 'pinia';
import { useEditorStore } from './editor';

import { useTbReportStore } from './tb-report';
import { useTbChartsStore } from './tb-charts';

const pinia = createPinia();

export { useEditorStore, useTbReportStore, useTbChartsStore };
export default pinia;
