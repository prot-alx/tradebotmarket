import { TimeRange } from "@/types";

interface TimeRangeSelectorProps {
  selectedTimeRange: TimeRange;
  setSelectedTimeRange: (range: TimeRange) => void;
}

const timeRangeLabels: Record<TimeRange, string> = {
  "24h": "24h",
  "7d": "7d",
  "30d": "30d",
  all_time: "All",
};

const timeRanges: TimeRange[] = ["24h", "7d", "30d", "all_time"];

export const TimeRangeSelector = ({
  selectedTimeRange,
  setSelectedTimeRange,
}: TimeRangeSelectorProps) => (
  <div className="flex justify-between items-center">
    <span className="text-slate-blue text-2xl font-bold max-sm:hidden">Time Range:</span>
    {timeRanges.map((range) => (
      <button
        key={range}
        onClick={() => setSelectedTimeRange(range)}
        className={`px-4 py-2 rounded-full border-2 w-[120px] h-[50px] max-sm:w-[60px] max-sm:h-[40px] ${
          selectedTimeRange === range ? "" : "text-slate-blue border-slate-blue"
        }`}
      >
        {timeRangeLabels[range]}
      </button>
    ))}
  </div>
);
