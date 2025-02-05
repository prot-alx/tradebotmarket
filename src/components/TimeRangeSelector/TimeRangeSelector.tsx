import { TimeRange, timeRanges } from "@/types";

interface TimeRangeSelectorProps {
  selectedTimeRange: TimeRange;
  setSelectedTimeRange: (range: TimeRange) => void;
}

export const TimeRangeSelector = ({
  selectedTimeRange,
  setSelectedTimeRange,
}: TimeRangeSelectorProps) => (
  <div className="flex justify-between mb-8">
    {timeRanges.map((range) => (
      <button
        key={range}
        onClick={() => setSelectedTimeRange(range)}
        className={`px-4 py-2 rounded-full ${
          selectedTimeRange === range ? "bg-blue-600" : "bg-slate-800"
        }`}
      >
        {range}
      </button>
    ))}
  </div>
);
