import { ChartDataPoint, TimeRange } from "@/types";

export const generateChartData = (points = 365): ChartDataPoint[] => {
  let lastValue = 50;
  return Array.from({ length: points }, (_, i) => {
    lastValue += (Math.random() - 0.5) * 20;
    return { name: i.toString(), value: lastValue };
  });
};

export const getPointsForTimeRange = (timeRange: TimeRange): number => {
  switch (timeRange) {
    case "24h":
      return 24; // 24 часа
    case "7d":
      return 168; // 7 дней * 24 часа
    case "30d":
      return 720; // 30 дней * 24 часа
    case "all_time":
      return 4320; // 180 дней * 24 часа
    default:
      return 24; // По умолчанию 24 часа
  }
};
