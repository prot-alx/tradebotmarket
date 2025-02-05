import { useEffect, useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { generateChartData } from "@/utils";
import { getBotPerformance, getBotColor } from "@/utils";
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

  useEffect(() => {
    setChartData(generateChartData());
  }, [selectedBot, selectedTimeRange]);

  return (
    <>
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={getBotColor(selectedBot)}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="text-center text-green-400 text-2xl mb-8">
        {getBotPerformance(selectedBot, selectedTimeRange) >= 0 ? "+" : ""}
        {getBotPerformance(selectedBot, selectedTimeRange)}%
      </div>
    </>
  );
};
