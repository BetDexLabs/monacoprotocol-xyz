type CrossIconProps = {
  size?: "small" | "default";
};

export const Cross = ({ size = "default" }: CrossIconProps) => (
  <svg
    width={size === "small" ? 20 : 30}
    height={size === "small" ? 20 : 30}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="4"
      y1="4"
      x2="20"
      y2="20"
      stroke="currentColor"
      strokeWidth="3"
      stroke-linecap="round"
    />
    <line
      x1="20"
      y1="4"
      x2="4"
      y2="20"
      stroke="currentColor"
      strokeWidth="3"
      stroke-linecap="round"
    />
  </svg>
);
