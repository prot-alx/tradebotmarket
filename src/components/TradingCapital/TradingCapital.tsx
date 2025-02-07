import { initialData } from "@/data";

export const TradingCapital = () => (
  <div>
    <div className="text-slate-blue mb-2 font-normal" style={{ fontSize: '1em' }}>
      trading capital
    </div>
    <div className="font-bold" style={{ fontSize: 'clamp(1.5em, 5vw, 4.5em)' }}>
      {initialData.trading_capital}{" "}
      {initialData.trading_capital_currency.toUpperCase()}
    </div>
  </div>
);