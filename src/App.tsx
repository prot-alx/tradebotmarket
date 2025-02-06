import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Dashboard, BotMarket, CoinPrices, Megabot, Profile } from "@/pages";
import { MainLayout } from "@/layouts";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/megabot" element={<Megabot />} />
          <Route path="/bot-market" element={<BotMarket />} />
          <Route path="/coin-prices" element={<CoinPrices />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
