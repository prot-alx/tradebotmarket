import { initialData } from "@/data";

export const TradingCapital = () => (
  <div>
    <div className="text-slate-blue mb-2 font-normal">trading capital</div>
    <div className="text-2xl sm:text-5xl md:text-7xl font-bold">
      {initialData.trading_capital}{" "}
      {initialData.trading_capital_currency.toUpperCase()}
    </div>
  </div>
);
