export type TimeRange = "24h" | "7d" | "30d" | "all_time";

export interface TradingData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: Bot[];
}

export type BotName =
  | "yellow_bot"
  | "white_bot"
  | "green_bot"
  | "red_bot"
  | "blue_bot"
  | "orange_bot";

export type ChartDataPoint = {
  name: string;
  value: number;
};

export type Bot = {
  name: BotName;
  cost: number;
  "24h": number;
  "7d": number;
  "30d": number;
  "60d": number;
  "90d": number;
  all_time: number;
};

export interface TradingData {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
  bots: Bot[];
}

export const timeRanges: TimeRange[] = ["24h", "7d", "30d", "all_time"];

export interface BotPerformanceChartProps {
  selectedBot: BotName;
  selectedTimeRange: TimeRange;
}
