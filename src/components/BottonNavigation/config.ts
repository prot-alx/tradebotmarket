import {
  ChartBar,
  DollarSign,
  LucideIcon,
  Menu,
  Settings,
  ShoppingCart,
} from "lucide-react";

type NavigationItem = {
  icon: LucideIcon;
  label: string;
};

export const navigationItems: NavigationItem[] = [
  { icon: Menu, label: "Dashboard" },
  { icon: ChartBar, label: "Megabot" },
  { icon: ShoppingCart, label: "Bot market" },
  { icon: DollarSign, label: "Coin prices" },
  { icon: Settings, label: "Profile" },
];
