import { useState, useEffect } from "react";
import { getTradingData, saveTradingData } from "@/utils";
import {
  BalanceInfo,
  BotGrid,
  BotPerformanceChart,
  TimeRangeSelector,
  TradingCapital,
} from "@/components";
import { BotName, TimeRange, TradingData } from "@/types";

export const Dashboard = () => {
  const [data, setData] = useState<TradingData>(getTradingData());
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("24h");
  const [selectedBot, setSelectedBot] = useState<BotName>("yellow_bot");

  useEffect(() => {
    const savedData = getTradingData();
    setData(savedData);
  }, []);

  const handleTimeRangeChange = (range: TimeRange) => {
    setSelectedTimeRange(range);
    const updatedData = {
      ...data,
      selectedTimeRange: range,
    };
    setData(updatedData);
    saveTradingData(updatedData);
  };

  const handleBotChange = (bot: BotName) => {
    setSelectedBot(bot);
    const updatedData = {
      ...data,
      selectedBot: bot,
    };
    setData(updatedData);
    saveTradingData(updatedData);
  };

  return (
    <div className="flex flex-col h-full w-full justify-between py-3">
      <div className="flex justify-between px-7 h-[9vh]">
        <TradingCapital />
        <BalanceInfo />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <BotPerformanceChart
          selectedBot={selectedBot}
          selectedTimeRange={selectedTimeRange}
        />
      </div>

      <div className="space-y-4 mt-auto px-7">
        <BotGrid
          selectedBot={selectedBot}
          setSelectedBot={handleBotChange}
          selectedTimeRange={selectedTimeRange}
        />
        <TimeRangeSelector
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={handleTimeRangeChange}
        />
      </div>
    </div>
  );
};
