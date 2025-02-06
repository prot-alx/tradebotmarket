// Просто генерация данных, реальные данные должны приходить с бэка
import { ChartDataPoint, TimeRange } from "@/types";

export const generateChartData = (
  points: number,
  timeRange: TimeRange
): ChartDataPoint[] => {
  let lastValue = 50;
  const now = new Date();

  if (timeRange === "30d") {
    // Получаем первый день текущего месяца
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    // Получаем последний день текущего месяца
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const totalWeeks = Math.ceil(
      (endOfMonth.getDate() - startOfMonth.getDate()) / 7
    );

    return Array.from({ length: totalWeeks }, (_, i) => {
      lastValue += (Math.random() - 0.5) * 20;
      const date = new Date(startOfMonth);
      date.setDate(date.getDate() + i * 7); // Каждая следующая неделя

      return {
        name: date.getTime().toString(),
        value: lastValue,
      };
    });
  }

  // Остальные случаи остаются без изменений
  return Array.from({ length: points }, (_, i) => {
    lastValue += (Math.random() - 0.5) * 20;
    const date = new Date(now);

    switch (timeRange) {
      case "24h":
        date.setHours(date.getHours() - (points - i));
        break;
      case "7d":
        date.setDate(date.getDate() - (points - i));
        break;
      case "all_time":
        date.setMonth(date.getMonth() - (points - i));
        break;
    }

    return {
      name: date.getTime().toString(),
      value: lastValue,
    };
  });
};

export const formatChartTick = (
  timestamp: string,
  timeRange: TimeRange
): string => {
  const date = new Date(parseInt(timestamp));

  switch (timeRange) {
    case "24h":
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    case "7d":
      return date.toLocaleDateString([], { weekday: "short" });
    case "30d": {
      // Получаем номер недели в месяце
      const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
      const weekNumber = Math.ceil(
        (date.getDate() - startOfMonth.getDate() + startOfMonth.getDay()) / 7
      );
      return `Неделя ${weekNumber}`;
    }
    case "all_time":
      return date.toLocaleDateString([], { month: "short" });
    default:
      return date.toLocaleTimeString();
  }
};

export const getPointsForTimeRange = (timeRange: TimeRange): number => {
  switch (timeRange) {
    case "24h":
      return 24;
    case "7d":
      return 7;
    case "30d": {
      // Вычисляем количество недель в текущем месяце
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      return Math.ceil((endOfMonth.getDate() - startOfMonth.getDate()) / 7);
    }
    case "all_time":
      return 6;
    default:
      return 24;
  }
};
