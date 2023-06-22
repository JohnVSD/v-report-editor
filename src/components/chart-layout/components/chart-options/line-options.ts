export default function lineOptions(
  series: any[] = [],
  categories: any[] = []
) {
  const seriesNames: string[] = [];
  series = series.map((item) => {
    seriesNames.push(item.name);
    return {
      type: 'line',
      ...item,
    };
  });

  return {
    tooltip: {},
    legend: {
      data: seriesNames,
    },
    xAxis: {
      type: 'category',
      data: categories,
    },
    yAxis: {},
    series,
  };
}
