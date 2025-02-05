import { initialData } from "@/data";
import { BotName, TimeRange } from "@/types";
import { getBotColor, getBotPerformance } from "@/utils";

interface BotGridProps {
  selectedBot: BotName;
  setSelectedBot: (botName: BotName) => void;
  selectedTimeRange: TimeRange;
}

export const BotGrid = ({
  selectedBot,
  setSelectedBot,
  selectedTimeRange,
}: BotGridProps) => (
  <div className="grid grid-cols-3 gap-4 mb-8">
    {initialData.bots.map((bot) => (
      <button
        key={bot.name}
        onClick={() => setSelectedBot(bot.name)}
        className={`p-4 rounded-lg flex flex-col items-center cursor-pointer ${
          selectedBot === bot.name ? "bg-slate-800" : ""
        }`}
      >
        <div
          className="w-8 h-8 mb-2"
          style={{
            backgroundColor: getBotColor(bot.name),
          }}
        />
        <div className="text-sm">
          {bot.name.replace("_bot", "").toUpperCase()}
        </div>
        <div
          className={`text-sm ${
            getBotPerformance(bot.name, selectedTimeRange) >= 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {getBotPerformance(bot.name, selectedTimeRange) >= 0 ? "+" : ""}
          {getBotPerformance(bot.name, selectedTimeRange)}%
        </div>
      </button>
    ))}
  </div>
);
