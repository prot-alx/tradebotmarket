import {
  botmarketIcon,
  coinpricesIcon,
  dashboardIcon,
  megabotIcon,
  profileIcon,
} from "@/images/BottomNavMenu";

type NavigationItem = {
  icon: string;
  label: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  { icon: dashboardIcon, label: "Dashboard", path: "/dashboard" },
  { icon: megabotIcon, label: "Megabot", path: "/megabot" },
  { icon: botmarketIcon, label: "Bot market", path: "/bot-market" },
  { icon: coinpricesIcon, label: "Coin prices", path: "/coin-prices" },
  { icon: profileIcon, label: "Profile", path: "/profile" },
];
