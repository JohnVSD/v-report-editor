export interface IChart {
  id?: number,                // 图表 id 值
  hash?: string,              // 图表唯一值，用户编辑、删除等操作
  reportHash?: string,        // 报表 hash 值，用于收藏等部分操作
  name?: string,              // 图表名称
  type?: string,              // 图表类型（line、bar、table）
  remark?: string,            // 图表描述
  titleAlign: string,         // 标题定位
  hideTitle?: number,         // 是否隐藏标题
  x: number,                  // vue-grid-layout 的 x 栅格位置
  y: number,                  // vue-grid-layout 的 y 栅格位置
  w: number,                  // 该图表容器宽度
  h: number,                  // 该图表容器高度
  isLockScale: boolean,       // 该容器是否锁定比例
  width?: number,             // 转换前的 w 属性
  height?: number,            // 转换前的 h 属性
  left?: number,              // 转换前的 x 属性
  top?: number,               // 转换前的 y 属性
  order?: number,             // 转换前的 i 属性
}