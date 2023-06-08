interface IReport {
  hash?: string; // 唯一 ID
  name: string;
  remark: string;
  status: number; // 报表状态：0：草稿，待发布；1：已发布；2：已下线
  spaceHash?: string; // 空间hash
  createdAt: string;
  updateAt: string;
  creator: string;
}

type IReportDetailMap = Map<string, IChart>;
