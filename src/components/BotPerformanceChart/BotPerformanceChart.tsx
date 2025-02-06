import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import {
  generateChartData,
  getBotPerformance,
  getBotColor,
  formatChartTick,
  getPointsForTimeRange,
} from "@/utils";
import { BotName, ChartDataPoint, TimeRange } from "@/types";

interface BotPerformanceChartProps {
  selectedBot: BotName;
  selectedTimeRange: TimeRange;
}

export const BotPerformanceChart = ({
  selectedBot,
  selectedTimeRange,
}: BotPerformanceChartProps) => {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
  const gradientId = `gradient-${selectedBot}`;

  useEffect(() => {
    const points = getPointsForTimeRange(selectedTimeRange);
    const data = generateChartData(points, selectedTimeRange);
    setChartData(data);
  }, [selectedBot, selectedTimeRange]);

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      <div className="h-32 sm:h-40 md:h-48 lg:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            stackOffset="expand"
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop
                  offset="0%"
                  stopColor={getBotColor(selectedBot)}
                  stopOpacity={1}
                />
                <stop
                  offset="100%"
                  stopColor={getBotColor(selectedBot)}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#546076" strokeDasharray="7 7" />
            <XAxis
              dataKey="name"
              tickFormatter={(name) => formatChartTick(name, selectedTimeRange)}
              interval="preserveStartEnd"
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke={getBotColor(selectedBot)}
              fill={`url(#${gradientId})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl md:text-7xl z-10 ${
          getBotPerformance(selectedBot, selectedTimeRange) >= 0
            ? "text-forest-green"
            : "text-bright-pink"
        }`}
      >
        {getBotPerformance(selectedBot, selectedTimeRange) >= 0 ? "+" : ""}
        {getBotPerformance(selectedBot, selectedTimeRange)}%
      </div>
    </div>
  );
};
