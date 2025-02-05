import { useState, useEffect } from "react";
import { getTradingData, saveTradingData } from "@/utils";
import {
  BalanceInfo,
  BotGrid,
  BotPerformanceChart,
  BottomNavigation,
  Header,
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
    <div className="h-screen w-screen bg-slate-900 text-white p-4 flex flex-col">
      <Header />
      <TradingCapital />
      <BalanceInfo />
      <BotPerformanceChart
        selectedBot={selectedBot}
        selectedTimeRange={selectedTimeRange}
      />
      <BotGrid
        selectedBot={selectedBot}
        setSelectedBot={handleBotChange}
        selectedTimeRange={selectedTimeRange}
      />
      <TimeRangeSelector
        selectedTimeRange={selectedTimeRange}
        setSelectedTimeRange={handleTimeRangeChange}
      />
      <BottomNavigation />
    </div>
  );
};
