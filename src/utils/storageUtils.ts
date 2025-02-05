import { TimeRange, BotName } from "@/types";

const STORAGE_KEYS = {
  TIME_RANGE: "selectedTimeRange",
  BOT: "selectedBot",
};

export const saveSelectedTimeRange = (timeRange: TimeRange) => {
  localStorage.setItem(STORAGE_KEYS.TIME_RANGE, timeRange);
};

export const saveSelectedBot = (bot: BotName) => {
  localStorage.setItem(STORAGE_KEYS.BOT, bot);
};

export const getSelectedTimeRange = (): TimeRange | null => {
  return localStorage.getItem(STORAGE_KEYS.TIME_RANGE) as TimeRange | null;
};

export const getSelectedBot = (): BotName | null => {
  return localStorage.getItem(STORAGE_KEYS.BOT) as BotName | null;
};
