import { initialData } from "@/data";

export const TradingCapital = () => (
  <div className="mb-8">
    <div className="text-gray-400 mb-2">TRADING CAPITAL</div>
    <div className="text-4xl font-light">
      {initialData.trading_capital}{" "}
      {initialData.trading_capital_currency.toUpperCase()}
    </div>
  </div>
);
