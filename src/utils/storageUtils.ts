import { initialData } from "@/data";
import { TradingData } from "@/types";

const STORAGE_KEY = "tradingData";

export const saveTradingData = (data: TradingData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getTradingData = (): TradingData => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) {
    saveTradingData(initialData);
    return initialData;
  }

  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error("Error parsing trading data from localStorage:", error);
    saveTradingData(initialData);
    return initialData;
  }
};
