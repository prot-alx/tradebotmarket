import { LucideIcon } from "lucide-react";

type NavigationButtonProps = {
  Icon: LucideIcon;
  label: string;
};

export const NavigationButton = ({ Icon, label }: NavigationButtonProps) => (
  <button className="flex flex-col items-center">
    <Icon className="w-6 h-6" />
    <span className="text-xs">{label}</span>
  </button>
);
