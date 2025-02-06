import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { navigationItems } from "@/components/BottonNavigation/config";

export const Header = () => {
  const location = useLocation();

  const getCurrentPageTitle = (pathname: string) => {
    const currentPage = navigationItems.find((item) => item.path === pathname);
    return currentPage ? currentPage.label : "Dashboard";
  };

  return (
    <div className="flex justify-between items-center mb-4 bg-amber-500">
      <Menu className="w-9 h-9" />
      <h1 className="text-2xl font-light">
        {getCurrentPageTitle(location.pathname)}
      </h1>
      <div className="w-6 h-6" />
    </div>
  );
};
