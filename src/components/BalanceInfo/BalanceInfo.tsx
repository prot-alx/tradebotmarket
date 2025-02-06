import { initialData } from "@/data";
import { HIcon } from "@/images/BalanceInfo";

export const BalanceInfo = () => (
  <div className="flex justify-between text-2xl font-bold gap-5">
    <div className="text-slate-blue text-left max-md:text-xs">
      <div>balance:</div>
      <div>On HoLD:</div>
    </div>

    <div className="text-pure-white text-right max-md:text-xl">
      <div className="flex justify-end items-center gap-2">
        {initialData.balance}
        <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
      </div>
      <div className="flex justify-end items-center gap-2">
        {initialData.on_hold}
        <img alt="balance-icon" src={HIcon} className="w-6 h-6" />
      </div>
    </div>
  </div>
);
