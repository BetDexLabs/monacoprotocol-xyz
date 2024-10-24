type BurgerMenuIconProps = {
  size?: "small" | "default";
};

export const BurgerMenu = ({ size = "default" }: BurgerMenuIconProps) => (
  <svg
    width={size === "small" ? 25 : 40}
    height={size === "small" ? 16 : 25}
    viewBox="0 0 40 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="5" rx="2.5" fill="currentColor" />
    <rect y="10" width="40" height="5" rx="2.5" fill="currentColor" />
    <rect y="20" width="40" height="5" rx="2.5" fill="currentColor" />
  </svg>
);
