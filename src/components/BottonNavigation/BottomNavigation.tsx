import { useNavigate, useLocation } from "react-router-dom";
import { NavigationButton } from "./NavigationButton";
import { navigationItems } from "./config";

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveLabel = (pathname: string) => {
    const item = navigationItems.find((item) => item.path === pathname);
    return item ? item.label : "Dashboard";
  };

  return (
    <div className="mt-auto flex justify-around items-center">
      {navigationItems.map(({ icon, label, path }) => (
        <NavigationButton
          key={label}
          icon={icon}
          label={label}
          isActive={getActiveLabel(location.pathname) === label}
          onClick={() => navigate(path)}
        />
      ))}
    </div>
  );
};
