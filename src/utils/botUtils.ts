import { initialData } from "@/data";
import { BotName, TimeRange } from "@/types";

const BOT_COLORS: Record<BotName, string> = {
  yellow_bot: "#FFD700",
  white_bot: "#FFFFFF",
  green_bot: "#32CD32",
  red_bot: "#FF4500",
  blue_bot: "#1E90FF",
  orange_bot: "#FFA500",
};

export const getBotColor = (botName: BotName): string => BOT_COLORS[botName];

export const getBotPerformance = (
  botName: BotName,
  timeRange: TimeRange
): number => {
  const bot = initialData.bots.find((b) => b.name === botName);
  return bot ? bot[timeRange] : 0;
};
