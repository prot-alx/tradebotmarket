import { TimeRange } from "@/types";

interface TimeRangeSelectorProps {
  selectedTimeRange: TimeRange;
  setSelectedTimeRange: (range: TimeRange) => void;
}

const timeRangeLabels: Record<TimeRange, string> = {
  "24h": "24h",
  "7d": "7 days",
  "30d": "30 days",
  all_time: "All time",
};

const timeRanges: TimeRange[] = ["24h", "7d", "30d", "all_time"];

export const TimeRangeSelector = ({
  selectedTimeRange,
  setSelectedTimeRange,
}: TimeRangeSelectorProps) => (
  <div className="flex justify-between">
    <span className="text-slate-blue text-2xl font-bold max-sm:hidden">Time Range:</span>
    {timeRanges.map((range) => (
      <button
        key={range}
        onClick={() => setSelectedTimeRange(range)}
        className={`px-4 py-2 rounded-full border-2 w-[120px] h-[50px]  ${
          selectedTimeRange === range ? "" : "text-slate-blue border-slate-blue"
        }`}
      >
        {timeRangeLabels[range]}
      </button>
    ))}
  </div>
);
