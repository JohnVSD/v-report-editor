export default function barOptions(series: any[] = [], categories: any[] = []) {
  const seriesNames: string[] = [];
  series = series.map((item) => {
    seriesNames.push(item.name);
    return {
      type: 'bar',
      ...item,
    };
  });

  return {
    tooltip: {},
    legend: {
      data: seriesNames,
    },
    xAxis: {
      data: categories,
    },
    yAxis: {},
    series,
  };
}
