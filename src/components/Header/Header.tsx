import { useLocation } from "react-router-dom";
import { navigationItems } from "@/components/BottonNavigation/config";
import { MenuIcon, RefreshButton } from "@/images/Header";

export const Header = () => {
  const location = useLocation();

  const getCurrentPageTitle = (pathname: string) => {
    const currentPage = navigationItems.find((item) => item.path === pathname);
    return currentPage ? currentPage.label : "Dashboard";
  };

  return (
    <div className="flex justify-between items-center px-6 my-4">
      <img
        alt="burger-icon"
        className="w-11 max-sm:w-8 brightness-100"
        src={MenuIcon}
      ></img>
      <h1 className="text-[34px] max-sm:text-2xl font-light text-slate-blue">
        {getCurrentPageTitle(location.pathname)}
      </h1>
      <img
        alt="refresh-button"
        className="w-11 max-sm:w-8 brightness-100"
        src={RefreshButton}
      ></img>
    </div>
  );
};
