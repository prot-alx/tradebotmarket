import { Menu } from "lucide-react";

export const Header = () => (
  <div className="flex justify-between items-center mb-6">
    <Menu className="w-6 h-6" />
    <h1 className="text-2xl font-light">Dashboard</h1>
    <div className="w-6 h-6" />
  </div>
);
