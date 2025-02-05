import { NavigationButton } from "./NavigationButton";
import { navigationItems } from "./config";

export const BottomNavigation = () => (
  <div className="mt-auto flex justify-between items-center">
    {navigationItems.map(({ icon: Icon, label }) => (
      <NavigationButton key={label} Icon={Icon} label={label} />
    ))}
  </div>
);
