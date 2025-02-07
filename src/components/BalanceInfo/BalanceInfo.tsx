import { initialData } from "@/data";
import { HIcon } from "@/images/BalanceInfo";

export const BalanceInfo = () => (
  <div className="flex justify-between gap-5">
    <div className="text-pure-white">
      <div className="flex justify-between items-center gap-2 text-2xl">
        <div className="text-slate-blue text-left text-lg">balance:</div>
        <div className="flex items-center gap-2">
          {initialData.balance}
          <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex justify-between items-center gap-2 text-2xl">
        <div className="text-slate-blue text-left text-lg">On HoLD:</div>
        <div className="flex items-center gap-2">
          {initialData.on_hold}
          <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
);
