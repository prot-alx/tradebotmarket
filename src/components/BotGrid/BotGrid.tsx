import { initialData } from "@/data";
import { BotIcon } from "@/images/BotIcon";
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
  <div className="grid grid-cols-3 gap-1 h-[30vh]">
    {initialData.bots.map((bot) => (
      <button
        key={bot.name}
        onClick={() => setSelectedBot(bot.name)}
        className={`p-4 max-md:p-2 rounded-[2px] flex flex-col items-center justify-center cursor-pointer bg-deep-navy ${
          selectedBot === bot.name ? "bg-midnight-blue" : ""
        }`}
      >
        <BotIcon
          color={getBotColor(bot.name)}
          className="w-[70px] max-sm:w-[40px]"
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
