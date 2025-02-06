import { initialData } from "@/data";

export const TradingCapital = () => (
  <div className="">
    <div className="text-slate-blue mb-2 font-bold">trading capital</div>
    <div className="text-2xl sm:text-5xl md:text-7xl font-light">
      {initialData.trading_capital}{" "}
      {initialData.trading_capital_currency.toUpperCase()}
    </div>
  </div>
);
