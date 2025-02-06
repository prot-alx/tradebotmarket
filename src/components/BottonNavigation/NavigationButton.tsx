type NavigationButtonProps = {
  icon: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const NavigationButton = ({
  icon,
  label,
  isActive = false,
  onClick,
}: NavigationButtonProps) => (
  <button
    className="relative flex flex-col items-center justify-center h-20 w-20 max-sm:h-14"
    onClick={onClick}
  >
    <img
      src={icon}
      alt={label}
      className={`w-11 max-sm:w-8 transition-colors duration-300 ${
        isActive ? "brightness-300" : "brightness-100"
      }`}
    />
    <span
      className={`mt-2 text-xl transition-colors duration-200 whitespace-nowrap
        ${isActive ? "text-pure-white" : "text-slate-blue"} 
        max-sm:hidden`}
    >
      {label}
    </span>
  </button>
);
