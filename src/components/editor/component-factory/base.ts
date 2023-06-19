import { guid } from '@/utils';

export class ComponentBase {
  i: number; // 栅格中元素的ID
  x: number; // vue-grid-layout 的 x 栅格位置
  y: number; // vue-grid-layout 的 y 栅格位置
  w: number; // 该图表容器宽度
  h: number; // 该图表容器高度

  id!: string; // 前端：图表唯一 id 值
  name!: string; // 图表名称
  type!: string; // 图表类型（line、bar、table）
  remark: string; // 图表描述
  titleAlign: string; // 标题定位
  hideTitle: boolean; // 是否隐藏标题

  constructor() {
    this.id = guid();

    this.x = 0;
    this.y = 0;
    this.w = 4;
    this.h = 30;
    this.i = 0;

    this.remark = '';
    this.hideTitle = false;
    this.titleAlign = 'left';
  }
}
