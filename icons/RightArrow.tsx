import { FC } from "react";
import { IconProps } from "./type";

export const RightArrow: FC<IconProps> = ({ className }) => (
  <svg
    width="15"
    height="28"
    viewBox="0 0 15 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 14C15.0009 14.5482 14.8951 15.0911 14.6886 15.5976C14.4821 16.1042 14.1791 16.5643 13.7968 16.9515L2.90827 28L-1.29016e-07 25.0485L10.8865 14L-1.0949e-06 2.95155L2.90827 -1.27124e-07L13.7947 11.0485C14.1774 11.4355 14.4808 11.8956 14.6877 12.4021C14.8945 12.9087 15.0007 13.4517 15 14Z"
      fill="currentColor"
    />
  </svg>
);
