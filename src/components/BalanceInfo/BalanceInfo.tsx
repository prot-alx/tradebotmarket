import { initialData } from "@/data";
import { HIcon } from "@/images/BalanceInfo";

export const BalanceInfo = () => (
  <div className="flex justify-between text-2xl font-bold gap-5">
    <div className="text-pure-white max-md:text-xl">
      {/* Первая строка: balance */}
      <div className="flex justify-between items-center gap-2">
        <div className="text-slate-blue text-left max-md:text-xs">balance:</div>
        <div className="flex items-center gap-2">
          {initialData.balance}
          <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
        </div>
      </div>

      {/* Вторая строка: On HoLD */}
      <div className="flex justify-between items-center gap-2">
        <div className="text-slate-blue text-left max-md:text-xs">On HoLD:</div>
        <div className="flex items-center gap-2">
          {initialData.on_hold}
          <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
);
