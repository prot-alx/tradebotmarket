import { useState, useEffect } from "react";
import {
  getSelectedTimeRange,
  getSelectedBot,
  saveSelectedTimeRange,
  saveSelectedBot,
} from "@/utils";
import {
  BalanceInfo,
  BotGrid,
  BotPerformanceChart,
  BottomNavigation,
  Header,
  TimeRangeSelector,
  TradingCapital,
} from "@/components";
import { BotName, TimeRange, timeRanges } from "@/types";

export const Dashboard = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("24h");
  const [selectedBot, setSelectedBot] = useState<BotName>("yellow_bot");

  useEffect(() => {
    const savedTimeRange = getSelectedTimeRange();
    const savedBot = getSelectedBot();

    if (savedTimeRange && timeRanges.includes(savedTimeRange)) {
      setSelectedTimeRange(savedTimeRange);
    }
    if (savedBot) {
      setSelectedBot(savedBot);
    }
  }, []);

  useEffect(() => {
    saveSelectedTimeRange(selectedTimeRange);
    saveSelectedBot(selectedBot);
  }, [selectedTimeRange, selectedBot]);

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
        setSelectedBot={setSelectedBot}
        selectedTimeRange={selectedTimeRange}
      />
      <TimeRangeSelector
        selectedTimeRange={selectedTimeRange}
        setSelectedTimeRange={setSelectedTimeRange}
      />
      <BottomNavigation />
    </div>
  );
};
