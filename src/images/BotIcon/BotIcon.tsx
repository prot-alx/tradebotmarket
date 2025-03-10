interface BotIconProps {
  color: string;
  width?: number;
  height?: number;
  className?: string;
}

export const BotIcon = ({ color, width, height, className }: BotIconProps) => (
  <svg
    width={width ?? "100%"}
    height={height ?? "100%"}
    viewBox="0 0 90 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 0H40V10H30V0ZM20 10H70V20H20V10ZM10 20H80V30H10V20ZM10 40H80V60H10V40ZM50 0H60V10H50V0ZM40 30H50V40H40V30ZM0 60H10V70H0V60ZM20 60H30V70H20V60ZM40 60H50V70H40V60ZM60 60H70V70H60V60ZM80 60H90V70H80V60ZM0 30H20V60H0V30ZM70 30H90V60H70V30Z"
      fill={color}
    />
  </svg>
);
