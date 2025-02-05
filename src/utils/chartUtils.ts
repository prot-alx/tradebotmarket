import { ChartDataPoint } from "@/types";

export const generateChartData = (points = 20): ChartDataPoint[] => {
  let lastValue = 50;
  return Array.from({ length: points }, (_, i) => {
    lastValue += (Math.random() - 0.5) * 20;
    return { name: i.toString(), value: lastValue };
  });
};
