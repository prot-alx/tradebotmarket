import { initialData } from "@/data";

export const BalanceInfo = () => (
  <div className="flex justify-between mb-8">
    <div>
      <div className="text-gray-400">BALANCE:</div>
      <div className="text-xl">{initialData.balance}</div>
    </div>
    <div>
      <div className="text-gray-400">ON HOLD:</div>
      <div className="text-xl">{initialData.on_hold}</div>
    </div>
  </div>
);
